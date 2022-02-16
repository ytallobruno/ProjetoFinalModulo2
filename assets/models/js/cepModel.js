class GerenciadorDeCep {

    constructor(cep) {
        if (cep.match(/^[0-9]{8}$/)) {
            this.cep = cep;
            this.cepValidado = true;
        } else {
            this.cepValidado = false;
        }
    }
        
    getCepValidado() {
        return this.cepValidado
    }

    apiCep() {
        try {
            $.ajax({
                url: "https://viacep.com.br/ws/" + this.cep + "/json/",
                success: (result) => {
                    this.dadosApi = { ...result };
                },
                error: function (erro) {
                    throw new Error(erro);
                }
            });
        } catch (error) {
            console.error(error.message);
        }
    }

    getDadosApi() {
        return this.dadosApi
    }


}
