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

    verificaCadastro(){
        const arrDados =[
            $('#nome').val(),
            $('#email').val(),
            $('#senha').val(),
            $('#senhaRepeat').val(),
            $('#rg').val(),
            $('#cep').val(),
            $('#rua').val(),
            $('#estado').val(),
            $('#cidade').val(),            
            $('#numero').val(),
        ]

        return arrDados.map(dado => dado.length!=0)

    }

}

