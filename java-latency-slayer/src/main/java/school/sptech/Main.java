package school.sptech;

import com.github.javafaker.Faker;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Faker faker = new Faker();
        List<Usuario> listaUsuarios = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        Scanner scannerInt = new Scanner(System.in);

        //INSERINDO DADOS ALEATORIOS COM O FAKER
        listaUsuarios.add(new Usuario("Matheus","989449532","LatencySlayer",2,5));
        listaUsuarios.add(new Usuario("Pedro","995219031","GamerTech",1,3));
        for(int i = 0; i <5; i++){
            String nomeFake = faker.name().fullName();
            String telefoneFake = faker.phoneNumber().cellPhone();
            String empresaFake = faker.company().name();
            Integer dtCenterFake = faker.number().numberBetween(1, 11);
            Integer servidorFake = faker.number().numberBetween(10, 20);

            listaUsuarios.add(new Usuario(nomeFake,telefoneFake,empresaFake,dtCenterFake,servidorFake));
        }


        System.out.println("\n------LISTA DESORDENADA FAKER-------");
        for (Usuario a : listaUsuarios) {
            System.out.println("Nome:"+a.getNome()+" | Telefone:"+a.getTelefone() + " | Empresa:"+a.getEmpresa()+ " | N° datacenters:"+a.getNumeroDtCenter()+" | N° Servidores:"+a.getNumeroServidores());
        }
        System.out.println("---------------------------------");

        Boolean continua = true;

        while (continua){
            System.out.println("\nInforme o que deseja:\n" +
                    "1- Ordenar alfabeticamente por NOME\n" +
                    "2- Ordenar alfabeticamente por EMPRESA\n" +
                    "3- Ordenar por números de DATACENTER (crescente)\n"+
                    "4- Ordenar por números de SERVIDOR (crescente)\n" +
                    "5- Pesquisar o índice do NOME\n" +
                    "6- Pesquisar o índice da EMPRESA\n"+
                    "7- PARAR aplicação");
            Integer escolha = scannerInt.nextInt();

            if(escolha==1){
                System.out.println("\n-----Lista ALFABETICAMENTE ordenada por nome-----");
                Ordenacao.ordenarPorNome(listaUsuarios);
                for (Usuario a : listaUsuarios) {
                    System.out.println("Nome: "+a.getNome());
                }
                System.out.println("-----------------------------------------------------\n");
            }else if(escolha==2){
                System.out.println("\n-----Lista ALFABETICAMENTE ordenada por empresa------");
                Ordenacao.ordenarPorEmpresa(listaUsuarios);
                for (Usuario a : listaUsuarios) {
                    System.out.println("Empresa: "+a.getEmpresa());
                }
                System.out.println("-----------------------------------------------------");
            }else if(escolha==3){
                System.out.println("\n-------Lista ordenada por números de datacenters-------");
                Ordenacao.ordenarPorNumeroDtCenter(listaUsuarios);;
                for (Usuario a : listaUsuarios) {
                    System.out.println("Empresa: "+a.getEmpresa()+ " | Datacenters: "+a.getNumeroDtCenter());
                }
                System.out.println("-----------------------------------------------------");
            } else if (escolha==4) {
                System.out.println("\n-----Lista ordenada por números de servidores------");
                Ordenacao.ordenarPorNumeroServidor(listaUsuarios);;
                for (Usuario a : listaUsuarios) {
                    System.out.println("Empresa: "+a.getEmpresa()+ " | Servidores: "+a.getNumeroServidores());
                }
                System.out.println("-----------------------------------------------------");
            } else if (escolha==5) {
                System.out.println("\n ------LISTA ATUAL:-------");
                for (Usuario a : listaUsuarios) {
                    System.out.println("Nome: "+a.getNome()+ " | Empresa: "+a.getEmpresa());
                }
                System.out.println("-------------------------");

                System.out.println("\n***Informe um NOME para realizar uma pesquisa binária (retorna o índice dentro da lista)");
                System.out.println("Indice: " +Ordenacao.indiceNomeUser(listaUsuarios,scanner.nextLine()));
            } else if (escolha==6) {
                System.out.println("\n ------LISTA ATUAL:-------");
                for (Usuario a : listaUsuarios) {
                    System.out.println("Nome: "+a.getNome()+ " | Empresa: "+a.getEmpresa());
                }
                System.out.println("-------------------------");

                System.out.println("\n***Informe o nome de uma EMPRESA para realizar uma pesquisa binária (retorna o índice dentro da lista)");
                System.out.println("Indice: " +Ordenacao.indiceEmpresa(listaUsuarios,scanner.nextLine()));
            } else{
                System.out.println("\nAplicação encerrada.");
                continua=false;
            }

        }


















    }
}
