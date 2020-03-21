const LinkedList = require('./../util/LinkedList')
const printList = require('./../util/printList')

function sumLinkedListsForward(list1, list2) {
  
}

function length(node) {
  
}

function padList(shortList, padding) {
  
}

function appendToStart(head, node) {
 
}

function sumAndAppendNodes(node1, node2) {
  
}

function carryBase10(head, nextDigitValue) {
  
}

// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). this case refers to 617 + 295
// Output: 9 -> 1 -> 2. the answer refers to 912

var a = new LinkedList(6)
var b = new LinkedList(1)
var c = new LinkedList(7)

a.next = b
b.next = c

var d = new LinkedList(2)
var e = new LinkedList(9)
var f = new LinkedList(5)

d.next = e
e.next = f

printList(sumLinkedListsForward(a, d))
