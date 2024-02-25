/************** countdown merry ***************/
let dias = document.querySelector("#dias");
let horas = document.querySelector("#horas");
let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");

function countdown() {
    let merry = new Date("December 27, 2024, 18:00");
    let today = new Date();

    let seconds = (merry - today) / 1000

    let days = Math.floor((seconds / 3600 / 24))
    let hours = Math.floor((seconds / 3600) % 24)
    let minutes = Math.floor((seconds / 3600) % 60)
    let secds = Math.floor(seconds) % 60

    dias.innerHTML = days
    horas.innerHTML = formatTime(hours)
    minutos.innerHTML = formatTime(minutes)
    segundos.innerHTML = formatTime(secds)
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000)

/************** fim countdown merry ***************/

/************** adicionar, remover ou atualizar o carrinho **************/

function adicionarAoCarrinho(titulo, preco, id) {
    let cartTable = document.querySelector("#tbody_cart")

    //inserir linha
    let insertRow = cartTable.insertRow(-1)
    insertRow.id = id

    //inserir coluna
    var insertTitleProduct = insertRow.insertCell(0)
    var insertPriceProduct = insertRow.insertCell(1)
    var insertDeleteProduct = insertRow.insertCell(2)

    //inserir informações na tabela
    insertTitleProduct.innerHTML = titulo;
    insertPriceProduct.innerHTML = "R$ " + preco

    // Adicionar botão de remoção
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Remover";
    removeButton.addEventListener("click", function () {
        removerDoCarrinho(insertRow); // Chama a função para remover do carrinho
    });

    insertDeleteProduct.appendChild(removeButton);

    //atualizar total da compra
    atualizarTotalCompra();
}

function removerDoCarrinho(row) {
    var cartTable = document.querySelector("#table_cart");

    // Remover a linha da tabela
    cartTable.deleteRow(row.rowIndex);

    // Atualizar total da compra após a remoção
    atualizarTotalCompra();
}

function atualizarTotalCompra() {
    var cartTable = document.querySelector("#table_cart");
    var total = 0;

    for (var i = 1; i < cartTable.rows.length; i++) {
        total += parseFloat(cartTable.rows[i].cells[1].innerHTML.replace("R$ ", ""));
    }

    document.querySelector("#cart-total").innerHTML = "Total da sua compra: R$ " + total.toFixed(2);
}

/************** fim adicionar, remover ou atualizar o carrinho **************/

/******************** abrir e fechar carrinho ***************/
let iconCart = document.querySelector("#icon-cart");
let cart = document.querySelector("#cart");

iconCart.addEventListener("click", () => {
    if (cart.classList.contains("none")) {
        cart.classList.remove("none")
    } else {
        cart.classList.add("none")
    };
});
/******************** fim abrir e fechar carrinho ***************/
