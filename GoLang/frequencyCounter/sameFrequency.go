package frequencyCounter

import "strconv"

func IsSameFrequency(a, b int) bool {
	str1 := strconv.Itoa(a)
	str2 := strconv.Itoa(b)

	return IsValidAnagram(str1, str2)
}
