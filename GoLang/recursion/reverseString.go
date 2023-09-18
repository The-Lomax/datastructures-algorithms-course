package recursion

func ReverseString(str string) string {
	if len(str) <= 1 {
		return str
	}
	return string(str[len(str)-1]) + ReverseString(str[:len(str)-1])
}
