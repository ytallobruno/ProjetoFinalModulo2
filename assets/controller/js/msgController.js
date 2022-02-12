class ControladorDeAlertas {
    constructor() {
        this.alertaSucesso = $('#msg-sucesso');
        this.alertaErro = $('#msg-erro');
        this.btn = $('#btn-submit');
        this.atributoAparece = "hidden";
        this.mudaDom = new ManipuladorDom();
    }

    mostraMensagem(confirmador) {
        if (confirmador) {
            this.mudaDom.colocaAtributo(this.alertaErro, this.atributoAparece);
            this.mudaDom.removeAtributo(this.alertaSucesso, this.atributoAparece);
        } else {
            this.mudaDom.colocaAtributo(this.alertaSucesso, this.atributoAparece);
            this.mudaDom.removeAtributo(this.alertaErro, this.atributoAparece);
        }
    }
}


const gerenciaEmail = new GerenciadorDeEmail();
const controlaAlerta = new ControladorDeAlertas();


$("#btn-submit").on('click', (event) => {
    event.preventDefault();
    const email= $('#email').val();
    const confirmadorEmail = gerenciaEmail.validaEmail(email);
    controlaAlerta.mostraMensagem(confirmadorEmail);
})

