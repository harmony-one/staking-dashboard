gcloud config set project staking-explorer2-268108
cp ./keys/service_account_staking_dashboard.json ./keys/staking_explorer.json
rm -rf node_modules
gcloud app deploy
