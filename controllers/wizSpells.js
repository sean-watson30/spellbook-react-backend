// ___________________DEPENDENCIES__________________________
const router = require('express').Router();
const WizSpell = require('../models/wizSpell');

// ___________________ROUTES__________________________

// INDEX
router.get('/', async (req, res) => {
  const spell = await WizSpell.find({});
    res.json(spell);
})

// CREATE
router.post('/', async (req, res) => {
  res.json(await WizSpell.create(req.body))
})

// UPDATE
router.put('/:id', async (req, res) => {
  res.json(await WizSpell.findByIdAndUpdate(
    req.params.id, 
    req.body, 
    { new: true }
  ));
})

// DELETE
router.delete('/:id', async (req, res) => {
  res.json(await WizSpell.findByIdAndDelete(req.params.id))
})

// ___________________Export__________________________
module.exports = router;