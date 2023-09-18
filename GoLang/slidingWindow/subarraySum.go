package slidingWindow

import "fmt"

func MaxSubArraySum(arr []int, n int) int {
	// write a function that takes an array and an integer
	// returns max sum of a subarray of n items within the main array
	if len(arr) < n {
		fmt.Println("provided n is longer than array")
	}
	if len(arr) == n {
		sum := 0
		for _, x := range arr {
			sum = sum + x
		}
		return sum
	}
	var maxSum *int

	i := 0
	j := 0
	sum := 0

	for j < len(arr) {
		if j < i+n {
			sum = sum + arr[j]
			j++
		} else {
			sum = sum - arr[i]
			i++
			sum = sum + arr[j]
			j++
		}
		if maxSum != nil {
			if *maxSum < sum {
				*maxSum = sum
			}
		} else {
			temp := sum
			maxSum = &temp
		}
	}

	return *maxSum
}
