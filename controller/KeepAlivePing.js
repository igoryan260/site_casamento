class KeepAlivePing {
    constructor() { };

    static async interval(req, res) {
        console.log("Servidor reiniciado");
        res.status(200).json("Server running correctly");
    }
};

export default KeepAlivePing;