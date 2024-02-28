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
                    titulo: "Candelabro pingente",
                    id: "candelabro-pingente",
                    src: "images/itens-lista-presente/candelabro-pingente.png",
                    preco: 180.00
                },
                {
                    titulo: "Jogo canecas café",
                    id: "jogo-canecas-cafe",
                    src: "images/itens-lista-presente/jogo-canecas-cafe.webp",
                    preco: 82.00
                },
                {
                    titulo: "Pipoqueira",
                    id: "pipoqueira",
                    src: "images/itens-lista-presente/pipoqueira.webp",
                    preco: 100.00
                },
                {
                    titulo: "Jogo Toalhas 6 peças",
                    id: "jogo-toalhas-6-pecas",
                    src: "images/itens-lista-presente/Jogo De Toalhas 6 Peças Felpudas Grande Europa - Algodão (Vinho + Chumbo).jpg",
                    preco: 112.00
                },
                {
                    titulo: "Kit 12 peças utensílios",
                    id: "kit-12-pecas-utensilios",
                    src: "images/itens-lista-presente/kit-12-pecas-utensilios.webp",
                    preco: 65.00
                },
                {
                    titulo: "Kit lavabo",
                    id: "kit-lavabo",
                    src: "images/itens-lista-presente/kit-lavabo.webp",
                    preco: 75.00
                },
                {
                    titulo: "Panela de pressão elétrica",
                    id: "penela-pressao-eletrica",
                    src: "images/itens-lista-presente/penela-pressao-eletrica.webp",
                    preco: 290.00
                },
                {
                    titulo: "Maquina de waffle",
                    id: "maquina-waffle",
                    src: "images/itens-lista-presente/maquina-waffle.avif",
                    preco: 150.00
                },
                {
                    titulo: "Cafeteira elétrica arno",
                    id: "cafeteira-arno",
                    src: "images/itens-lista-presente/cafeteira-arno.avif",
                    preco: 99.00
                },
                {
                    titulo: "Gabinete armário do banheiro",
                    id: "gabinete-armario-banheiro",
                    src: "images/itens-lista-presente/gabinete-armario-banheiro.avif",
                    preco: 285.00
                },
                {
                    titulo: "Kit cestos organizadores",
                    id: "kit-cestos-organizadores",
                    src: "images/itens-lista-presente/kit-cestos-organizadores.jpg",
                    preco: 85.90
                },
                {
                    titulo: "Capa de colchão impermeável",
                    id: "capa-colchao-impermeavel",
                    src: "images/itens-lista-presente/capa-colchao-impermeavel.jpg",
                    preco: 62.00
                },
                {
                    titulo: "Buffet 3 portas master",
                    id: "buffet-3-portas-master",
                    src: "images/itens-lista-presente/buffet-3-portas-master.avif",
                    preco: 240.00
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