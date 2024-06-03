import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
    throw new Error("Provide a public key to check the balance of!");
}

async function checkBalance() {
    try {
        const publicKey = new PublicKey(suppliedPublicKey);

        const connection = new Connection("https://api.devnet.solana.com", "confirmed");

        const balanceInLamports = await connection.getBalance(publicKey);

        const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

        console.log(`Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL} SOL`);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Invalid public key or error retrieving balance:", error.message);
        } else {
            console.error("Unexpected error:", error);
        }
    }
}

checkBalance();
