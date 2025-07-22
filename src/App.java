import java.util.*;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println(
                "Welcome to the world of cryptography \nDo you have a message to encrypt using Caesar Cipher?");
        System.out.println("NOW ENTER THE MESSAGE TO ENCIPHER");

        Scanner input = new Scanner(System.in);
        String userInput = input.nextLine();
        System.out.println("Enter a key to encipher NOTE: \"THE KEY MUST BE A POSITIVE NUMBER\"");
        int key = input.nextInt();

        String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String plainText = userInput.toUpperCase().trim();
        ArrayList<Integer> p = new ArrayList<>();

        for (int i = 0; i < plainText.length(); i++) {
            char ch = plainText.charAt(i);
            int index = alphabet.indexOf(ch);
            p.add(index);
        }

        String cipherText = "";
        for (int i = 0; i < p.size(); i++) {
            int value = p.get(i);

            int shiftedIndex = getNum(value + key);
            cipherText += alphabet.charAt(shiftedIndex);
        }

        System.out.println("Encrypted Message:");
        System.out.println(cipherText);

        input.close();
    }

    public static int getNum(int num) {
        return num % 26;
    }
}
