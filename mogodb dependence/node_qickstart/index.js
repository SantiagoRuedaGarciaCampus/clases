// Variable de mongo, la cual nos servira para las conecciones
const { MongoClient } = require("mongodb")
// el string de la coneccion, no se te olvide cambiar el <password> por la contraseña
const uri = "mongodb+srv://santirueda0917:FliaRueda1@datosdeflitro.ojrgbty.mongodb.net/?retryWrites=true&w=majority"

//variable que tendra las funciones de MongoClient
const client = new MongoClient(uri)

//funcion de la coneccion
async function getCita(){
    try{
        const database = client.db("DatosFiltro");
        const citas = database.collection("citas")

        // obtener alguna cita
        /* const query = { estado:true } */
        //await citas.findOne({lugar:"Plaza san carlos"})

        //imprimir el resultado
        console.log(  citas.findOne({fecha:"2025-04-10"}))
    }
/*     catch(error){
        console.log('No se encontro el dato pedido, error:', error)
    } */
    finally{
        await client.close()
    }
}

getCita().catch(console.dir)