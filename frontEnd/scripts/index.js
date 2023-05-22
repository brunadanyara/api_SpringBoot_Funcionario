window.addEventListener("DOMContentLoaded", (event) => {
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "http://localhost:8080/funcionario",
        contentType: "application/json; charset=utf-8",
        traditional: true,
        success: function (r) {
            r.content.forEach(function (item) {
                let tr = document.createElement('tr');
                let tdId = document.createElement('td');
                let tdNome = document.createElement('td');
                let tdSobrenome = document.createElement('td');
                let tdEmail = document.createElement('td');
                let tdNis = document.createElement('td');
                tdId.innerText = item.id;
                tdNome.innerText = item.nome;
                tdSobrenome.innerText = item.sobrenome;
                tdEmail.innerText = item.email;
                tdNis.innerText = item.numeroNis;
                tr.appendChild(tdId);
                tr.appendChild(tdNome);
                tr.appendChild(tdSobrenome);
                tr.appendChild(tdEmail);
                tr.appendChild(tdNis);

                tdAcoes = document.createElement('td');
                $(tdAcoes).append('<button type="button" class="btn btn-success" onclick="window.location.href=\'editar.html?id='+item.id+'\'">Editar</button>'
                + '<button type="button" class="btn btn-danger" onclick="deletarFuncionario('+item.id+')">Remover</button>')
                tr.appendChild(tdAcoes);
                $('#tblFuncionarios tbody').append(tr);
                
            });
        }
    })
});

function deletarFuncionario(id)
{
    $.ajax({
        type: "DELETE",
        contentType: "application/json",
        url: "http://localhost:8080/funcionario/" + id,
        //data: {},
        contentType: "application/json; charset=utf-8",
        traditional: true,
    })
    .done (function(data, textStatus, jqXHR) { 
    alert("Deletado com sucesso"); 
    window.location.reload();
    })
    .fail (function(jqXHR, textStatus, errorThrown) { 
    alert("Erro ao deletar funcionário"); 
    })
}