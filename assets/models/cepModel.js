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
        $.ajax({
            url: "https://viacep.com.br/ws/" + cep + "/json/?callback=?",
            success: function (dados) {
                console.log('api chamada');
                return dados;
            },
            error: function () {
                console.log('CEP não encontrado');
            }
        });

    }

}