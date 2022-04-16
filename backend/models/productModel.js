const mongoose =require('mongoose');
const productSchema=mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your product name"],
        trim:true
    },
    description: {
        type: String,
        required: [true, "Please enter your product description"]
    },
    price: {
        type: Number,
        required: [true, "Please enter your product price"],
        maxLength: [8, "Please enter exceed 8 characters"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: 
            {
                public_id: {
                    type: String,
                    required: true
                },
                url: {
                    type: String,
                    required: true,
                }
            },
    category: {
                type: String,
                required: [true, "Enter Product Category"]
            },
    Stock:{
        type:String,
        required:[true,"please Enter product stock"],
        maxLength:[4,"stock cannot excced 4 characters"] ,
        default:1   
    },
    numofReviews: {
                type: Number,
                default: 0
            },
    reviews: [
                {
                    name: {
                        type: String,
                        required: true,
                    },
                    rating: {
        
                        type: Number,
                        required: true,
                    },
                    comment: {
                        type: String,
                        required: true,
                    }
                }
            ],
    createDate:{
        type:Date,
        default:Date.now
    } 
    
})

module.exports=mongoose.model("Product",productSchema)