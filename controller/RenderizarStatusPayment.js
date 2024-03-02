class RenderizarStatusPayment {
    constructor() { };

    static async renderizarStatusSuccess(req, res) {
        res.render("paymentSuccess");
    }
    static async renderizarStatusFailure(req, res) {
        res.render("paymentFailure");
    }
    static async renderizarStatusPending(req, res) {
        res.render("paymentPending");
    }
};

export default RenderizarStatusPayment;