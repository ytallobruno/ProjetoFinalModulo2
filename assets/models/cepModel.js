class GerenciadorDeCep {

    constructor(cep){
        try {
            if (cep.match(/^[0-9]{8}$/)){
                this.cep = cep;
                this.cepValidado = true;
            } else{
                this.cepValidado = false;
                throw new Error('Cep inválido')
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    getCepValidado(){
        return this.cepValidado
    }

    
    getDadosApi(){
        return this.dadosApi
    }

    apiCep() {
        try {
            $.ajax({
                url: "https://viacep.com.br/ws/" + this.cep + "/json/",
                success: (result) => {
                    this.dadosApi = {...result};
                },
                error: function () {
                    throw new Error ('CEP não encontrado');
                }
            });
        } catch (error) {
            console.error(error.message)
        }
    }
}
