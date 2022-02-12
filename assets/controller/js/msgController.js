class ControladorDeAlertas{
    constructor(){
        this.alertaSucesso = $('#msg-sucesso');
        this.alertaErro = $('#msg-erro');
        this.atributo = "hidden";
        this.mudaDom = new ManipuladorDom();
    }

    mostraMensagem(confirmador){
        if(confirmador){
            this.mudaDom.removeAtributo(this.alertaSucesso,this.atributo);
        } else{
            this.mudaDom.removeAtributo(this.alertaErro,this.atributo);
        }
    }
}

const gerenciaEmail = new GerenciadorDeEmail();


$("#btn-submit").on('click', (event)=>{
    event.preventDefault();
    const confirmadorEmail = gerenciaEmail.validaEmail($("#email").val())
    const controlaAlerta = new ControladorDeAlertas();
    controlaAlerta.mostraMensagem(confirmadorEmail);
})