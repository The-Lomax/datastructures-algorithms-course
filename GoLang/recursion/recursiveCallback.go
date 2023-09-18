package recursion

type Callback func(int) bool

func RecursiveCallback(arr []int, callback Callback) bool {
	if len(arr) == 0 {
		return false
	}
	return callback(arr[0]) || RecursiveCallback(arr[1:], callback)
}
