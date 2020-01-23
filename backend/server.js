const express=require('express');
const cors=require('cors');
const app = express();
const morgan = require('morgan');
const bodyParser=require('body-parser');
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator');
const mongoose=require('mongoose'); 
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true , useUnifiedTopology: true ,useCreateIndex:true})
.then(()=>{
    console.log("Connection established");
})

mongoose.connection.on('error',err=>{
    console.log(`DB connection error:${err.message}`);
});

const authRoutes=require("./routes/userAuth")

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
 app.use(cors())
app.use(expressValidator());
app.use('/',authRoutes);
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({eror:"Unauthorized!!"});
    }
  });


  const port =process.env.PORT || 2709;

  app.listen(port,() => {
      console.log(`A Node JS api is listening on port: ${port}`)
  });