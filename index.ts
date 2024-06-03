// import { Keypair } from "@solana/web3.js";

// const keypair = Keypair.generate();

// console.log(`The public key is: `, keypair.publicKey.toBase58());
// console.log(`The secret key is: `, keypair.secretKey);
import "dotenv/config";
const bs58 = require('bs58');
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
const secretKey = bs58(process.env.SECRET_KEY);


const keypair = getKeypairFromEnvironment(secretKey)