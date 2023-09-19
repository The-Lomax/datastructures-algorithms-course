package model

import "errors"

var errQueueEmpty = errors.New("queue is empty")

type Queue struct {
	Head *SIntNode
	Tail *SIntNode
	Size int
}

func (q *Queue) Add(x int) {
	node := &SIntNode{Value: x}
	if q.Size == 0 {
		q.Head = node
		q.Tail = node
	} else {
		q.Tail.Next = node
	}
	q.Size++
}

func (q *Queue) Remove() (int, error) {
	if q.Size == 0 {
		return 0, errQueueEmpty
	}
	node := q.Head
	q.Head = q.Head.Next
	q.Size--
	return node.Value, nil
}
