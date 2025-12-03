const express = require("express");
const router = express.Router();

router.get("/online", (req, res) => {
    res.status(200).json({ok: true});
})

module.exports = router;