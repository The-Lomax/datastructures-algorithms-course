package characterCount

import (
	"strconv"
	"strings"
)

var (
	letterMap map[string]bool
)

func init() {
	letterMap = map[string]bool{
		"a": true,
		"b": true,
		"c": true,
		"d": true,
		"e": true,
		"f": true,
		"g": true,
		"h": true,
		"i": true,
		"j": true,
		"k": true,
		"l": true,
		"m": true,
		"n": true,
		"o": true,
		"p": true,
		"q": true,
		"r": true,
		"s": true,
		"t": true,
		"u": true,
		"v": true,
		"w": true,
		"x": true,
		"y": true,
		"z": true,
	}
}

func CharacterCount(testStr string) map[string]int {
	res := map[string]int{}
	if len(testStr) == 0 {
		return map[string]int{}
	}
	lowerStr := strings.ToLower(testStr)
	for _, c := range lowerStr {
		ch := string(c)
		if isAlphanumeric(ch) {
			if _, ok := res[ch]; ok {
				res[ch]++
			} else {
				res[ch] = 1
			}
		}
	}
	return res
}

func isAlphanumeric(c string) bool {
	return isDigit(c) || isLetter(c)
}

func isDigit(c string) bool {
	if len(c) > 1 {
		return false
	}
	if res, err := strconv.Atoi(c); err == nil && res >= 0 && res <= 9 {
		return true
	}
	return false
}

func isLetter(c string) bool {
	if len(c) > 1 {
		return false
	}
	if _, ok := letterMap[c]; ok {
		return true
	}
	return false
}
