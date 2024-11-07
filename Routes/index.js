const router = require("express").Router();

router.use('/customer')
router.use('/home-owner')
router.use('/service-providers')
router.use('/service-requests')
router.use('/quotes')
router.use('/services')
router.use('/stats')

module.exports = router;