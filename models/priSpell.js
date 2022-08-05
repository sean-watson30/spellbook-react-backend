const mongoose = require('mongoose');

const priSpellSchema = new mongoose.Schema({
  level: String,
  name: String,
  school: String,
  range: String,
  duration: String,
  aoe: String,
  components: String,
  casting: String,
  saving: String,
  description: String,
  googleId: String,
})

module.exports = mongoose.model('PriSpell', priSpellSchema);