package recursion

func IsContainsOdds(arr []int) bool {
	if len(arr) == 0 {
		return false
	}
	if arr[0]%2 == 1 {
		return true
	}
	return IsContainsOdds(arr[1:])
}
