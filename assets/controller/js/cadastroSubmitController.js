class CadastroSubmit {

    constructor() {
        this.gerenciadorSenha = new GerenciadorDeSenha();
        this.gerenciaEmail = new GerenciadorDeEmail();
        this.gerenciaCep = new GerenciadorDeCep($('#cep').val());
        this.controlaAlerta = new ControladorDeAlertas();
    }

    verificaConfirmacaoSenha(){
        const senha = $('#senha').val();
        const senhaRepeat = $('#senhaRepeat').val();
        const confirmadorSenha = gerenciadorSenha.confirma(senha, senhaRepeat);
        return confirmadorSenha
    }
    
    verificaConfirmacaoEmail(){
        const email = $('#email').val();
        const confirmadorEmail = gerenciaEmail.validaEmail(email);
        return confirmadorEmail
    }

    verificaConfirmacaoCep(){
        const confirmadorCep = this.gerenciaCep.getCepValidado();
        return confirmadorCep
    }

    exibeMensagem(){
        const checkSenha = this.verificaConfirmacaoSenha();
        const checkEmail = this.verificaConfirmacaoEmail();
        const checkCep = this.verificaConfirmacaoCep();
        this.controlaAlerta.mostraMensagem(checkSenha && checkEmail && checkCep)
    }
}


$("#btn-cadastro").on('click', (event) => {
    event.preventDefault();
    const cadastroAlertas = new CadastroSubmit();
    cadastroAlertas.exibeMensagem()
})

