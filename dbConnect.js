const mongoose=require('mongoose')

async function connection()
{
    try{
        await mongoose.connect('mongodb://0.0.0.0:27017/gladb')
        console.log('database is connected')

    }catch(error)
    {
        console.log(error)
    }


}
connection()

// mongoose.connect('mongodb://0.0.0.0:27017/code')