package addToNumber

func AddToNumberIterative(n int) int {
	var sum int = 0
	for i := 1; i <= n; i++ {
		sum = sum + i
	}
	return sum
}

func AddToNumberMathematic(n int) int {
	return (n * (n + 1)) / 2
}
