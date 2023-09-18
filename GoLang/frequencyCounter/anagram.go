package frequencyCounter

func IsValidAnagram(str1, str2 string) bool {
	// given 2 strings
	// check if the second string is an anagram of the first
	// iterate over the first word and create a letter map of it
	// iterate over the second word and compare with letter map of the first
	// see if the 2nd word has the same letter composition as the first

	// if the strings are the same or different lengths, can terminate
	if len(str1) != len(str2) {
		return false
	}
	if str1 == str2 {
		return true
	}
	// create letter map
	letterMap := map[string]int{}

	// populate the letter map with letters from the first word
	for _, c := range str1 {
		lc := string(c)
		if _, ok := letterMap[lc]; ok {
			letterMap[lc]++
		} else {
			letterMap[lc] = 1
		}
	}

	// subtract letters from the letter map based on the content of the 2nd word
	for _, c := range str2 {
		lc := string(c)
		if val, ok := letterMap[lc]; !ok {
			return false
		} else {
			if val < 1 {
				return false
			} else {
				letterMap[lc]--
			}
		}
	}

	// check if there are any leftovers
	for _, val := range letterMap {
		if val > 0 {
			return false
		}
	}

	// return result
	return true
}
