// ___________________DEPENDENCIES__________________________

const express = require ('express');
const mongoose = require ('mongoose');
const morgan = require ('morgan');
const cors = require ('cors');
// const admin = require ('firebase-admin');
const wizSpellsController = require('./controllers/wizSpells');

const app = express();

require('dotenv').config();

// const serviceAccount = require('./firebase-service-key.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
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
// app.use(async (req, res, next) => {
//   const token = req.get('Authorization');
//   if (token) {
//     console.log(token);
//     const user = await admin.auth().verifyIdToken(token.replace('Bearer ', ''));
//     console.log(user)
//   }
//   next();
// })

// ___________________ROUTES__________________________

app.get('/', (req, res) => {
  res.send('Hello World');
})

// ___________________LISTENER__________________________

app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`)
});