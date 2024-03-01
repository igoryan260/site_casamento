class RenderizarStatusPayment {
    constructor() { };

    static async renderizarStatus(req, res) {
        let response = req.body
        res.render("paymentSuccess", { response });
    }
};

export default RenderizarStatusPayment;