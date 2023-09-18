package recursion

import "strings"

func TitleCaseWordsInArray(arr []string) {
	if len(arr) == 0 {
		return
	}
	arr[0] = strings.ToUpper(string(arr[0][0])) + arr[0][1:]
	TitleCaseWordsInArray(arr[1:])
}

func CapitalizeWordsInArray(arr []string) {
	if len(arr) == 0 {
		return
	}
	arr[0] = strings.ToUpper(arr[0])
	CapitalizeWordsInArray(arr[1:])
}
