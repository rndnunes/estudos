var botaoPaciente = document.querySelector('#busca-pacientes'),
pacientes;

botaoPaciente.addEventListener('click', function() {

    ajax('GET', 'https://api-pacientes.herokuapp.com/pacie', function(resultado){
        
        pacientes = JSON.parse(resultado);

        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
        });

    });

});


