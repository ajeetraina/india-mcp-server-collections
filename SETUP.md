# Setting Up and Using MCP Servers

This document provides general instructions on how to set up and use Model Context Protocol (MCP) servers with various clients.

## Prerequisites

- **Node.js**: Most TypeScript-based MCP servers require Node.js to be installed.
- **Python**: Python-based MCP servers require Python 3.7 or higher.
- **API Keys**: Some servers require API keys for external services.

## General Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/username/mcp-server-name.git
cd mcp-server-name
```

### 2. Install Dependencies

For TypeScript/JavaScript MCP servers:
```bash
npm install
```

For Python MCP servers:
```bash
pip install -r requirements.txt
```

### 3. Configure Environment Variables

Most MCP servers require configuration through environment variables. Create a `.env` file in the root directory and add the required variables.

Example:
```
API_KEY=your_api_key_here
PORT=3000
```

### 4. Run the Server

For TypeScript/JavaScript MCP servers:
```bash
npm start
```

For Python MCP servers:
```bash
python main.py
```

## Connecting MCP Servers to Clients

### Claude Desktop

1. Open Claude Desktop
2. Click on the Tools button (puzzle piece icon)
3. Click "Add Server"
4. Enter the server address (typically `http://localhost:3000` for local servers)
5. Click "Connect"
6. Accept any prompts to authorize the server

### VS Code (with GitHub Copilot)

1. Install the GitHub Copilot extension in VS Code
2. Create a `.vscode/mcp.json` file in your workspace with the following content:

```json
{
  "servers": {
    "server-name": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "mcp-server-name"]
    }
  }
}
```

3. Reload VS Code
4. The MCP server should now be available in GitHub Copilot

### Troubleshooting

- **Connection Issues**: Ensure the server is running and the port is correct
- **Authentication Errors**: Check that your API keys are properly configured
- **Permission Issues**: Some MCP servers require specific permissions to be granted
- **Missing Dependencies**: Ensure all required dependencies are installed

## Setting Up Specific India MCP Servers

Please refer to the individual README files in their respective folders for specific setup instructions:

- [Transportation MCP Servers](./transportation/README.md)
- [Financial MCP Servers](./finance/README.md)
- [Healthcare MCP Servers](./healthcare/README.md)
