import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc = new Scanner(System.in);
        String A = sc.next();
        sc.close();
        
        boolean isPalindrome = true;
        int length = A.length();
        for (int i = 0; i < length / 2; i++) {
            if (A.charAt(i) != A.charAt(length - i - 1)) {
                isPalindrome = false;
                break;
            }
        }

        if (isPalindrome) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}
