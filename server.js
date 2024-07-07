import app from "./app.js";

app.listen(process.env.PORT, () => {
    //executar função a cada 3 minutos +-

    setInterval(async function keepalaiveping() {
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
    }, 60000);

    console.log("Servidor ouvindo")
})