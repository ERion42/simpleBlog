// establish dependencies
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes'); // not there anymore, but leaving it in anyway
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// Set routes
router.use('/users', userRoutes);
router.use('/projects', projectRoutes); // not there anymore, but leaving it in anyway

module.exports = router;
