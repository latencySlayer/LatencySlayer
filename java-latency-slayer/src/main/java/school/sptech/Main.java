package school.sptech;

import com.github.javafaker.Faker;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Faker faker = new Faker();
        List<Usuario> listaUsuarios = new ArrayList<>();


        //INSERINDO DADOS ALEATORIOS COM O FAKER
        listaUsuarios.add(new Usuario("Matheus","989449532","LatencySlayer",2,5));
        listaUsuarios.add(new Usuario("José","995219031","GamerTech",1,3));
        for(int i = 0; i <3; i++){
            String nomeFake = faker.name().fullName();
            String telefoneFake = faker.phoneNumber().cellPhone();
            String empresaFake = faker.company().name();
            Integer dtCenterFake = faker.number().numberBetween(1, 11);
            Integer servidorFake = faker.number().numberBetween(10, 20);

            listaUsuarios.add(new Usuario(nomeFake,telefoneFake,empresaFake,dtCenterFake,servidorFake));
        }


        System.out.println("\n------LISTA DESORDENADA-------");
        for (Usuario a : listaUsuarios) {
            System.out.println("Nome:"+a.getNome()+" | Telefone:"+a.getTelefone() + " | Empresa:"+a.getEmpresa()+ " | N° datacenters:"+a.getNumeroDtCenter()+" | N° Servidores:"+a.getNumeroServidores());
        }
        System.out.println("---------------------------------");


        System.out.println("\n-----Lista ALFABETICAMENTE ordenada por nome-----");
        Ordenacao.ordenarPorNome(listaUsuarios);
        for (Usuario a : listaUsuarios) {
            System.out.println("Nome: "+a.getNome());
        }
        System.out.println("-----------------------------------------------------");


        System.out.println("\n-----Lista ALFABETICAMENTE ordenada por empresa------");
        Ordenacao.ordenarPorEmpresa(listaUsuarios);
        for (Usuario a : listaUsuarios) {
            System.out.println("Empresa: "+a.getEmpresa());
        }
        System.out.println("-----------------------------------------------------");

        System.out.println("\n-------Lista ordenada por números de datacenters-------");
        Ordenacao.ordenarPorNumeroDtCenter(listaUsuarios);;
        for (Usuario a : listaUsuarios) {
            System.out.println("Empresa: "+a.getEmpresa()+ " | Datacenters: "+a.getNumeroDtCenter());
        }
        System.out.println("-----------------------------------------------------");


        System.out.println("\n-----Lista ordenada por números de servidores------");
        Ordenacao.ordenarPorNumeroServidor(listaUsuarios);;
        for (Usuario a : listaUsuarios) {
            System.out.println("Empresa: "+a.getEmpresa()+ " | Servidores: "+a.getNumeroServidores());
        }
        System.out.println("-----------------------------------------------------");


        System.out.println("\n ------LISTA ATUAL:-------");
        for (Usuario a : listaUsuarios) {
            System.out.println("Nome: "+a.getNome()+ " | Empresa: "+a.getEmpresa());
        }
        System.out.println("-------------------------");

        System.out.println("\n***Pesquisa binária de nome do USUÁRIO,retornando o indíce do pesquisado");
        System.out.println("Indice: " +Ordenacao.indiceNomeUser(listaUsuarios,"Matheus"));

        System.out.println("\n***Pesquisa binária de EMPRESA do usuario, retornando o indíce do pesquisado");
        System.out.println("Indice: " +Ordenacao.indiceEmpresa(listaUsuarios,"GamerTech"));

        System.out.println("\n***Pesquisa binária em caso de pesquisar caso NÃO haja a palavra");
        System.out.println("Indice: " +Ordenacao.indiceEmpresa(listaUsuarios,"Gamer Games"));







    }
}
