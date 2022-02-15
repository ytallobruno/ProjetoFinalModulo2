class ControladorTamanhoInput {

    constructor(){
        this.email = $('#email').val();
        this.senha =  $('#senha').val();
    }

    verificaTamEmail(){
        const verificador = this.email.length != 0;
        return verificador;
    }

    verificaTamSenha(){
        const verificadorSenha = this.senha.length != 0;
        return verificadorSenha;
    }

}

