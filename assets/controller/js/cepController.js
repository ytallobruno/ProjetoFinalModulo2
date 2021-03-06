class ControladorCep {
    constructor(cep) {
        this.campoCep = $('#cep');
        this.cepView = new VisualizadorCep(this.cep);
        this.cep = cep;
        this.gerenciaCep = new GerenciadorDeCep(this.cep);
    }

    chamaApiCep() {
        if (this.gerenciaCep.getCepValidado()) {
            this.gerenciaCep.apiCep();
            setTimeout(() => {
                this.dadosApi = this.gerenciaCep.getDadosApi();
                this.completaEnderecoForm();
            }, 1000);
        }
    }

    marcaElemento() {
        if (this.gerenciaCep.getCepValidado()) {
            this.cepView.mudaClasse(this.campoCep, 'border-success', 'border-danger')

        } else {
            this.cepView.mudaClasse(this.campoCep, 'border-danger', 'border-success')
        }
    }

    completaEnderecoForm() {
        this.cepView.renderizaCep(this.dadosApi);
    }

}


const btnCep = $('#btn-cep');
const campoCep = $('#cep');

campoCep.on('input', () => {
    const controlaCep = new ControladorCep(campoCep.val());
    controlaCep.marcaElemento();
});

btnCep.on('click', (event) => {
    event.preventDefault();
    const controlaCep = new ControladorCep(campoCep.val());
    controlaCep.chamaApiCep();
});
