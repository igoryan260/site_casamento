import { MongoClient } from "mongodb";

const uri = process.env.STRING_CONNECTION;
const client = new MongoClient(uri);
const database = client.db("produtos")
const collection = database.collection("itens")

const run = async () => {
    try {
        await client.connect();

        await client.db("admin").command({ ping: 1 });

        console.log("Conexao com o banco de dados feita com sucesso");
    } catch (error) {
        console.log(error)
    }
}

const closeDb = async () => {
    await client.close();
    console.log("Desconexao com o banco de dados feita com sucesso")
}

export { run, closeDb, collection };