package frequencyCounter

func IsContainsDuplicates(arr []int) bool {
	obj := map[int]bool{}

	for _, val := range arr {
		if _, ok := obj[val]; ok {
			return true
		} else {
			obj[val] = true
		}
	}
	return false
}
