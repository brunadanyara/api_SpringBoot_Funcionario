package apiFuncionario.domain.pessoa;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record DadosPessoa(
        @NotBlank
        String nome,
        @NotBlank
        String sobrenome,
        @NotBlank
        @Email
        String email
        ) {

}
