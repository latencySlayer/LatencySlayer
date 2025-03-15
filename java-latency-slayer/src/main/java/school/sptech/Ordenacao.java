package school.sptech;

import java.util.List;

public class Ordenacao {

    public static void ordenarPorNome(List<Usuario> lista) {
        for (int i = 0; i < lista.size() - 1; i++) {
            int indMenor = i;

            for (int j = i + 1; j < lista.size(); j++) {
                if (lista.get(j).getNome().compareTo(lista.get(indMenor).getNome()) < 0) {
                    indMenor = j;
                }
            }
            Usuario aux = lista.get(i);
            lista.set(i, lista.get(indMenor));
            lista.set(indMenor, aux);

        }
    }

    public static void ordenarPorEmpresa(List<Usuario> lista) {
        for (int i = 0; i < lista.size() - 1; i++) {
            int indMenor = i;

            for (int j = i + 1; j < lista.size(); j++) {
                if (lista.get(j).getEmpresa().compareTo(lista.get(indMenor).getEmpresa()) < 0) {
                    indMenor = j;
                }
            }
            Usuario aux = lista.get(i);
            lista.set(i, lista.get(indMenor));
            lista.set(indMenor, aux);

        }
    }

    public static void ordenarPorNumeroDtCenter(List<Usuario> lista) {
        for (int i = 0; i < lista.size() - 1; i++) {
            int indMenor = i;

            for (int j = i + 1; j < lista.size(); j++) {
                if (lista.get(j).getNumeroDtCenter() < lista.get(indMenor).getNumeroDtCenter()) {
                    indMenor = j;
                }
            }
            Usuario aux = lista.get(i);
            lista.set(i, lista.get(indMenor));
            lista.set(indMenor, aux);

        }
    }

    public static void ordenarPorNumeroServidor(List<Usuario> lista) {
        for (int i = 0; i < lista.size() - 1; i++) {
            int indMenor = i;

            for (int j = i + 1; j < lista.size(); j++) {
                if (lista.get(j).getNumeroServidores() < lista.get(indMenor).getNumeroServidores()) {
                    indMenor = j;
                }
            }
            Usuario aux = lista.get(i);
            lista.set(i, lista.get(indMenor));
            lista.set(indMenor, aux);

        }
    }

    // PESQUISAS BINARIAS

    public static int indiceNomeUser(List<Usuario> lista, String x){
        int inicio = 0;
        int fim = lista.size() - 1;
        int indice = 0;

        while (inicio <= fim) {
            if (x.equals(lista.get(inicio).getNome())){
                indice = inicio;
                return indice;
            }else{
                inicio++;
            }

        }
        return -1;
    }

    public static int indiceEmpresa(List<Usuario> lista, String x){
        int inicio = 0;
        int fim = lista.size() - 1;
        int indice = 0;

        while (inicio <= fim) {
            if (x.equals(lista.get(inicio).getEmpresa())){
                indice = inicio;
                return indice;
            }else{
                inicio++;
            }

        }
        return -1;
    }





}
