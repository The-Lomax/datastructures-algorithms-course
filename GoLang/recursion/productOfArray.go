package recursion

func ProductOfArray(arr []int) int {
	if len(arr) == 0 {
		return 1
	}
	return arr[0] * ProductOfArray(arr[1:])
}
