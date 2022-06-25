const mongoose = require('mongoose');

const wizSpellSchema = new mongoose.Schema({
  level: String,
  name: String,
  range: String,
  duration: String,
  aoe: String,
  components: String,
  casting: String,
  saving: String,
  description: String,
})

module.exports = mongoose.model('WizSpell', wizSpellSchema);