// if doubly - move to middle, and then extend front and back to check
// if singly - make a reversed linkedlist from the first half

var LinkedList = require('./../util/LinkedList');

var palindrome = function(head) {
  

};

/* TEST */

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('c');
var f = new LinkedList('b');
var g = new LinkedList('a');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(palindrome(a));
