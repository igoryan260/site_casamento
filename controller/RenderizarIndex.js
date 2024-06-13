import express from "express";
import { run, closeDb, collection } from "../config/dbConnection.js";

class RenderizarIndex {
    constructor() {

    };

    static async renderizarIndex(req, res) {
        try {
            await run();

            const produtos = await collection.find({}).toArray();

            res.render("index", { produtos });
        } catch (error) {
            console.error(error)
        }
    }

    static async salvarVariosDocs(req, res) {
        try {
            await run();

            const documentos = [
                {
                    titulo: "kit mesa posta sousplast",
                    id: "kit-mesa-posta-sousplast",
                    src: "images/itens-lista-presente/kit mesa posta sousplast.webp",
                    preco: 180.00
                },
                {
                    titulo: "Jogo Café da manhã",
                    id: "jogo-cafe-da-manha",
                    src: "images/itens-lista-presente/jogo cafe da manha.webp",
                    preco: 190.00
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