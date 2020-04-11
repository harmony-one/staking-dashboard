#!/bin/bash
# Run command: . <path_to_script>/deploy.sh dev/prod

_CURR_LOC=$PWD
_ROOT="$(git rev-parse --show-toplevel)"

cd $_ROOT/frontend   # Must change to the firebase project location

HARMONY_STAKING_DASHBOARD_TARGET=$1
if [[ ! $_TARGET == "dev" ]] && [[ ! $_TARGET == "prod" ]] ;
then
    echo "Error: invalid target" $_TARGET
else
    firebase deploy --only hosting:$_TARGET
fi

cd $_CURR_LOC
