import express from "express";
import RenderizarIndex from "../controller/RenderizarIndex.js";
import Preferencia from "../controller/Preferencia.js";

const router = express.Router();
router.use(express.json());

router.get("/", RenderizarIndex.renderizarIndex);
router.get("/feedback", (req, res) => {
    res.json({
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id
    });
});
router.post("/createPreference", Preferencia.novaPreferencia);

//esta rota abaixo só funcionára caso queira adicionar novos itens para a lista de presente...
//router.get("/salvarDocumentos", RenderizarIndex.salvarVariosDocs)

export default router;