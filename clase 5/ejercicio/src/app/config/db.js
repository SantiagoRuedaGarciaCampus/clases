import mongoose from 'mongoose';

const DB_URI = `mongodb+srv://santirueda0917:FliaRueda1@arriendos.yaztr0w.mongodb.net/`

module.exports = () =>{
    const connect = ()=>{
        mongoose.connect(
            DB_URI,{
                keepAlive: true,
                useNewUrlParser: true,
                useUndefinedTopology: true
            },
            (err) =>{
                if(err){
                    console.log('DB Error');
                }
                else{
                    console.log('DB Connect');
                }
            }
        )
    }

    connect();
}