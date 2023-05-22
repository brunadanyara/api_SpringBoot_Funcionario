package apiFuncionario.domain.funcionario;

import apiFuncionario.domain.pessoa.DadosPessoa;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

public record DadosCadastroFuncionario(
        @NotNull
        Integer numeronis,
        @NotNull
        @Valid
        DadosPessoa pessoa) {

}
