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
        } catch (error) {
            console.error(error)
        }
    }

    static async salvarVariosDocs(req, res) {
        try {
            await run();

            const documentos = [
                {
                    titulo: "4 potes hermeticos",
                    id: "4-potes-hermeticos",
                    src: "images/itens-lista-presente/Kit com 4 unidades de potes hermetico plastico.jpg",
                    preco: 55.00
                },
                {
                    titulo: "Lustre quadrado",
                    id: "lustre-quadrado",
                    src: "images/itens-lista-presente/Lustre Clearcrillic Cristal Acrílico Quadrado Perfeito.jpg",
                    preco: 50.00
                },
                {
                    titulo: "Lustre 6 luzes",
                    id: "lustre-6-luzes",
                    src: "images/itens-lista-presente/Rabbitking Modern Sputnik Lustre, 6-luz de teto para quarto, sala de jantar, cozinha, escritório (ouro).jpg",
                    preco: 155.00
                },
                {
                    titulo: "Jogo Toalhas 6 peças",
                    id: "jogo-toalhas-6-pecas",
                    src: "images/itens-lista-presente/Jogo De Toalhas 6 Peças Felpudas Grande Europa - Algodão (Vinho + Chumbo).jpg",
                    preco: 112.00
                },
                {
                    titulo: "10 Cabides",
                    id: "10-cabides",
                    src: "images/itens-lista-presente/Calceiro 10 Cabides Triplo Calça Reforçado Aço Cromado.webp",
                    preco: 65.00
                },
                {
                    titulo: "Cesto roupas sujas",
                    id: "cesto-roupas-sujas",
                    src: "images/itens-lista-presente/Cesto Balde De Roupas Suja Lavanderia Com Tampa 40 L Verde.webp",
                    preco: 160.00
                },
                {
                    titulo: "Espelho redondo decorativo",
                    id: "espelho-redondo-decorativo",
                    src: "images/itens-lista-presente/Espelho Redondo Decorativo Suspenso Alça 30cm + Pino Brinde.webp",
                    preco: 40.00
                },
                {
                    titulo: "Jogo tacas 6 peças",
                    id: "jogo-tacas-6-pecas",
                    src: "images/itens-lista-presente/Jogo 6 Taças Vidro Para Sobremesa Toffe.jpg",
                    preco: 55.00
                },
                {
                    titulo: "Jogo formas antiaderente",
                    id: "jogo-formas-antiaderente",
                    src: "images/itens-lista-presente/Jogo de Formas 3 Peças Com Fundo Removível Antiaderente Aço Carbono.jpg",
                    preco: 40.00
                },
                {
                    titulo: "Garrafa termica",
                    id: "garrafa-termica",
                    src: "images/itens-lista-presente/Garrafa Térmica Unitermi Verona 1 Litro Inox.jpg",
                    preco: 73.00
                },
                {
                    titulo: "Escorredor de loucas",
                    id: "escorredor-de-loucas",
                    src: "images/itens-lista-presente/Escorredor de Louças Zurique.jpg",
                    preco: 80.00
                },
                {
                    titulo: "Potes mantimentos kit",
                    id: "potes-mantimentos-kit",
                    src: "images/itens-lista-presente/Kit 5 Potes De Mantimentos Plástico Decorado Cor Conjunto Kit 5 Branco Color.webp",
                    preco: 35.00
                },

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