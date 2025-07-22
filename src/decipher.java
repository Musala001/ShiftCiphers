import java.util.*;

public class decipher {
    public static void main(String[] args) throws Exception {
        System.out.println(
                "Welcome to the world of cryptography \nDo you have a message to decrypt using Caesar/shift Cipher?");
        System.out.println("NOW ENTER THE MESSAGE TO DECIPHER");

        Scanner input = new Scanner(System.in);
        String userInput = input.nextLine();
        System.out.println("Enter a key to decipher NOTE: \"THE KEY MUST BE A POSITIVE NUMBER\"");
        int key = input.nextInt();

        String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String cipherText = userInput.toUpperCase().trim();

        String plainText = "";
        for (int i = 0; i < cipherText.length(); i++) {
            char ch = cipherText.charAt(i);
            int index = alphabet.indexOf(ch);

            if (index == -1) {

                plainText += ch;
            } else {
                int p = getP(index, key);
                plainText += alphabet.charAt(p);
            }
        }

        System.out.println("Decrypted Message:");
        System.out.println(plainText);

        input.close();
    }

    public static int getP(int index, int key) {
        int num = index - key;
        if (num < 0) {
            num += 26;
        }
        return num;
    }
}
