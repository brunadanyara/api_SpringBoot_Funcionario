package apiFuncionario.domain.funcionario;

public record DadosListagemFuncionario (Long id, String nome, String sobrenome, String email, Integer numeroNis) {
    public DadosListagemFuncionario(Funcionario funcionario) {
        this(funcionario.getId(), funcionario.getPessoa().getNome(), funcionario.getPessoa().getSobrenome(), funcionario.getPessoa().getEmail(), funcionario.getNumeronis());
    }
}
