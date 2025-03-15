package school.sptech;

public class Usuario {
    private String nome;
    private String telefone;
    private String empresa;
    private Integer numeroDtCenter;
    private Integer numeroServidores;

    public Usuario(String nome, String telefone, String empresa, Integer numeroDtCenter, Integer numeroServidores) {
        this.nome = nome;
        this.telefone = telefone;
        this.empresa = empresa;
        this.numeroDtCenter = numeroDtCenter;
        this.numeroServidores = numeroServidores;
    }

    public String getNome() {
        return nome;
    }

    public String getEmpresa() {
        return empresa;
    }

    public Integer getNumeroDtCenter() {
        return numeroDtCenter;
    }

    public Integer getNumeroServidores() {
        return numeroServidores;
    }

    public String getTelefone() {
        return telefone;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "nome='" + nome + '\'' +
                ", empresa='" + empresa + '\'' +
                ", numeroDtCenter=" + numeroDtCenter +
                ", numeroServidores=" + numeroServidores +
                '}';
    }
}
