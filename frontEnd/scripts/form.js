window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('enviarForm').onclick = function() {
    let dados = {		
        numeronis: $('#formEnviar [name=numeronis]').val(),
        pessoa : {
            nome:  $('#formEnviar [name=nome]').val(),
        sobrenome:  $('#formEnviar [name=sobrenome]').val(),
        email:  $('#formEnviar [name=email]').val()
        }
    };

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/funcionario",
        data: JSON.stringify(dados),
        contentType: "application/json; charset=utf-8",
        traditional: true,
    })
    .done (function(data, textStatus, jqXHR) { 
    alert("Funcionario criado com sucesso");
    window.history.back();
    })
    .fail (function(jqXHR, textStatus, errorThrown) { 
    alert("Erro ao criar funcionário"); 
    })
    }
   
})