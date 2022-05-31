# Variation of # Arweave Account: your identity on the [permaweb](https://arweave.org).

# React components for Arweave signing and verification.

# Installed "cross-env"
# Added to package.json "start2": "cross-env GENERATE_SOURCEMAP=false react-app-rewired start",

Permanent, decentralized, owned by you.

[Visit the permadapp](https://account.metaweave.xyz)

## Inspiration

As our wallets are our identity on the web 3, It becomes necessary to be able to recognize each other with human friendly features such as an avatar, a nickname and a unique handle. Through Arweave-Account, we can standardize profiles across multiple options  

## What it does

You can log in with either, ArConnect, arweave.app or Bundlr with $MATIC. Once connected, the app look for the latest transaction from your wallet with the tag `Protocol-Name: Account-<version>` and displays your profile according to what has been stored in there.
Then, you can click on "Edit Profile" to update it click on "save" to store it on arweave.

Account comes with a handy npm package `arweave-account` which makes easy for other applications to get the user profile from their wallet address or search for an user handle name.