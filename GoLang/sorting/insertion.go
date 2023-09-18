package sorting

func insertion(arr []int) {
	i := 1
	for i < len(arr) {
		currVal := arr[i]
		j := i - 1
		for j >= 0 && arr[j] > currVal {
			arr[j+1] = arr[j]
			j--
		}
		arr[j+1] = currVal
		i++
	}
}
