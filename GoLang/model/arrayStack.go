package model

import "errors"

type AIntStack struct {
	Stack []int
	Top   int
}

func (s *AIntStack) Push(x int) {
	s.Stack = append(s.Stack, x)
	s.Top++
}

func (s *AIntStack) Pop() (int, error) {
	if s.Top == 0 {
		return 0, errors.New("stack is empty")
	}
	s.Top--
	return s.Stack[s.Top], nil
}

func (s *AIntStack) Peek() (int, error) {
	if s.Top == 0 {
		return 0, errors.New("stack is empty")
	}
	return s.Stack[s.Top-1], nil
}
