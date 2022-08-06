// ___________________DEPENDENCIES__________________________
const router = require('express').Router();
const WizSpell = require('../models/wizSpell');
// const admin = require ('firebase-admin');

// const serviceAccount = require('../firebase-service-key.json');


// ___________________Authorization Middleware__________________________
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });


// router.use(async (req, res, next) => {
//   const token = req.get('Authorization');
//   if (token) {
//     // console.log(token);
//     try {
//       const user = await admin.auth().verifyIdToken(token.replace('Bearer ', ''));
//       req.user = user;
//     } catch (error) {
//       req.user = null;
//     }
//     // console.log(user)
//   } else {
//     req.user = null;
//   }
//   next();
// })

// const isAuthenticated = (req, res, next) => {
//   if (!req.user) {
//     return res.status(401).json({ message: 'You must be logged in' });
//   } else {
//     return next();
//   }
// }

// ___________________ROUTES__________________________

// INDEX
router.get('/', async (req, res) => {
  const spell = await WizSpell.find({});
    res.json(spell);
})

// CREATE
// router.post('/', isAuthenticated, async (req, res) => {
router.post('/', async (req, res) => {
  // req.body.googleId = req.user.uid;
  res.json(await WizSpell.create(req.body));
})

// UPDATE
// router.put('/:id', isAuthenticated, async (req, res) => {
router.put('/:id', async (req, res) => {
  res.json(await WizSpell.findByIdAndUpdate(
    req.params.id, 
    req.body, 
    { new: true }
  ));
})

// DELETE
// router.delete('/:id', isAuthenticated, async (req, res) => {
router.delete('/:id', async (req, res) => {
  res.json(await WizSpell.findByIdAndDelete(req.params.id))
})

// ___________________Export__________________________
module.exports = router;