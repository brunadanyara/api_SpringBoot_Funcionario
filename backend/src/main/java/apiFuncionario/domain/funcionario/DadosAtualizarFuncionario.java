package apiFuncionario.domain.funcionario;

import apiFuncionario.domain.pessoa.DadosPessoa;
import jakarta.validation.constraints.NotNull;

public record DadosAtualizarFuncionario(
        @NotNull
        Long id,
        Integer numeronis,
        DadosPessoa pessoa)

    {
            }