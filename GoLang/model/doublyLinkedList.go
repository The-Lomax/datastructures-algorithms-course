package model

import (
	"errors"
	"fmt"
)

type DIntNode struct {
	Previous *DIntNode
	Value    int
	Next     *DIntNode
}

type DIntLinkedList struct {
	Head   *DIntNode
	Tail   *DIntNode
	Length int
}

func (dl *DIntLinkedList) GetLength() int {
	return dl.Length
}

func (dl *DIntLinkedList) Print() {
	fmt.Printf("length: %d --> [", dl.GetLength())
	if dl.Head == nil {
		return
	}
	fmt.Printf("%d, ", dl.Head.Value)
	next := dl.Head.Next
	for next != nil {
		fmt.Printf("%d, ", next.Value)
		next = next.Next
	}
	fmt.Println("]")
}

func (dl *DIntLinkedList) Push(x int) {
	if dl.Length == 0 {
		node := &DIntNode{Value: x}
		dl.Head = node
		dl.Tail = node
	} else {
		node := &DIntNode{Value: x, Previous: dl.Tail}
		dl.Tail.Next = node
		dl.Tail = node
	}
	dl.Length++
}

func (dl *DIntLinkedList) Pop() (int, bool) {
	if dl.Length <= 0 {
		return 0, false
	} else if dl.Length == 1 {
		val := dl.Tail.Value
		dl.Head = nil
		dl.Tail = nil
		dl.Length--
		return val, true
	}
	node := dl.Tail
	dl.Tail = dl.Tail.Previous
	dl.Tail.Next = nil
	dl.Length--
	return node.Value, true
}

func (dl *DIntLinkedList) Shift() (int, bool) {
	if dl.Length <= 0 {
		return 0, false
	} else if dl.Length == 1 {
		val := dl.Head.Value
		dl.Head = nil
		dl.Tail = nil
		dl.Length--
		return val, true
	}
	val := dl.Head.Value
	dl.Head = dl.Head.Next
	dl.Head.Previous = nil
	return val, true
}

func (dl *DIntLinkedList) Unshift(x int) {
	node := &DIntNode{Value: x}
	if dl.Length <= 0 {
		dl.Head = node
		dl.Tail = node
	}
	node.Next = dl.Head
	dl.Head.Previous = node
	dl.Head = node
	dl.Length++
}

func (dl *DIntLinkedList) Get(i int) (int, bool) {
	if i < 0 {
		return 0, false
	} else if i >= dl.Length {
		return 0, false
	}

	start := dl.Head
	j := 0
	for j < i {
		start = start.Next
		j++
	}
	return start.Value, true
}

func (dl *DIntLinkedList) Set(pos, val int) error {
	if pos < 0 {
		return errors.New("index out of bounds")
	} else if pos == 0 {
		dl.Head.Value = val
	} else if pos >= dl.GetLength() {
		return errors.New("index out of bounds")
	} else {
		node := dl.Head
		i := 0
		for i < pos {
			node = node.Next
			i++
		}
		node.Value = val
	}
	return nil
}

func (dl *DIntLinkedList) Insert(pos, val int) {
	if pos <= 0 {
		dl.Unshift(val)
	} else if pos >= dl.GetLength()-1 {
		dl.Push(val)
	} else {
		curr := dl.Head
		i := 0
		for i < pos {
			curr = curr.Next
			i++
		}
		newNode := &DIntNode{Value: val, Next: curr, Previous: curr.Previous}
		curr.Previous.Next = newNode
		curr = newNode
	}
	dl.Length++
}

func (dl *DIntLinkedList) Remove(pos int) (int, bool) {
	if pos < 0 {
		return 0, false
	} else if pos == 0 {
		return dl.Shift()
	} else if pos >= dl.GetLength() {
		return 0, false
	} else if pos == dl.GetLength()-1 {
		return dl.Pop()
	}
	i := 0
	curr := dl.Head
	for i < pos {
		curr = curr.Next
		i++
	}
	tempNode := curr
	curr.Previous.Next = curr.Next
	curr.Next.Previous = curr.Previous
	dl.Length--
	return tempNode.Value, true
}

func (dl *DIntLinkedList) Reverse() {
	if dl.Length <= 1 {
		return
	}
	node := dl.Head
	dl.Head = dl.Tail
	dl.Tail = node

	var next *DIntNode
	var prev *DIntNode

	for i := 0; i < dl.Length; i++ {
		next = node.Next
		node.Next = prev
		node.Previous = next
		node = next
	}
}
