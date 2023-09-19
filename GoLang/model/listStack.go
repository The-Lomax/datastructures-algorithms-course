package model

import "errors"

var errStackEmpty = errors.New("stack is empty")

type LIntStack struct {
	Top  *SIntNode
	Size int
}

func (ls *LIntStack) Push(x int) {
	node := &SIntNode{Value: x}
	if ls.Top == nil {
		ls.Top = node
	}
	node.Next = ls.Top
	ls.Top = node
	ls.Size++
}

func (ls *LIntStack) Pop() (int, error) {
	if ls.Size == 0 {
		return 0, errStackEmpty
	}
	node := ls.Top
	ls.Top = ls.Top.Next
	ls.Size--
	return node.Value, nil
}

func (ls *LIntStack) Peek() (int, error) {
	if ls.Size == 0 {
		return 0, errStackEmpty
	}
	return ls.Top.Value, nil
}
