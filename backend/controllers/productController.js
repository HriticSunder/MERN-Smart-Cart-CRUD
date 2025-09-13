const productModel=require('../models/productModel')

//Get Products - /api/v1/product
exports.getProducts=async (req,res,next)=>{
    const query=req.query.keyword?{name:{
        $regex:req.query.keyword,
        $options:'i'
    }}:{}
    const products=await productModel.find(query);
    res.json({
        success:true,
        products
    })
}

//Get Single Products - /api/v1/product/:id
exports.getSingleProducts= async (req,res,next)=>{

    try{
        const product=await productModel.findById(req.params.id);
        res.json({
            success:true,
            product
        })
    }
    catch(err){
        res.status(404).json({
            success:false,
            message:"Unable to get the product with that ID"
        })
    }
}

