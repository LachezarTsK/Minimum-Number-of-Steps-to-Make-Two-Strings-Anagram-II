
using System;

public class Solution
{
    static readonly int ALPHABET_SIZE = 26;

    public int MinSteps(string firstInput, string secondInput)
    {
        int[] frequency = new int[ALPHABET_SIZE];
        foreach (char letter in firstInput)
        {
            ++frequency[letter - 'a'];
        }
        foreach (char letter in secondInput)
        {
            --frequency[letter - 'a'];
        }

        return CalculateMinSteps(frequency);
    }

    private int CalculateMinSteps(int[] frequency)
    {
        int minSteps = 0;
        foreach (int current in frequency)
        {
            minSteps += Math.Abs(current);
        }
        return minSteps;
    }
}
