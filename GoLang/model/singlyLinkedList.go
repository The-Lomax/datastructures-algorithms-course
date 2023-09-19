package model

import (
	"errors"
	"fmt"
)

type SIntNode struct {
	Value int
	Next  *SIntNode
}

type SIntLinkedList struct {
	Head   *SIntNode
	Tail   *SIntNode
	Length int
}

func (ll *SIntLinkedList) GetLength() int {
	return ll.Length
}

func (ll *SIntLinkedList) Print() {
	if ll.Head == nil {
		return
	}
	fmt.Printf("%d, ", ll.Head.Value)
	next := ll.Head.Next
	for next != nil {
		fmt.Printf("%d, ", next.Value)
		next = next.Next
	}
	fmt.Println()
}

func (ll *SIntLinkedList) ToArray() []int {
	if ll.Head == nil {
		return []int{}
	}
	res := []int{ll.Head.Value}
	next := ll.Head.Next
	for next != nil {
		res = append(res, next.Value)
		next = next.Next
	}
	return res
}

func (ll *SIntLinkedList) Push(x int) {
	if ll.Head == nil {
		ll.Head = &SIntNode{Value: x}
		ll.Tail = ll.Head
		ll.Length++
	} else {
		ll.Tail.Next = &SIntNode{Value: x}
		ll.Tail = ll.Tail.Next
		ll.Length++
	}
}

func (ll *SIntLinkedList) Pop() (int, bool) {
	if ll.Tail == nil {
		return 0, false
	}
	next := ll.Head
	for next.Next != nil && next.Next != ll.Tail {
		next = next.Next
	}
	val := ll.Tail.Value
	next.Next = nil
	ll.Tail = next
	ll.Length--
	return val, true
}

func (ll *SIntLinkedList) Shift() (int, bool) {
	if ll.Head == nil {
		return 0, false
	}
	val := ll.Head.Value
	ll.Head = ll.Head.Next
	ll.Length--
	return val, true
}

func (ll *SIntLinkedList) Unshift(x int) {
	if ll.Head == nil {
		ll.Push(x)
	}
	newNode := &SIntNode{Value: x, Next: ll.Head}
	ll.Head = newNode
	ll.Length++
}

func (ll *SIntLinkedList) Get(i int) (int, bool) {
	if i >= ll.GetLength() || i < 0 {
		return 0, false
	}
	next := ll.Head
	j := 0
	for j < i {
		next = next.Next
		j++
	}
	return next.Value, true
}

func (ll *SIntLinkedList) Set(pos, val int) error {
	if pos < 0 {
		return errors.New("index out of bounds")
	} else if pos == 0 {
		ll.Head.Value = val
	} else if pos >= ll.GetLength() {
		return errors.New("index out of bounds")
	} else {
		next := ll.Head
		i := 0
		for i < pos {
			next = next.Next
			i++
		}
		next.Value = val
	}
	return nil
}

func (ll *SIntLinkedList) Insert(pos, val int) {
	if pos <= 0 {
		ll.Unshift(val)
	} else if pos >= ll.GetLength()-1 {
		ll.Push(val)
	} else {
		curr := ll.Head
		i := 0
		for i < pos-1 {
			curr = curr.Next
			i++
		}
		next := curr.Next
		newNode := &SIntNode{Value: val, Next: next}
		curr.Next = newNode
	}
	ll.Length++
}

func (ll *SIntLinkedList) Remove(pos int) (int, bool) {
	if pos < 0 {
		return 0, false
	} else if pos == 0 {
		return ll.Shift()
	} else if pos >= ll.GetLength() {
		return 0, false
	} else if pos == ll.GetLength()-1 {
		return ll.Pop()
	}
	i := 0
	curr := ll.Head
	for i < pos-1 {
		curr = curr.Next
		i++
	}
	tempNode := curr.Next
	curr.Next = tempNode.Next
	ll.Length--
	return tempNode.Value, true
}

func (ll *SIntLinkedList) Reverse() {
	if ll.Length <= 1 {
		return
	}
	node := ll.Head
	ll.Head = ll.Tail
	ll.Tail = node

	var next *SIntNode
	var prev *SIntNode

	for i := 0; i < ll.GetLength(); i++ {
		next = node.Next
		node.Next = prev
		prev = node
		node = next
	}
}
