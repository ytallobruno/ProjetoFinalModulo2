class ControladorTamanhoInput {

    verificaTamEmail(){
        const email = $('#email').val();
        const verificador = email.length != 0;
        return verificador;
    }

    verificaTamSenha(){
        const senha = $('#senha').val();
        const verificadorSenha = senha.length != 0;
        return verificadorSenha;
    }



}

