package multiplePointers

func IsSubstring(str1, str2 string) bool {
	if len(str1) > len(str2) {
		return false
	}

	i := 0
	j := 0

	for j < len(str2) {
		if str1[i] == str2[j] {
			j++
			i++
		} else {
			i = 0
			if str1[i] != str2[j] {
				j++
			}
		}
		if i >= len(str1) {
			return true
		}
	}

	return false
}
