import mercadopago, { Preference } from "mercadopago"
import { MercadoPagoConfig } from "mercadopago";
// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN_MP, options: { timeout: 5000 } });

class Preferencia {
    constructor() { };

    static async novaPreferencia(req, res) {

        let preferencia = new Preference(client)

        const preference = {
            items: [
                {
                    title: req.body.description,
                    id: req.body.id,
                    unit_price: Number(req.body.price)
                }
            ],
            back_urls: {
                "success": "http://localhost:8080/feedback",
                "failure": "http://localhost:8080/feedback",
                "pending": "http://localhost:8080/feedback"
            },
            auto_return: "approved",
        };

        preferencia.create({
            body: {
                preference,
            }
        }).then((response) => {
            res.json({
                id: response.body.id
            });
        }).catch((error) => {
            console.log(error);
        });
    };
};

export default Preferencia;