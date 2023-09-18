package recursion

func CollectOdds(arr []int, res *[]int) {
	if len(arr) == 0 {
		return
	}
	if arr[0]%2 == 1 {
		*res = append(*res, arr[0])
	}
	CollectOdds(arr[1:], res)
}
