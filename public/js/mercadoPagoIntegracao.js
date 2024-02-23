const mp = new MercadoPago('APP_USR-e4a6c510-47cc-4d42-b400-3f4fde4c0697');
const bricksBuilder = mp.bricks();


bricksBuilder.create("wallet", "wallet_container", {
    initialization: {
        preferenceId: "<PREFERENCE_ID>"
    },
    customization: {
        texts: {
            valueProp: 'smart_option'
        }
    }
});
