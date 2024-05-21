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
                    titulo: "Smart TV LG LED 32",
                    id: "smart-tv-lg-led-32",
                    src: "images/itens-lista-presente/Smart TV LG LED 32.webp",
                    preco: 1000.00
                },
                {
                    titulo: "Máquina de Lavar Consul 12Kg",
                    id: "maquina-de-lavar-consul-12kg",
                    src: "images/itens-lista-presente/Máquina de Lavar Consul 12Kg.webp",
                    preco: 1600.00
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