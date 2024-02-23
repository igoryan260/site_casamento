import express from "express";
import RenderizarIndex from "../controller/RenderizarIndex.js";

const router = express.Router();

router.get("/", RenderizarIndex.renderizarIndex);
router.get("/salvarDocumentos", RenderizarIndex.salvarVariosDocs)

export default router;