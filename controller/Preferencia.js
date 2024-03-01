import mercadopago, { Preference } from "mercadopago"
import { MercadoPagoConfig } from "mercadopago";
class Preferencia {
    constructor() {

    };

    static async novaPreferencia(req, res) {
        try {
            const client = new MercadoPagoConfig({ accessToken: `${process.env.ACCESS_TOKEN_MP}`, options: { timeout: 5000 } });
            const preference = new Preference(client);

            //formatando os itens que vem da requisição e adicionando a um só array para o "items" do Mercado Pago
            let itemsrequisicao = req.body
            let itemsnovapreferencia = [];

            itemsrequisicao.forEach(item => {
                itemsnovapreferencia.push({
                    id: item.id,
                    title: item.description,
                    currency_id: 'BRL',
                    quantity: 1,
                    unit_price: parseFloat(item.price)
                })
            });

            console.log(itemsnovapreferencia);

            const response = await preference.create({
                body: {
                    items: itemsnovapreferencia,
                    back_urls: {
                        success: "localhost:3000/successpayment"
                    }
                }
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