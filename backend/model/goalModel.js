const mongoose = require ('mongoose')

const goalSchema = mongoose.Schema({
    text: {
        type : String, 
        required :[true , 'Please add a text value']
    },
    author: {
        type : String , 
        
    },
    genre: {
        type : String , 
        
    },
    pub_year: {
        type : Number , 
        
    },
    ISBN: {
        type : String , 
        
    }
    
}, 
{
    timestamps  :true,
}
)

module.exports = mongoose.model('Goal', goalSchema)