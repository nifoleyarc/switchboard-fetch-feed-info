const { SwitchboardProgram } = require('@switchboard-xyz/sdk');
const { Connection, PublicKey } = require('@solana/web3.js');

async function getFeedsSortedByLeaseBalance() {
    // Connection to the Solana mainnet
    const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');

    // Load the Switchboard program
    const programId = new PublicKey('switchboard_program_id'); // Replace with the actual program ID
    const switchboardProgram = await SwitchboardProgram.load(connection, programId);

    // Fetch all feeds
    const feeds = await switchboardProgram.getFeeds();

    // Check if there are at least 10 feeds
    if (feeds.length < 10) {
        console.error('Less than 10 feeds available');
        return [];
    }

    // Get the first 10 feeds
    const first10Feeds = feeds.slice(0, 10);

    // Fetch lease balances for the first 10 feeds
    const feedsWithBalances = await Promise.all(first10Feeds.map(async (feed) => {
        const leaseBalance = await switchboardProgram.getLeaseBalance(feed.publicKey);
        return { feed, leaseBalance };
    }));

    // Sort feeds by lease balance
    feedsWithBalances.sort((a, b) => b.leaseBalance - a.leaseBalance);

    return feedsWithBalances;
}

getFeedsSortedByLeaseBalance().then(feedsWithBalances => {
    feedsWithBalances.forEach(({ feed, leaseBalance }) => {
        console.log(`Feed: ${feed.publicKey.toString()}, Lease Balance: ${leaseBalance}`);
    });
}).catch(error => {
    console.error('Error fetching and sorting feeds:', error);
});
