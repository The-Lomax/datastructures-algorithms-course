package sorting

func bubble(arr []int) {
	swapped := false
	if len(arr) == 2 {
		if arr[0] > arr[1] {
			swap(arr, 1, 0)
			swapped = true
		}
		return
	}
	i := 1
	for i < len(arr) {
		if arr[i] < arr[i-1] {
			swap(arr, i, i-1)
			swapped = true
		}
		i++
	}
	if !swapped {
		return
	}
	bubble(arr[:len(arr)-1])
}
