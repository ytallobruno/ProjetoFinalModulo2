class ControladorInput {

    constructor(input, campoInput, confirmadorCampo) {
        this.campoInput = campoInput;
        this.inputView = new ManipuladorDom();
        this.input = input;
        this.confirmadorCampo = confirmadorCampo;
    }

    marcaElemento() {
        console.log(this.confirmadorCampo)
        if (this.confirmadorCampo) {
            this.inputView.mudaClasse(this.campoInput, 'border-success', 'border-danger')

        } else {
            this.inputView.mudaClasse(this.campoInput, 'border-danger', 'border-success')
        }
    }

}




const campoEmail = $('#email');

campoEmail.on('input', () => {
    const inputEmail = $('#email').val();
    gerenciadorEmail = new GerenciadorDeEmail();
    confirmadorCampoEmail = gerenciadorEmail.validaEmail(inputEmail);
    const controlaEmail = new ControladorInput(inputEmail, campoEmail, confirmadorCampoEmail);
    controlaEmail.marcaElemento();
});

