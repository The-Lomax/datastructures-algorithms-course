package sorting

func selection(arr []int) {
	if len(arr) == 2 {
		if arr[0] > arr[1] {
			swap(arr, 0, 1)
		}
		return
	}
	arrMin := 0
	for i, val := range arr {
		if val < arr[arrMin] {
			arrMin = i
		}
	}
	swap(arr, 0, arrMin)
	selection(arr[1:])
}
