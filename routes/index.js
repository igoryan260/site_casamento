import express from "express";
import RenderizarIndex from "../controller/RenderizarIndex.js";

const router = express.Router();

router.get("/", RenderizarIndex.renderizarIndex);

//esta rota abaixo só funcionára caso queira adicionar novos itens para a lista de presente...
//router.get("/salvarDocumentos", RenderizarIndex.salvarVariosDocs)

export default router;