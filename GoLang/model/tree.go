package model

import "fmt"

type BST struct {
	Root *BSTNode
}

type BSTNode struct {
	Value int
	Left  *BSTNode
	Right *BSTNode
}

func (t *BST) Insert(x int) {
	fmt.Println("inserting ", x)
	node := &BSTNode{Value: x}
	if t.Root == nil {
		fmt.Println("empty tree, setting root")
		t.Root = node
		return
	}
	fmt.Println("root exists, moving on")
	curr := t.Root
	for curr != nil {
		fmt.Printf("comparing %d vs %d\n", x, curr.Value)
		if curr.Value > x {
			fmt.Println("going left")
			if curr.Left != nil {
				fmt.Println("node exists. moving lower")
				curr = curr.Left
			} else {
				fmt.Println("left is empty. setting node on the left")
				curr.Left = node
				return
			}
		} else if curr.Value < x {
			fmt.Println("going right")
			if curr.Right != nil {
				fmt.Println("node exists. moving lower")
				curr = curr.Right
			} else {
				fmt.Println("right is empty. setting node on the right")
				curr.Right = node
				return
			}
		} else {
			fmt.Println("value already exists")
			return
		}
	}
}

func (t *BST) Find(x int) ([]string, bool) {
	fmt.Println("searching", x)
	if t.Root == nil {
		fmt.Println("no root, exiting")
		return []string{}, false
	}
	fmt.Println("root exists, moving on")
	path := []string{"root"}
	curr := t.Root
	for curr != nil {
		fmt.Printf("comparing %d vs %d\n", x, curr.Value)
		if curr.Value == x {
			fmt.Println("found, exiting")
			path = append(path, "end")
			return path, true
		}

		if curr.Value > x {
			fmt.Println("going left")
			path = append(path, "left")
			curr = curr.Left
		} else if curr.Value < x {
			fmt.Println("going right")
			path = append(path, "right")
			curr = curr.Right
		}
	}
	path = append(path, "fail")
	return path, false
}
