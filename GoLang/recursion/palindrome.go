package recursion

func IsPalindrome(str string) bool {
	if len(str) <= 1 {
		return true
	}
	return string(str[0]) == string(str[len(str)-1]) && IsPalindrome(str[1:len(str)-1])
}
