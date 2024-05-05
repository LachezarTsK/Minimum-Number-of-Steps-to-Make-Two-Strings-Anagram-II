
import kotlin.math.abs

class Solution {

    private companion object {
        const val ALPHABET_SIZE = 26
    }

    fun minSteps(firstInput: String, secondInput: String): Int {
        val frequency = IntArray(ALPHABET_SIZE);
        for (letter in firstInput) {
            ++frequency[letter - 'a'];
        }
        for (letter in secondInput) {
            --frequency[letter - 'a'];
        }

        return calculateMinSteps(frequency);
    }

    private fun calculateMinSteps(frequency: IntArray): Int {
        var minSteps = 0
        for (current in frequency) {
            minSteps += abs(current)
        }
        return minSteps
    }
}
