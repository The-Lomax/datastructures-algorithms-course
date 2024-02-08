package main

import "fmt"

// make a linked list with a head and a tail, length
// value, pointer to next node
// store ints
// operations: push

type LinkedNode struct {
	value int
	next  *LinkedNode
}

type LinkedList struct {
	head   *LinkedNode
	tail   *LinkedNode
	length int
}

func (l *LinkedList) push(x int) {
	node := &LinkedNode{value: x}
	if l.head == nil {
		l.head = node
		l.tail = node
	} else {
		node.next = l.head
		l.head = node
	}
	l.length++
}

func (l *LinkedList) print() {
	if l.head == nil {
		return
	}
	curr := l.head
	for curr != nil {
		fmt.Print(curr.value, ", ")
		curr = curr.next
	}
}

func (l *LinkedList) double() {
	if l.length == 0 {
		return
	}

	headUpdated := false
	l.head.value = l.head.value * 2
	if l.head.value >= 10 {
		l.head.value = l.head.value - 10
		l.push(1)
		l.length++
		headUpdated = true
	}

	var curr *LinkedNode
	if headUpdated {
		curr = l.head.next
	} else {
		curr = l.head
	}

	for curr.next != nil {
		curr.next.value = curr.next.value * 2
		if curr.next.value >= 10 {
			curr.next.value = curr.next.value - 10
			curr.value++
		}
		curr = curr.next
	}
}

// take int (9999) -> list(9,9,9,9)
// return double the number
// take the list as input
// double the int
// result of the double -> list

// convert int to list
// iterate over the list to the last element
// double the digit, if > 10 then subtract 10, store that 1

// 123456 -> list (6,5,4,3,2,1)
// double
// take 1 digit, multiply by 1
// take 2 digit, multiply by 10, add to the first

func main() {
	// time, space complexity both O(n)
	input := 123456
	testList := LinkedList{}
	for input > 0 {
		digit := input % 10
		testList.push(digit)
		input = input / 10
	}
	testList.print()
	fmt.Println()
	testList.double()
	testList.print()
}
