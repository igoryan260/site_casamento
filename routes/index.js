import express from "express";
import RenderizarIndex from "../controller/RenderizarIndex.js";
import Preferencia from "../controller/Preferencia.js";
import RenderizarStatusPayment from "../controller/RenderizarStatusPayment.js";

const route = express.Router();
route.use(express.json());

route.get("/", RenderizarIndex.renderizarIndex);
route.get("/successpayment", RenderizarStatusPayment.renderizarStatusSuccess);
route.get("/failurepayment", RenderizarStatusPayment.renderizarStatusFailure);
route.get("/pendingpayment", RenderizarStatusPayment.renderizarStatusPending);
route.get("/feedback", (req, res) => {
    res.json({
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id
    });
});
route.post("/createPreference", Preferencia.novaPreferencia);
//esta rota abaixo só funcionára caso queira adicionar novos itens para a lista de presente...
//route.get("/salvarDocumentos", RenderizarIndex.salvarVariosDocs)

export default route;