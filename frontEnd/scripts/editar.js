window.addEventListener("DOMContentLoaded", (event) => {
    var url = new URL(window.location.href);

    // Obtém os parâmetros da URL
    var searchParams = new URLSearchParams(url.search);

    // Obtém o valor do parâmetro "id"
    var id = searchParams.get('id');

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "http://localhost:8080/funcionario/" + id,
        contentType: "application/json; charset=utf-8",
        traditional: true,
        success: function (r) {
           console.log(r)
           $('#formEnviar [name=numeronis]').val(r.numeronis);
           $('#formEnviar [name=nome]').val(r.pessoa.nome);
           $('#formEnviar [name=sobrenome]').val(r.pessoa.sobrenome);
           $('#formEnviar [name=email]').val(r.pessoa.email);
        }
    });

    document.getElementById('enviarForm').onclick = function() {
        let dados = {
            id: id,
            numeronis: $('#formEnviar [name=numeronis]').val(),
            pessoa : {
                nome:  $('#formEnviar [name=nome]').val(),
            sobrenome:  $('#formEnviar [name=sobrenome]').val(),
            email:  $('#formEnviar [name=email]').val()
            }
        };
    
        $.ajax({
            type: "PUT",
            contentType: "application/json",
            url: "http://localhost:8080/funcionario/" + id,
            data: JSON.stringify(dados),
            contentType: "application/json; charset=utf-8",
            traditional: true,
        })
        .done (function(data, textStatus, jqXHR) { 
        alert("Atualizado com sucesso"); 
        window.history.back();
        window.location.reload()
        })
        .fail (function(jqXHR, textStatus, errorThrown) { 
        alert("Erro ao atualizar usuario"); 
        })
        }
});