import express from "express";
import { run, closeDb, collection } from "../config/dbConnection.js";

class RenderizarIndex {
    constructor() {

    };

    static async renderizarIndex(req, res) {
        try {
            await run();

            const produtos = await collection.find({}).toArray()

            res.render("index", { produtos })

            await closeDb();
        } catch (error) {
            console.error(error)
        }
    }

    static async salvarVariosDocs(req, res) {
        try {
            await run();

            const documentos = [
                {
                    titulo: "Refrigerador eletrolux Frost Free 127v",
                    id: "refrigerador-eletrolux-frost-free-127",
                    src: "images/itens-lista-presente/refrigerador-frost-free-inox-eletrolux.webp",
                    preco: 2700.00
                },
                {
                    titulo: "Fogão 4 bocas continental inox",
                    id: "fogao-4-bocas-continental-inox",
                    src: "images/itens-lista-presente/fogao-4-bocas-continental-inox.avif",
                    preco: 1260.00
                }
            ]

            const result = await collection.insertMany(documentos);
            console.log(result)
            res.redirect("/");
        } catch (error) {
            console.error(error)
        }
    }
}

export default RenderizarIndex;