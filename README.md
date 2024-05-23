# Switchboard Feeds Info Fetcher

## Description

This project is a Node.js application that interacts with the Switchboard Oracle on the Solana blockchain. It fetches information about the first 100 feeds, including their names, types, lease balances, and values. The feeds are then sorted by their lease balance and presented in a table format. This tool is useful for developers and analysts who want to quickly access and analyze feed data from the Switchboard Oracle.

## Features

- Connects to the Solana mainnet to fetch feed data.
- Retrieves and displays the first 100 feeds from Switchboard.
- Fetches detailed information for each feed, including name, type, lease balance, and value.
- Sorts the feeds by lease balance in descending order.
- Presents the sorted feed information in a table format for easy readability.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/switchboard-feeds-info-fetcher.git
   cd switchboard-feeds-info-fetcher
2. Install the dependencies:
   ```bash
   npm install

## Usage

1. Replace the placeholder SWITCHBOARD_PROGRAM_ID in the code with the actual Switchboard program ID from the Switchboard documentation.

2. Run the script:

   ```bash
   node index.js

3. The script will fetch the feed information, sort them by lease balance, and display the results in a table.

## Example Output

      ┌─────────┬──────────────────────────────┬──────────┬─────────────┬────────┐
      │ (index) │            name              │   type   │ leaseBalance│ value  │
      ├─────────┼──────────────────────────────┼──────────┼─────────────┼────────┤
      │    0    │ 'Feed Name 1'                │ 'Type 1' │     0.5     │ 123.45 │
      │    1    │ 'Feed Name 2'                │ 'Type 2' │     0.45    │ 678.90 │
      │   ...   │             ...              │   ...    │     ...     │  ...   │
      └─────────┴──────────────────────────────┴──────────┴─────────────┴────────┘

## License

This project is licensed under the MIT License
