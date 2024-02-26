import mercadopago, { Preference } from "mercadopago"
import { MercadoPagoConfig } from "mercadopago";
class Preferencia {
    constructor() {

    };

    static async novaPreferencia(req, res) {
        try {
            const client = new MercadoPagoConfig({ accessToken: `${process.env.ACCESS_TOKEN_MP}`, options: { timeout: 5000 } });
            const preference = new Preference(client);

            let price = parseFloat(req.body.price)
            const response = await preference.create({
                body: {
                    items: [
                        {
                            id: req.body.id,
                            title: req.body.description,
                            quantity: 1,
                            unit_price: price
                        }
                    ],
                },
                auto_return: "http://localhost:3000"
            })
            res.json({
                id: response.id
            });
        } catch (erro) {
            console.error(erro)
        }
    };
};
export default Preferencia;