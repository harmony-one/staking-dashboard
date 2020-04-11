#!/bin/bash

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
            esac
            ;;
    esac
done

echo "Deleting database for" $NETWORK "(auto_confirm:" $AUTO_CONFIRM ")"

if [ -z $NETWORK ]
then
    echo "Usage: sh clear_db.sh [-n] ostn/pstn/stn [-y]"
    exit 1
fi

NETWORK_GLOBAL=$NETWORK"_global"
NETWORK_HISTORY=$NETWORK"_history"

echo $NETWORK_GLOBAL $NETWORK_HISTORY

if [ $AUTO_CONFIRM ]
then
    firebase firestore:delete --project  staking-explorer -r $NETWORK_GLOBAL -y
else
    firebase firestore:delete --project  staking-explorer -r $NETWORK_GLOBAL
fi
