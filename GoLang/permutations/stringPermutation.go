package permutations

func GetPermutations(s string) []string {
	var arr []string
	arr = permute(arr, s, 0, len(s))
	return arr
}

func permute(arr []string, s string, l, r int) []string {
	if l == r {
		arr = append(arr, s)
	}
	for i := l; i < r; i++ {
		s = swap(s, l, i)
		arr = permute(arr, s, l+1, r)
		s = swap(s, l, i)
	}
	return arr
}

func swap(s string, a, b int) string {
	tempString := []rune(s)
	tempChar := tempString[a]
	tempString[a] = tempString[b]
	tempString[b] = tempChar
	return string(tempString)
}
