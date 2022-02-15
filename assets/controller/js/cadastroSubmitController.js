class CadastroSubmit extends ControladorDeAlertas{

    constructor() {
        super();
        this.gerenciadorSenha = new GerenciadorDeSenha();
        this.gerenciaEmail = new GerenciadorDeEmail();
        this.gerenciaCep = new GerenciadorDeCep($('#cep').val());
    }

    verificaConfirmacaoSenha(){
        const senha = $('#senha').val();
        const senhaRepeat = $('#senhaRepeat').val();
        const confirmadorSenha = this.gerenciadorSenha.confirma(senha, senhaRepeat);
        return confirmadorSenha
    }
    
    verificaConfirmacaoEmail(){
        const email = $('#email').val();
        const confirmadorEmail = this.gerenciaEmail.validaEmail(email);
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
        const checkDados = this.verificaCadastro();
        const confirmador = checkSenha && checkEmail && checkCep;
        const verificador = checkDados.indexOf(false) == -1;
        this.mostraMensagemIncompleta(verificador, confirmador);
    }
}


$("#btn-cadastro").on('click', (event) => {
    event.preventDefault();
    const cadastroAlertas = new CadastroSubmit();
    cadastroAlertas.exibeMensagem()
})

