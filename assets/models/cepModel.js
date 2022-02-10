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

    apiCep() {
        try {
            $.ajax({
                url: "https://viacep.com.br/ws/" + this.cep + "/json/?callback=?",
                success: function (dados) {
                    return dados
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