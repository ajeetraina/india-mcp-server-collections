# India MCP Server Collections

<p align="center">
  <img src="https://modelcontextprotocol.io/img/mcp-logo.svg" alt="MCP Logo" width="200"/>
</p>

A curated collection of Model Context Protocol (MCP) servers related to India. This repository serves as a central hub for discovering and using MCP servers that provide India-specific services and data.

## What is Model Context Protocol (MCP)?

Model Context Protocol (MCP) is an open protocol that enables seamless integration between AI models (like Claude, GPT) and external data sources and tools. It allows AI assistants to securely interact with local and remote resources through standardized server implementations.

Think of MCP like a USB-C port for AI applications:
- Just as USB-C provides a standardized way to connect devices to peripherals, MCP provides a standardized way to connect AI models to different data sources and tools
- This enables AI models to access real-time information and perform actions in the real world
- MCP servers can run locally or in the cloud, providing a secure bridge between AI models and services

For more information, visit the [official MCP documentation](https://modelcontextprotocol.io/introduction).

## Featured India MCP Servers

### Transportation

#### Indian Railways
| Repository | Description | Language | Stars |
|------------|-------------|----------|-------|
| [indian-railways-mcp](https://github.com/rajprem4214/indian-railways-mcp) | Live station status and train information | TypeScript | 1 |
| [indian-railway-mcp](https://github.com/amith-vp/indian-railway-mcp) | Train search, seat availability, delay info, station/train codes | TypeScript | 19 |

#### Air Travel
| Repository | Description | Language | Stars |
|------------|-------------|----------|-------|
| [india-flight-mcp](https://github.com/ravi-bytes/india-flight-mcp) | Find cheapest airfares for flights in India | JavaScript | 0 |
| [ecogotravel](https://github.com/alisajil/ecogotravel) | Travel booking MCP server for India | JavaScript | 0 |

### Financial Services

| Repository | Description | Language | Stars |
|------------|-------------|----------|-------|
| [Indian-Stock-Exchange-MCP](https://github.com/anuragkrishna/Indian-Stock-Exchange-MCP) | Access to Indian Stock Exchange data | TypeScript | 0 |
| [stock-screener-mcp](https://github.com/saisrikark/stock-screener-mcp) | Browse and screen India's stock market | JavaScript | 0 |

### Healthcare

| Repository | Description | Language | Stars |
|------------|-------------|----------|-------|
| [INDIAN_MEDICINE_MCP_SERVER](https://github.com/nowitsidb/INDIAN_MEDICINE_MCP_SERVER) | Medicine information lookup, alternative suggestions, composition analysis | Python | 1 |

## Getting Started

To use these MCP servers, you'll need an MCP-compatible client such as:
- Claude Desktop
- GitHub Copilot in VS Code
- Custom MCP clients

See our detailed [Setup Guide](./SETUP.md) for instructions on how to set up and use these MCP servers.

## Repository Structure

The repository is organized into the following directories:

- `README.md` - Main documentation
- `SETUP.md` - General setup instructions
- `CONTRIBUTING.md` - Contribution guidelines
- `LICENSE` - MIT License
- `transportation/` - Transportation-related MCP servers
  - `README.md`
- `finance/` - Finance-related MCP servers
  - `README.md`
- `healthcare/` - Healthcare-related MCP servers
  - `README.md`

Each category directory contains a README file with detailed information about the MCP servers in that category.

## Contributing

We welcome contributions from the community! Whether you want to add new MCP servers, update information, or improve documentation, please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## Resources

- [Model Context Protocol Documentation](https://modelcontextprotocol.io/introduction)
- [MCP GitHub Organization](https://github.com/modelcontextprotocol)
- [Awesome MCP Servers List](https://github.com/wong2/awesome-mcp-servers)
- [MCP SDK TypeScript](https://github.com/modelcontextprotocol/typescript-sdk)
- [MCP SDK Python](https://github.com/modelcontextprotocol/python-sdk)

## License

This repository is licensed under the [MIT License](./LICENSE).

---

<p align="center">
  <i>Want to create your own MCP server? Check out the <a href="https://modelcontextprotocol.io/build-a-server/overview">MCP Server Development Guide</a>!</i>
</p>
