const express = require('express');

const mongoose = require('mongoose');

const userRouter = require('./routes/user');
const restaurantRouter = require('./routes/restaurant')
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.set('trust proxy', 1);

const PORT =3000;
const authRouter = require('./routes/auth')
app.use(express.json());
app.use(cors({
    origin:'http://localhost:4200',
    methods:['GET','POST','PUT','DELETE','PATCH'],
    allowedHeaders:['content-type','Authorization'],
    exposedHeaders:['content-type','x-powered-by'],
    credentials:false
}))

mongoose.connect('mongodb://localhost:27017/foodordering'
   ).then(()=> {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
})

app.use('/user', userRouter);
app.use('/restaurant',restaurantRouter);
app.get('/', (req,res) => {
    res.status(200).send('Welcome to the Food API');
})
app.use('/',authRouter);
app.use(morgan('dev'))
app.listen(PORT , () => {
    console.log(`Server running at http://localhost:${PORT}`)
})