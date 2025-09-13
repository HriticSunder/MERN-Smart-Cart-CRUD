const connectDatabase=require('../config/connectDatabase');
const dotenv=require('dotenv')
const product=require('../models/productModel');
const products=require('../data/products.json');
const path=require('path')

dotenv.config({ path: path.join(__dirname, '..', 'config', 'config.env') });
connectDatabase();

const seeder=async (err,req,res,next)=>{
    try{
        await product.deleteMany().then(()=>{
            console.log('Database Cleared');
        })
        await product.insertMany(products).then(()=>{
            console.log('Inserted Items');
        })
    }
    catch(err){
        console.log(err.message)
    }

    process.exit()
}
    

seeder();