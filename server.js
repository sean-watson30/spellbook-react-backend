// ___________________DEPENDENCIES__________________________

const express = require ('express');
const mongoose = require ('mongoose');
const morgan = require ('morgan');
const cors = require ('cors');
const admin = require ('firebase-admin');
const wizSpellsController = require('./controllers/wizSpells');

const app = express();

require('dotenv').config();

// admin.initializeApp({
//   credential: admin.credential.cert(require('./firebase-service-key.json'))
// });

const { PORT = 4000, MONGODB_URL } = process.env;

mongoose.connect(MONGODB_URL);
mongoose.connection
  .on('connected', () => console.log('Connected to MongoDB'))
  .on('error', (err) => console.log('Error with MongoDB: ' + err.message))

// ___________________MIDDLEWARE__________________________

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/wizSpells', wizSpellsController);

// Authorization Middleware (see video)

// ___________________ROUTES__________________________

app.get('/', (req, res) => {
  res.send('Hello World');
})

// ___________________LISTENER__________________________

app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`)
});