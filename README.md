# Local Development

#### In appengine folder


##### Create firebase config 
```
mkdir ./keys
touch ./keys/staking_exproler.json
```

##### Run db init script
```
node ./db_utils/db.js
```

##### Run app

developer:

```
npm run start:watch 
```

production:

```
npm run build
npm run prod
```

#### In frontend folder

```
npm run serve
```

# Production Deployment

## In frontend folder

### Clearing the db d uring network hard reset

```
npm run db-reset -- -n [ostn|pstn|stn] (-y)

-n: required. network indicator. Allowed values: ostn, pstn, stn
-y: optional. If present, auto-confirms db delete process. Used for auto-recovery during hard reset.
```

### Deployment

```
npm run deploy -- [dev|prod] (-y)

1st arg: required. project target. Allowed values: dev, prod
-y: optional. If present, auto-confirms db delete process. Used for auto-recovery during hard reset.
```

# Update networks table in firebase

- Go to mock-data/networks.js and edit the table.
- node db.js to update the networks table in firebase

# Current appengine backend project:

- staking-explorer2-268108

```npm run deploy -- prod (-y)``` will deploy the current project.

