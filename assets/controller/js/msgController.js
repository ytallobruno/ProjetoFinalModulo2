class ControladorDeAlertas extends ControladorTamanhoInput{

    constructor() {
        super();
        this.alertaSucesso = $('#msg-sucesso');
        this.alertaErro = $('#msg-erro');
        this.alertaIncompleto = $('#msg-inputVazio');
        this.btn = $('#btn-submit');
        this.escondeAlerta = "hidden";
        this.mudaDom = new ManipuladorDom();
    }

    mostraMensagem(confirmador) {
        if (confirmador) {
            this.mudaDom.colocaAtributo(this.alertaErro, this.escondeAlerta, true);
            this.mudaDom.colocaAtributo(this.alertaIncompleto, this.escondeAlerta,true);
            this.mudaDom.removeAtributo(this.alertaSucesso, this.escondeAlerta);
        } else {
            this.mudaDom.colocaAtributo(this.alertaSucesso, this.escondeAlerta, true);
            this.mudaDom.colocaAtributo(this.alertaIncompleto, this.escondeAlerta,true);
            this.mudaDom.removeAtributo(this.alertaErro, this.escondeAlerta);
        }
    }

    mostraMensagemIncompleta(verificador, confirmador){
        if(verificador){
            this.mostraMensagem(confirmador);
        }else{
            this.mudaDom.removeAtributo(this.alertaIncompleto, this.escondeAlerta);
            this.mudaDom.colocaAtributo(this.alertaErro, this.escondeAlerta, true);
            this.mudaDom.colocaAtributo(this.alertaSucesso, this.escondeAlerta,true);
        }
    }
}



const gerenciaEmail = new GerenciadorDeEmail();
const controlaAlerta = new ControladorDeAlertas();

$("#btn-submit").on('click', (event) => {
    event.preventDefault();
    const email = $('#email').val();
    const confirmadorEmail = gerenciaEmail.validaEmail(email);
    const verificador = controlaAlerta.verificaTamEmail() && controlaAlerta.verificaTamSenha();
    controlaAlerta.mostraMensagemIncompleta(verificador, confirmadorEmail);
})

$("#btn-recuperacaoSenha").on('click', (event) => {
    event.preventDefault();
    const email = $('#email').val();
    const confirmadorEmail = gerenciaEmail.validaEmail(email);
    const verificador = controlaAlerta.verificaTamEmail();
    controlaAlerta.mostraMensagemIncompleta(verificador, confirmadorEmail);
})

