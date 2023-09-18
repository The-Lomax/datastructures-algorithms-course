package multiplePointers

func IsContainsTargetAverage(arr []float64, target float64) bool {
	i := 0
	j := 1

	for j < len(arr) {
		if (arr[i]+arr[j])/2 == target {
			return true
		} else {
			i++
			j++
		}
	}
	return false
}
