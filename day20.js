//*DOM tree traversal
// Moving from one node to another within the tree is called tree traversal

// -parent node
// -child node (text and element nodes)
// -sibling nodes (all the nodes who have same parent node are called sibling nodes)

// Properties used to traverse to DOM tree.

//   - perentNode :- It returns parent node the current node
//   - firstChild :- returns a node which is the first child (text or element nodes)
//   - firstElementChild :- returns the first element child node (ignore text nodes)
//   - lastChild :- returns a node which is the last child of current node (text or element nodes)
//   - lastElementChild :- returns the last element child node ( ignore text nodes)
//   - childNodes :- returns a nodelist  of all the child nodes (text and element nodes)
//   - children :- returns a list of all the elemet child nodes (ignore text nodes)
//   - nextSibling :- returns the next sibling node (text or elemment node  )
//   - nextElementSiblling :- returns the next sibling element node (ignore text nodes)
//   - previousNode :- returns the precious sibling node (text or element node )
//   - previousElementSibling :- returns the previous element sibling (ignore text nodes)
//   - childElementCount :- returns total number of all the elements child nodes

//*Events :- an action happend at a prticular time instance is called an event .

//In web app the events can be categorized in 2 types

//   1.User events :- These are the events happened because of the user avtivity
// like mouse click , mouse move, inpute change , etc.

//   2.Browser events :- These events happen because  of the web browser
// like online , offline, page load ,etc.

// propagation means the event is going to window to target element by calling event handler of parent nodes ( phase one or capturing phase)
//and target element to window by calling event handler of parent nodes (phase two or bubbling phase(default))

// stopPropagation() :- this function stops the execution of event handlers of all the parent nodes .
//All the  event handler function of  current target element for same event will get exucuted.

// stopImmediatePropagation() :- this function stops the execution of all the events handlers except current event handlers function  .
