gcloud config set project staking-explorer-test
cp ./keys/service_account_staking_explorer_test.json ./keys/staking_explorer.json
rm -rf node_modules
gcloud app deploy
