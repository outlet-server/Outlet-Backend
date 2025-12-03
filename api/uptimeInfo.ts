const express = require("express");
const router = express.Router();

router.get("/online", (req, res) => {
    res.json({ok: true})
})

module.exports = router;