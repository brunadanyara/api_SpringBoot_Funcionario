package apiFuncionario.domain.funcionario;

import apiFuncionario.domain.pessoa.Pessoa;

public record DadosDetalhamentoFuncionario(long id, Integer numeronis, Pessoa pessoa) {

    public DadosDetalhamentoFuncionario (Funcionario funcionario){
        this(funcionario.getId(), funcionario.getNumeronis(), funcionario.getPessoa());
    }
}
