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
                    titulo: "Micro-ondas eletrolux inox 20L",
                    id: "microondas-02",
                    src: "images/itens-lista-presente/microondas02.webp",
                    preco: 680.00
                },
                {
                    titulo: "Guarda-roupa casal 6 portas",
                    id: "guarda-roupas-06-portas",
                    src: "images/itens-lista-presente/guarda-roupas.webp",
                    preco: 870.00
                },
                {
                    titulo: "Armário de cozinha completo Madesa",
                    id: "armario-cozinha-completo-madesa",
                    src: "images/itens-lista-presente/armario-cozinha-madesa.webp",
                    preco: 960.00
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