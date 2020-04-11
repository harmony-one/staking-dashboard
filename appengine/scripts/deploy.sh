#!/bin/bash
# Run command: . <path_to_script>/deploy.sh dev/prod [-y]

# 1. Check that firebase service account key file exists


_CURR_LOC=$PWD
_ROOT="$(git rev-parse --show-toplevel)"
cd $_ROOT/appengine   # Must change to the google cloud app engine project location

_KEY_FILE=$_ROOT/appengine/keys/staking-explorer.json # default where key file is expected

_TARGET=$1
if [[ $_TARGET == "dev" ]];
then
    _PROJECT=staking-explorer
elif [[ $_TARGET == "prod" ]];
then
    _PROJECT=staking-explorer2-268108
fi

if [[ -z $_PROJECT ]];
then
    echo "Usage: . <path_to_script>deploy.sh dev/prod"
elif [[ ! -f $_ROOT/appengine/keys/staking_explorer.json ]] ;
then
    echo "Missing app engine service account key file at" $_KEY_FILE
else
    echo "Deploying app engine for" $_TARGET "for project" $_PROJECT
    gcloud config set project $_PROJECT
    # Deploy is a long process. Be patient.
    if [[ $2 == "-y" ]];
    then
        gcloud app deploy --quiet # Auto-confirmation.
    else
        gcloud app deploy
    fi
fi

cd $CURR_LOC
