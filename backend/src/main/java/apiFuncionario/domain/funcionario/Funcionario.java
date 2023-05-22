package apiFuncionario.domain.funcionario;
import jakarta.persistence.*;
import apiFuncionario.domain.pessoa.Pessoa;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "funcionario")
@Entity(name = "Funcionario")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Funcionario {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Integer numeronis;
    @Embedded
    private Pessoa pessoa;

    public Funcionario(DadosCadastroFuncionario dados) {
        this.numeronis = dados.numeronis();
        this.pessoa = new Pessoa(dados.pessoa());
    }

    public void atualizarInformacoes(DadosAtualizarFuncionario dados) {
        if (dados.numeronis() != null) {
            this.numeronis = dados.numeronis();
        }

        if (dados.pessoa() != null ){
            this.pessoa.atualizarInformacoes(dados.pessoa());

        }
    }
}
