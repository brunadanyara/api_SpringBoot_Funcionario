package apiFuncionario.domain.pessoa;
import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Embeddable
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Pessoa {
    @Size(min = 2, max = 30)
    private String nome;
    @Size(min = 2, max = 50)
    private String sobrenome;
    @Email
    private String email;


    public Pessoa(DadosPessoa dados) {
        this.nome = dados.nome();
        this.sobrenome = dados.sobrenome();
        this.email = dados.email();
    }

    public void atualizarInformacoes(DadosPessoa dados) {
        if (dados.nome() != null) {
            this.nome = dados.nome();
        }

        if (dados.sobrenome() != null) {
            this.sobrenome = dados.sobrenome();
        }

        if (dados.sobrenome() != null) {
            this.email = dados.email();
        }

    }

}
