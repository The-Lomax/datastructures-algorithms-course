package recursion

func SumRange(n int) int {
	if n == 1 {
		return 1
	}
	return n + SumRange(n-1)
}
