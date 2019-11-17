const {asyncHandler, createError} = require("./helpers");

module.exports = (app, db) => {
    app.get("/validators", asyncHandler( async (req, res) => {
        const snapshot = await db.collection('validators').get();
        const data = snapshot.docs.map(doc => doc.data());

        if(!data) {
            throw createError(400, 'Not found');
        }

        res.json({ validators: data });
    }));

    app.get("/validators/:address", asyncHandler( async (req, res) => {
        const snapshot = await db.collection('validators').get();
        const data = snapshot.docs.map(doc => doc.data());

        const validator = data.find(
            item => (item.operator_address === req.params.address)
        );

        if(!validator) {
            throw createError(400, 'Not found');
        }

        res.json(validator);
    }));

    app.get("/proposals", asyncHandler( async (req, res) => {
        const snapshot = await db.collection('proposals').get();
        const data = snapshot.docs.map(doc => doc.data());

        if(!data) {
            throw createError(400, 'Not found');
        }

        res.json(data);
    }));

    app.get("/networks", asyncHandler( async (req, res) => {
        const snapshot = await db.collection('networks').get();
        const data = snapshot.docs.map(doc => doc.data());

        if(!data) {
            throw createError(400, 'Not found');
        }

        res.json(data);
    }));

    app.get("/auth/accounts/:accountId", asyncHandler( async (req, res) => {
        const snapshot = await db.collection('accounts').get();
        const data = snapshot.docs.map(doc => doc.data());

        const account = data.find(
            item => (item.value.address === req.params.accountId)
        );

        if(!account) {
            throw createError(400, 'Not found');
        }

        res.json(account);
    }));

    app.get("/staking/parameters", asyncHandler( async (req, res) => {
        const snapshot = await db.collection('staking.parameters').get();
        const data = snapshot.docs[0].data();

        if(!data) {
            throw createError(400, 'Not found');
        }

        res.json(data);
    }));

    app.get("/account", asyncHandler( async (req, res) => {
        const snapshot = await db.collection('accounts').get();
        const data = snapshot.docs[0].data();

        if(!data) {
            throw createError(400, 'Not found');
        }

        res.json(data);
    }));

    // // These endpoints below are used by "cosmos" api
    app.get("/staking/pool", asyncHandler( async (req, res) => {
        const snapshot = await db.collection('staking.pool').get();
        const data = snapshot.docs[0].data();

        if(!data) {
            throw createError(400, 'Not found');
        }

        res.json(data);
    }));

    app.get("/minting/annual-provisions", asyncHandler( async (req, res) => {
        res.json("18240689989533.703492076078609840");
    }));

    // For "/activity" page
    app.get("/txs", asyncHandler( async (req, res) => {
        if (req.query && Object.keys(req.query).length) {
            // by sender
            if (req.query.sender) {
                const snapshot = await db.collection('txs.BySender').get();
                const data = snapshot.docs.map(doc => doc.data());

                return res.json(data);
            }
            if (req.query.recipient) {
                const snapshot = await db.collection('txs.ByRecipient').get();
                const data = snapshot.docs.map(doc => doc.data());

                return res.json(data);
            }
        }

        res.json([]);
    }));

    // Final step of transaction
    app.post("/txs", (req, res) => {
        res.json({
            height: "0",
            txhash: "CD68C99E83A8453E71A67F20DB7BF3057B85BDFA57D24D156C44A968F9D4E5D8"
        });
    });


    // Mocks for https://lcd.nylira.net/blocks/2369584
    app.get("/blocks/:blockId", asyncHandler( async (req, res) => {
        const { blockId } = req.params;

        const snapshot = await db.collection('blocks').get();
        const blocks = snapshot.docs.map(doc => doc.data());

        const data = blocks.find(block => block.header.height === blockId);

        if(!data) {
            throw createError(400, 'Not found');
        }

        res.json(data);
    }));


    app.get("/txs/:txId", asyncHandler( async(req, res) => {
        const { txId } = req.params;

        const snapshot = await db.collection('transactions').get();
        const txs = snapshot.docs.map(doc => doc.data());

        const data = txs.find(tx => tx.txhash === txId);

        if(!data) {
            throw createError(400, 'Not found');
        }

        res.json(data);
    }));
}