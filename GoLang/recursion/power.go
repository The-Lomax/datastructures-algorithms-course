package recursion

func Power(n, pow int) int {
	if pow == 0 {
		return 1
	}
	return n * Power(n, pow-1)
}
