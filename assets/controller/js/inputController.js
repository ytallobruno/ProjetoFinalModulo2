class ControladorInput {

    constructor(input, campoInput, confirmadorCampo) {
        this.campoInput = campoInput;
        this.inputView = new ManipuladorDom();
        this.input = input;
        this.confirmadorCampo = confirmadorCampo;
    }

    marcaElemento() {
        if (this.confirmadorCampo) {
            this.inputView.mudaClasse(this.campoInput, 'border-success', 'border-danger')

        } else {
            this.inputView.mudaClasse(this.campoInput, 'border-danger', 'border-success')
        }
    }

}




const campoEmail = $('#email');
const campoSenhaRepeat = $('#senhaRepeat');

campoEmail.on('input', () => {
    const email = campoEmail.val();
    gerenciadorEmail = new GerenciadorDeEmail();
    confirmadorEmail = gerenciadorEmail.validaEmail(email);
    const controlaEmail = new ControladorInput(email, campoEmail, confirmadorEmail);
    controlaEmail.marcaElemento();
});


campoSenhaRepeat.on('input', () => {
    const senhaRepeat = campoSenhaRepeat.val();
    const senha = $('#senha').val();
    gerenciadorSenha = new GerenciadorDeSenha();
    confirmadorSenha = gerenciadorSenha.confirma(senha, senhaRepeat);
    const controlaSenha = new ControladorInput(senhaRepeat, campoSenhaRepeat, confirmadorSenha);
    controlaSenha.marcaElemento();
});

