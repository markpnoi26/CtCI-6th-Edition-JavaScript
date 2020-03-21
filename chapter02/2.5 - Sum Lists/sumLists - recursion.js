const LinkedList = require('./../util/LinkedList')
const printList = require('./../util/printList')

function sumLinkedLists(node1, node2, carry=0){
  // do recursively
}

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). this case refers to 617 + 295
// Output: 2 -> 1 -> 9. the answer refers to 912

var a = new LinkedList(7)
var b = new LinkedList(1)
var c = new LinkedList(6)

a.next = b
b.next = c

var d = new LinkedList(5)
var e = new LinkedList(9)
var f = new LinkedList(2)

d.next = e
e.next = f

printList(sumLinkedLists(a,d))
