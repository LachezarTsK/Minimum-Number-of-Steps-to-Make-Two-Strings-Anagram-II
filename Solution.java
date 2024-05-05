
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public int minSteps(String firstInput, String secondInput) {
        int[] frequency = new int[ALPHABET_SIZE];
        for (char letter : firstInput.toCharArray()) {
            ++frequency[letter - 'a'];
        }
        for (char letter : secondInput.toCharArray()) {
            --frequency[letter - 'a'];
        }
        
        return calculateMinSteps(frequency);
    }

    private int calculateMinSteps(int[] frequency) {
        int minSteps = 0;
        for (int current : frequency) {
            minSteps += Math.abs(current);
        }
        return minSteps;
    }
}
