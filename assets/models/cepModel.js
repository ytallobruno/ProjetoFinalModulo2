class GerenciadorDeCep {

    validaCep(cep) {
        const cepValido = /^[0-9]{8}$/;
        if (cep.match(cepValido)) {
            return true;
        } else {
            return false;
        }
    }

    apiCep(cep) {
        try {
            $.ajax({
                url: "https://viacep.com.br/ws/" + cep + "/json/?callback=?",
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