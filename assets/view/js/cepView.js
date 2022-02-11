class VisualizadorCep extends ManipuladorDom{
    constructor(cep){
        super();
        this.cep = cep;
    }

    renderizaCep(dados){
        this.estado = $('#estado').val(dados.uf);
        this.cidade = $('#cidade').val(dados.localidade);
        this.bairro = $('#bairro').val(dados.bairro);
        this.rua = $('#rua').val(dados.logradouro);
    }
}