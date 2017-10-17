// Minha solução
let dataString = '17-05-2016';

class alteraDate {

    constructor (data) {

        this._date = data;
        this._newDate = new Date(...this.adjustDate().map((item, indice) => item - indice % 2));

    }

    adjustDate () {

        return this._date.split('-').reverse();

    }

    get returnDate () {

        return this._newDate;

    }

}

let newDate = new alteraDate(dataString);
newDate.returnDate();

// Solução aula:
let dataString = '17-05-2016';

let data = new Date(dataString.split('-').reverse().join('/'));
console.log(data);