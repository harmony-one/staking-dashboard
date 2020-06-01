#!/bin/bash

AUTO_CONFIRM=false
while getopts :n:y option
do
    case "${option}" in
        y) AUTO_CONFIRM=true
            ;;
        n) NETWORK=${OPTARG}
            case $NETWORK in
                (ostn) NETWORK=Openstakingnet;;
                (pstn) NETWORK=partnernet;;
                (stn) NETWORK=stressnet;;
				(mainnet) NETWORK=mainnet;;
            esac
            ;;
    esac
done

echo "Deleting database for" $NETWORK "(auto_confirm:" $AUTO_CONFIRM")"

if [ -z $NETWORK ]
then
    echo "Usage: sh clear_db.sh [-n] ostn/pstn/stn/mainnet [-y]"
    exit 0
fi

NETWORK_GLOBAL=$NETWORK"_global"
NETWORK_HISTORY=$NETWORK"_history"

echo "Clearing db" $NETWORK_GLOBAL "and" $NETWORK_HISTORY

if [ $AUTO_CONFIRM == true ]
then
    firebase firestore:delete --project  staking-explorer -r $NETWORK_GLOBAL -y
    firebase firestore:delete --project  staking-explorer -r $NETWORK_HISTORY -y
else
    firebase firestore:delete --project  staking-explorer -r $NETWORK_GLOBAL
    firebase firestore:delete --project  staking-explorer -r $NETWORK_HISTORY
fi
