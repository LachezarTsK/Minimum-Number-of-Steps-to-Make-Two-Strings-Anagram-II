
#include <span>
#include <array>
#include <cmath>
#include <string>
using namespace std;

class Solution {

    static const int ALPHABET_SIZE = 26;

public:
    int minSteps(const string& firstInput, const string& secondInput) const {
        array<int, ALPHABET_SIZE> frequency{};
        for (const auto& letter : firstInput) {
            ++frequency[letter - 'a'];
        }
        for (const auto& letter : secondInput) {
            --frequency[letter - 'a'];
        }

        return calculateMinSteps(frequency);
    }

private:
    int calculateMinSteps(span<const int> frequency) const {
        int minSteps = 0;
        for (const auto& current : frequency) {
            minSteps += abs(current);
        }
        return minSteps;
    }
};
