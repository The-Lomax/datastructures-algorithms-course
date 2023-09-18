package frequencyCounter

func CompareArrays(arr1 []int, arr2 []int) bool {
	if len(arr1) != len(arr2) {
		return false
	}
	res := map[int]int{}
	for _, val := range arr2 {
		if _, ok := res[val]; ok {
			res[val]++
		} else {
			res[val] = 1
		}
	}
	for _, val := range arr1 {
		key := val * val
		if _, ok := res[key]; !ok {
			return false
		} else {
			if res[key] < 1 {
				return false
			} else {
				res[key]--
			}
		}
	}
	for _, val := range res {
		if val > 0 {
			return false
		}
	}
	return true
}
