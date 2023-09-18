package multiplePointers

func ArrSumZero(arr []int) []int {
	// write a function that takes a sorted array of integers
	// returns first number pair that add to 0
	i := 0
	j := len(arr) - 1

	for i < j {
		res := arr[i] + arr[j]
		if res == 0 {
			return []int{arr[i], arr[j]}
		} else if res < 0 {
			i++
		} else {
			j--
		}
	}
	return []int{}
}
