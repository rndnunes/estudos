class ListaNegociacoes {

    constructor () {

        this._negociacao = [];

    }

    adiciona(negociacao) {

        this._negociacao.push(negociacao);

    }

    get negociacoes () {

        return this._negociacao;

    }

}