import java.io.*;
import java.util.*;

public class Solution {

    static boolean isAnagram(String a, String b) {
        /* Verificar se os comprimentos das strings são iguais */
        if (a.length() != b.length()) {
            return false;
        }

        /* Converter ambas as strings para minúsculas */
        a = a.toLowerCase();
        b = b.toLowerCase();

        /* Contar a frequência de cada caractere em ambas as strings */
        Map<Character, Integer> frequencyA = new HashMap<>();
        Map<Character, Integer> frequencyB = new HashMap<>();

        for (int i = 0; i < a.length(); i++) {
            char chA = a.charAt(i);
            char chB = b.charAt(i);

            frequencyA.put(chA, frequencyA.getOrDefault(chA, 0) + 1);
            frequencyB.put(chB, frequencyB.getOrDefault(chB, 0) + 1);
        }

        /* Verificar se as frequências de caracteres em ambas as strings são iguais */
        return frequencyA.equals(frequencyB);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String a = scanner.next();
        String b = scanner.next();
        scanner.close();

        /* Verificar se as strings são anagramas */
        boolean result = isAnagram(a, b);

        /* Imprimir o resultado */
        if (result) {
            System.out.println("Anagrams");
        } else {
            System.out.println("Not Anagrams");
        }
    }
}
