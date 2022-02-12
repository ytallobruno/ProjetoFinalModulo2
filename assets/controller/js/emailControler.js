class ControladorEmail {

    constructor(email){
        this.email = email;
        this.campoEmail = $('#email');
        this.emailView = new ManipuladorDom();
        this.gerenciaEmail = new GerenciadorDeEmail();
    }

    marcaElemento(){
        if(this.gerenciaEmail.validaEmail(this.email)){
            this.emailView.mudaClasse(this.campoEmail,'border-success','border-danger')

        } else{
            this.emailView.mudaClasse(this.campoEmail,'border-danger','border-success')
        }
    }

}



const inputEmail = $('#email');

inputEmail.on('input', () => {
    const controlaEmail = new ControladorEmail(inputEmail.val());
    controlaEmail.marcaElemento();
});
