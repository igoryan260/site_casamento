const mp = new MercadoPago('APP_USR-e4a6c510-47cc-4d42-b400-3f4fde4c0697', {
    locale: 'pt-BR'
});

/************ ir para a compra ***********************/
let btncompra = document.querySelector("#btn-compra")
btncompra.addEventListener("click", () => {

    btncompra.disabled = true;

    let tbodycart = document.querySelector("#tbody_cart");
    let qtditens = tbodycart.getElementsByTagName("tr").length;
    let itens;

    for (let i = 0; i < qtditens; i++) {
        let description = tbodycart.getElementsByTagName("tr")[i].firstChild.innerHTML
        let price = tbodycart.getElementsByTagName("tr")[i].cells[1].innerHTML.replace("R$ ", "")
        let id = tbodycart.getElementsByTagName("tr")[i].id
        let quantity = 1;

        /*dados dos itens que vão comprar*/
        const orderData = {
            description: description,
            price: price,
            quantity: quantity,
            id: id
        };
        itens = orderData
    }
    createPrefrence(itens)
});

//requisicao ao servidor para criar a preferencia de pagamento
let createPrefrence = async (itens) => {
    try {
        const response = await fetch("casamentobi.onrender.com/createPreference", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itens),
        })

        if (response.ok) {
            const preference = await response.json();
            createCheckoutButton(preference.id);
            btncompra.classList.add("none");
        } else {
            // Tratar erros específicos ou genéricos, conforme necessário
            console.error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            alert("Erro inesperado");
            btncompra.disabled = false;
        }
    } catch (error) {
        // Capturar erros de rede ou outros erros inesperados
        console.error("Erro inesperado:", error);
        alert("Erro inesperado");
        btncompra.disabled = false;
    }
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
                    onSubmit: () => { console.log("Processando pagamento") },
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
