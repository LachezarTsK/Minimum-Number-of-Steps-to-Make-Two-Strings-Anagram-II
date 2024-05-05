
package main

import (
	"math"
)

const ALPHABET_SIZE = 26

func minSteps(firstInput string, secondInput string) int {
	frequency := make([]int, ALPHABET_SIZE)
	for _, letter := range firstInput {
		frequency[letter-'a']++
	}
	for _, letter := range secondInput {
		frequency[letter-'a']--
	}

	return calculateMinSteps(frequency)
}

func calculateMinSteps(frequency []int) int {
	var minSteps = 0
	for _, current := range frequency {
		minSteps += int(math.Abs(float64(current)))
	}
	return minSteps
}
