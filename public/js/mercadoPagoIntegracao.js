const mp = new MercadoPago('APP_USR-e4a6c510-47cc-4d42-b400-3f4fde4c0697', {
    locale: 'pt-BR'
});

/************ ir para a compra ***********************/
let btncompra = document.querySelector("#btn-compra")
btncompra.addEventListener("click", () => {

    btncompra.disabled = true;

    let tbodycart = document.querySelector("#tbody_cart");
    let qtditens = tbodycart.getElementsByTagName("tr").length;
    let itens = [];

    for (let i = 0; i < qtditens; i++) {
        let description = tbodycart.getElementsByTagName("tr")[i].firstChild.innerHTML
        let price = tbodycart.getElementsByTagName("tr")[i].cells[1].innerHTML.replace("R$ ", "")
        let id = tbodycart.getElementsByTagName("tr")[i].id

        /*dados dos itens que vão comprar*/
        const orderData = {
            description: description,
            price: price,
            id: id
        };
        itens.push(orderData);
    }
    createPrefrence(itens)
});

//requisicao ao servidor para criar a preferencia de pagamento
let createPrefrence = async (itens) => {
    fetch("http://localhost:3000/createPreference", {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(itens),
    })
        .then((response) => {
            return response.json();
        })
        .then((preference) => {
            createCheckoutButton(preference.id);

            document.querySelector("#btn-compra").classList.add("none");
        })
        .catch(function () {
            alert("Unexpected error");
            btncompra.disabled = false;
        });
};

/************ fim ir para a compra ***********************/

/*************** abrir checkout pro ********************/
function createCheckoutButton(preferenceId) {
    //inicializar o checkout
    const bricksBuilder = mp.bricks();

    const renderComponent = async (bricksBuilder) => {
        if (window.checkoutButton) window.checkoutButton.unmount();

        await bricksBuilder.create(
            "wallet",
            "wallet_container",
            {
                initialization: {
                    preferenceId: preferenceId
                },
                callbacks: {
                    onError: (error) => console.error(error),
                    onReady: () => { console.log("Sucesso ao abrir checkout!") }
                },
                customization: {
                    texts: {
                        valueProp: 'smart_option'
                    }
                }
            });
    }
    window.checkoutButton = renderComponent(bricksBuilder);
}
/*************** fim abrir checkout pro ********************/
