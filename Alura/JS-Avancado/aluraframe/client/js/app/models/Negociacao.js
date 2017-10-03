/*[Nota curso]: Para criarmos uma classe, usamos a palavra reservada class seguida do nome da classe.
Por convenção, nomes de classe começam em letra maiúscula.
Curiosamente essa convenção se chama pascal case.*/

class Negociacao {
    //[Nota my]: Estudar novamente como funciona os construtores.
    /*[Nota curso]: Para definirmos atributos de instância de uma classe, precisamos adicionar em sua definição um constructor. É através do construtor que adicionamos na variável implícita this as propriedades que desejamos que toda instância da classe tenha.*/
    constructor (data, quantidade, valor) {
        
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        /* [Nota my]: Na nossa aplicação, ao chamar a propiedade utilizando
         -- var n1 = new Negociacao(data, quantidade, valor); --
            e tentar trocar o valor da propiedade, utilizando 
         -- n1._quantidade = "novo valor" -- 
            a classe ainda permite a troca do valor, usando a propiedade
        -- Object.freeze(this) --
            onde this é uma variável implícita, e que faz referência a nossa class,
            porém se usarmos a ultima propiedade mostrada,
            ela não permiti mais a troca do valor da propiedade.
        */
        Object.freeze(this);

    }
    
    /* [Nota my]: A propiedade --get-- seguida por um método,
    faz com que o método seja retonardo como uma propiedade,
    porém ela permite apenas a leitura e não a alteração do valor da nossa propiedade,
    que por baixo dos panos roda como um método. */
    get volume () {

        return this._quantidade * this._valor;

    }

    get data () {

        return new Date(this._data.getTime());

    }

    get quantidade () {

        return this._quantidade;

    }

    get valor () {

        return this._valor;

    }

}