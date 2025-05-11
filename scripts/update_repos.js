/**
 * GitHub Repository Updater Script
 * 
 * This script automates the process of searching for India-related MCP servers
 * on GitHub and updating the repository with new discoveries.
 * 
 * Run with: node update_repos.js
 * 
 * Note: Requires GitHub Personal Access Token set as GITHUB_TOKEN environment variable.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// GitHub API configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) {
  console.error('Error: GITHUB_TOKEN environment variable not set');
  process.exit(1);
}

// Search queries to find India-related MCP servers
const SEARCH_QUERIES = [
  'india mcp server',
  'indian railways mcp',
  'india upi mcp',
  'india aadhaar mcp',
  'india healthcare mcp',
  'india government mcp',
  'india stack mcp',
  'india finance mcp',
  'india model context protocol'
];

// GitHub search API endpoint
const GITHUB_API_SEARCH = 'https://api.github.com/search/repositories';

/**
 * Perform a GitHub API search
 * @param {string} query - Search query
 * @returns {Promise<Array>} - Search results
 */
async function searchGitHub(query) {
  return new Promise((resolve, reject) => {
    const encodedQuery = encodeURIComponent(query);
    const options = {
      hostname: 'api.github.com',
      path: `/search/repositories?q=${encodedQuery}&sort=stars&order=desc`,
      method: 'GET',
      headers: {
        'User-Agent': 'India-MCP-Server-Collection-Updater',
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`GitHub API returned status ${res.statusCode}: ${data}`));
          return;
        }
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData.items || []);
        } catch (err) {
          reject(new Error(`Error parsing GitHub API response: ${err.message}`));
        }
      });
    });

    req.on('error', (err) => {
      reject(new Error(`Error making GitHub API request: ${err.message}`));
    });

    req.end();
  });
}

/**
 * Categorize repositories based on name and description
 * @param {Object} repo - Repository data
 * @returns {string} - Category
 */
function categorizeRepository(repo) {
  const name = repo.name.toLowerCase();
  const description = (repo.description || '').toLowerCase();
  
  if (name.includes('railway') || name.includes('train') || description.includes('railway') || description.includes('train')) {
    return 'transportation/railway';
  } else if (name.includes('flight') || name.includes('air') || description.includes('flight') || description.includes('air travel')) {
    return 'transportation/air';
  } else if (name.includes('upi') || name.includes('payment') || description.includes('upi') || description.includes('payment')) {
    return 'finance/payment';
  } else if (name.includes('stock') || description.includes('stock') || description.includes('market')) {
    return 'finance/stock';
  } else if (name.includes('health') || name.includes('medicine') || name.includes('ayushman') || 
            description.includes('health') || description.includes('medicine') || description.includes('ayushman')) {
    return 'healthcare';
  } else if (name.includes('government') || name.includes('aadhaar') || name.includes('stack') || 
            description.includes('government') || description.includes('aadhaar') || description.includes('stack')) {
    return 'government';
  } else {
    return 'other';
  }
}

/**
 * Format repository data for markdown
 * @param {Object} repo - Repository data
 * @returns {string} - Markdown formatted string
 */
function formatRepositoryMarkdown(repo) {
  return `| [${repo.name}](${repo.html_url}) | ${repo.description || 'No description available'} | ${repo.language || 'Unknown'} | ${repo.stargazers_count} |`;
}

/**
 * Main function to run the updater
 */
async function main() {
  console.log('Starting India MCP Server Collection updater...');
  
  // Storage for discovered repositories (key: repo full_name)
  const discoveredRepos = new Map();
  
  // Search for repositories
  for (const query of SEARCH_QUERIES) {
    console.log(`Searching GitHub for: ${query}`);
    try {
      const results = await searchGitHub(query);
      console.log(`Found ${results.length} repositories`);
      
      // Add repositories to the map (to avoid duplicates)
      for (const repo of results) {
        if (!discoveredRepos.has(repo.full_name)) {
          discoveredRepos.set(repo.full_name, {
            ...repo,
            category: categorizeRepository(repo)
          });
        }
      }
    } catch (err) {
      console.error(`Error searching for "${query}": ${err.message}`);
    }
    
    // Sleep to avoid hitting GitHub API rate limits
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log(`Discovered ${discoveredRepos.size} unique repositories`);
  
  // Group repositories by category
  const categorizedRepos = {};
  for (const repo of discoveredRepos.values()) {
    if (!categorizedRepos[repo.category]) {
      categorizedRepos[repo.category] = [];
    }
    categorizedRepos[repo.category].push(repo);
  }
  
  // Generate reports for each category
  for (const category in categorizedRepos) {
    const repos = categorizedRepos[category];
    console.log(`Category ${category}: ${repos.length} repositories`);
    
    // Sort by star count
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    
    // Generate markdown
    let markdown = `# ${category.split('/').map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(' ')} MCP Servers\n\n`;
    markdown += `*Updated: ${new Date().toISOString().split('T')[0]}*\n\n`;
    markdown += `| Repository | Description | Language | Stars |\n`;
    markdown += `|------------|-------------|----------|-------|\n`;
    
    for (const repo of repos) {
      markdown += formatRepositoryMarkdown(repo) + '\n';
    }
    
    // Save to a file (this is just a simulation; in a real implementation
    // you would update the actual repository files)
    console.log(`Generated report for ${category}:\n${markdown}`);
  }
  
  console.log('Finished processing repositories');
}

// Run the script
main().catch(err => {
  console.error(`Error running updater: ${err.message}`);
  process.exit(1);
});
