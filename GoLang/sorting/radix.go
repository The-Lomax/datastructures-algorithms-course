package sorting

func radixSort(arr []int) []int {
	passes := getNumberOfSorts(arr)

	pass := 0
	for pass < passes {
		buckets := make(map[int][]int)
		for i := range arr {
			digit := getDigit(arr[i], pass)
			if _, ok := buckets[digit]; ok {
				buckets[digit] = append(buckets[digit], arr[i])
			} else {
				buckets[digit] = []int{arr[i]}
			}
		}
		arr = []int{}
		i := 0
		for i < 10 {
			if _, ok := buckets[i]; ok {
				arr = append(arr, buckets[i]...)
			}
			i++
		}
		pass++
	}
	return arr
}

func getDigit(x, n int) int {
	multiplier := 1
	i := 0
	for i < n {
		multiplier = multiplier * 10
		i++
	}
	res := x / multiplier
	res = res % 10
	return res
}

func getNumberOfSorts(arr []int) int {
	maxDigits := 0
	for _, val := range arr {
		digits := countDigits(val)
		if digits > maxDigits {
			maxDigits = digits
		}
	}
	return maxDigits
}

func countDigits(n int) int {
	if n == 0 {
		return 1
	}
	count := 0
	for n > 0 {
		n = n / 10
		count++
	}
	return count
}
