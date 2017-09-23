function ajax ( type, url, callback ){

    var xhr = new XMLHttpRequest(),
    resultado, erroAjax;

    xhr.open(type, url);

    xhr.addEventListener('load', function(){

        erroAjax = document.querySelector('#erro-ajax');

        if ( xhr.status === 200 && typeof callback === 'function' ) {
            
            erroAjax.classList.add('invisivel');
            resultado = xhr.responseText;
            callback(resultado);

        } else {

            erroAjax.classList.remove('invisivel');

        }
   
    });

    xhr.send();

};