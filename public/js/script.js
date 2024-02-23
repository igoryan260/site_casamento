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

/************** adicionar ao carrinho **************/

function adicionarAoCarrinho(titulo, preco) {
    let cartTable = document.querySelector("#table_cart")

    //inserir linha
    let insertRow = cartTable.insertRow(-1)

    //inserir coluna
    var insertTitleProduct = insertRow.insertCell(0)
    var insertPriceProduct = insertRow.insertCell(1)

    //inserir informações na tabela
    insertTitleProduct.innerHTML = titulo;
    insertPriceProduct.innerHTML = "R$ " + preco

    //atualizar total da compra
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

/************** fim adicionar ao carrinho **************/
