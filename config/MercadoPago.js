// SDK do Mercado Pago
import { MercadoPagoConfig } from 'mercadopago';
// Adicione as credenciais
const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });

const preference = new Preference(client);

preference.create({
    body: {
        items: [
            {
                title: 'Meu produto',
                quantity: 1,
                unit_price: 25
            }
        ],
    }
})
    .then(console.log)
    .catch(console.log);
