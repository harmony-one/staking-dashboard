const { asyncHandler, createError } = require("./helpers");
const {
  validators,
  activeValidators,
  validatorInfo,
  delegationsByDelegator,
  delegationsByValidator
} = require("../services/sync");

module.exports = (app, db) => {
  app.get(
    "/validators",
    asyncHandler(async (req, res) => {
      res.json({ validators: validators() });

      //   res.json({ validators: data });
    })
  );

  app.get(
    "/validators/:address",
    asyncHandler(async (req, res) => {
      const data = await db.getCollectionData("validators");

      const validator = data.find(
        item => item.operator_address === req.params.address
      );

      if (!validator) {
        throw createError(400, "Not found");
      }

      res.json(validator);
    })
  );

  app.get(
    "/proposals",
    asyncHandler(async (req, res) => {
      const data = await db.getCollectionData("proposals");

      if (!data) {
        throw createError(400, "Not found");
      }

      res.json(data);
    })
  );

  app.get(
    "/networks",
    asyncHandler(async (req, res) => {
      const data = await db.getCollectionData("networks");

      if (!data) {
        throw createError(400, "Not found");
      }

      res.json(data);
    })
  );

  app.get(
    "/auth/accounts/:accountId",
    asyncHandler(async (req, res) => {
      const data = await db.getCollectionData("accounts");

      const account = data.find(
        item => item.value.address === req.params.accountId
      );

      if (!account) {
        throw createError(400, "Not found");
      }

      res.json(account);
    })
  );

  app.get(
    "/staking/parameters",
    asyncHandler(async (req, res) => {
      const allData = await db.getCollectionData("staking.parameters");
      const data = allData[0];

      if (!data) {
        throw createError(400, "Not found");
      }

      res.json(data);
    })
  );

  app.get(
    "/account",
    asyncHandler(async (req, res) => {
      const allData = await db.getCollectionData("accounts");
      const data = allData[0];

      if (!data) {
        throw createError(400, "Not found");
      }

      res.json(data);
    })
  );

  // // These endpoints below are used by "cosmos" api
  app.get(
    "/staking/pool",
    asyncHandler(async (req, res) => {
      const allData = await db.getCollectionData("staking.pool");
      const data = allData[0];

      if (!data) {
        throw createError(400, "Not found");
      }

      res.json(data);
    })
  );

  app.get(
    "/minting/annual-provisions",
    asyncHandler(async (req, res) => {
      res.json("18240689989533.703492076078609840");
    })
  );

  // For "/activity" page
  app.get(
    "/txs",
    asyncHandler(async (req, res) => {
      if (req.query && Object.keys(req.query).length) {
        // by sender
        if (req.query.sender) {
          const data = await db.getCollectionData("txs.BySender");

          return res.json(data);
        }
        if (req.query.recipient) {
          const data = await db.getCollectionData("txs.ByRecipient");

          return res.json(data);
        }
      }

      res.json([]);
    })
  );

  // Final step of transaction
  app.post("/txs", (req, res) => {
    res.json({
      height: "0",
      txhash: "CD68C99E83A8453E71A67F20DB7BF3057B85BDFA57D24D156C44A968F9D4E5D8"
    });
  });

  // Mocks for https://lcd.nylira.net/blocks/2369584
  app.get(
    "/blocks/:blockId",
    asyncHandler(async (req, res) => {
      const { blockId } = req.params;

      const allData = await db.getCollectionData("blocks");

      const data = allData.find(block => block.header.height === blockId);

      if (!data) {
        throw createError(400, "Not found");
      }

      res.json(data);
    })
  );

  app.get(
    "/txs/:txId",
    asyncHandler(async (req, res) => {
      const { txId } = req.params;

      const allData = await db.getCollectionData("transactions");

      const data = allData.find(tx => tx.txhash === txId);

      if (!data) {
        throw createError(400, "Not found");
      }

      res.json(data);
    })
  );
  //   app.get(
  //     "/validators",
  //     asyncHandler(async (req, res) => {
  //       const data = await db.getCollectionData("validators");

  //       if (!data) {
  //         throw createError(400, "Not found");
  //       }

  //       res.json({ validators: data });
  //     })
  //   );

  //   app.get(
  //     "/validators/:address",
  //     asyncHandler(async (req, res) => {
  //       const data = await db.getCollectionData("validators");

  //       const validator = data.find(
  //         item => item.operator_address === req.params.address
  //       );

  //       if (!validator) {
  //         throw createError(400, "Not found");
  //       }

  //       res.json(validator);
  //     })
  //   );

  //   app.get(
  //     "/proposals",
  //     asyncHandler(async (req, res) => {
  //       const data = await db.getCollectionData("proposals");

  //       if (!data) {
  //         throw createError(400, "Not found");
  //       }

  //       res.json(data);
  //     })
  //   );

  //   app.get(
  //     "/networks",
  //     asyncHandler(async (req, res) => {
  //       const data = await db.getCollectionData("networks");

  //       if (!data) {
  //         throw createError(400, "Not found");
  //       }

  //       res.json(data);
  //     })
  //   );

  //   app.get(
  //     "/auth/accounts/:accountId",
  //     asyncHandler(async (req, res) => {
  //       const data = await db.getCollectionData("accounts");

  //       const account = data.find(
  //         item => item.value.address === req.params.accountId
  //       );

  //       if (!account) {
  //         throw createError(400, "Not found");
  //       }

  //       res.json(account);
  //     })
  //   );

  //   app.get(
  //     "/staking/parameters",
  //     asyncHandler(async (req, res) => {
  //       const allData = await db.getCollectionData("staking.parameters");
  //       const data = allData[0];

  //       if (!data) {
  //         throw createError(400, "Not found");
  //       }

  //       res.json(data);
  //     })
  //   );

  //   app.get(
  //     "/account",
  //     asyncHandler(async (req, res) => {
  //       const allData = await db.getCollectionData("accounts");
  //       const data = allData[0];

  //       if (!data) {
  //         throw createError(400, "Not found");
  //       }

  //       res.json(data);
  //     })
  //   );

  //   // // These endpoints below are used by "cosmos" api
  //   app.get(
  //     "/staking/pool",
  //     asyncHandler(async (req, res) => {
  //       const allData = await db.getCollectionData("staking.pool");
  //       const data = allData[0];

  //       if (!data) {
  //         throw createError(400, "Not found");
  //       }

  //       res.json(data);
  //     })
  //   );

  //   app.get(
  //     "/minting/annual-provisions",
  //     asyncHandler(async (req, res) => {
  //       res.json("18240689989533.703492076078609840");
  //     })
  //   );

  //   // For "/activity" page
  //   app.get(
  //     "/txs",
  //     asyncHandler(async (req, res) => {
  //       if (req.query && Object.keys(req.query).length) {
  //         // by sender
  //         if (req.query.sender) {
  //           const data = await db.getCollectionData("txs.BySender");

  //           return res.json(data);
  //         }
  //         if (req.query.recipient) {
  //           const data = await db.getCollectionData("txs.ByRecipient");

  //           return res.json(data);
  //         }
  //       }

  //       res.json([]);
  //     })
  //   );

  //   // Final step of transaction
  //   app.post("/txs", (req, res) => {
  //     res.json({
  //       height: "0",
  //       txhash: "CD68C99E83A8453E71A67F20DB7BF3057B85BDFA57D24D156C44A968F9D4E5D8"
  //     });
  //   });

  //   // Mocks for https://lcd.nylira.net/blocks/2369584
  //   app.get(
  //     "/blocks/:blockId",
  //     asyncHandler(async (req, res) => {
  //       const { blockId } = req.params;

  //       const allData = await db.getCollectionData("blocks");

  //       const data = allData.find(block => block.header.height === blockId);

  //       if (!data) {
  //         throw createError(400, "Not found");
  //       }

  //       res.json(data);
  //     })
  //   );

  //   app.get(
  //     "/txs/:txId",
  //     asyncHandler(async (req, res) => {
  //       const { txId } = req.params;

  //       const allData = await db.getCollectionData("transactions");

  //       const data = allData.find(tx => tx.txhash === txId);

  //       if (!data) {
  //         throw createError(400, "Not found");
  //       }

  //       res.json(data);
  //     })
  //   );
};
