package recursion

func RecursiveRange(n int) int {
	if n == 0 {
		return 0
	}
	return n + RecursiveRange(n-1)
}
