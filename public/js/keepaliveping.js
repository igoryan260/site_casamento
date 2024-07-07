async function keepalaiveping() {
    await fetch("https://casamentobeig.onrender.com/keepaliveping", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error);
        });
};
//executar função a cada 10 minutos
setInterval(keepalaiveping, 600000)