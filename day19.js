// 2.getElementByTagName:-

// var spanList = document.getElementsByTagName("span");
//   spanList[0].style.color = "red";
//   spanList[1].style.color = "blue";

//   if we want to apply the color to all the tag by using getElementsByTagName then we can use the for loop.

// for (var span of spanList) {
//   span.style.color = "red";
// }

// 3.getElementByClassName

// var spanList = document.getElementsByClassName("dark");
// // spanList[0].style.color = "red";
// for (var span of spanList) {
//   span.style.color = "red";
// }

// 4.getElementByName

// var spanList = document.getElementsByName("dark");
// for (var span of spanList) {
//   span.style.color = "blue";
// }

// 5.querySelector : we can use the queryselector to the  all id, class or tag for the single element ka mhante  ..

// var ele = document.querySelector("#myid");
// ele.style.color = "red";
// var ele = document.querySelector(".dark");
// ele.style.color = "blue";
// var ele = document.querySelector("span");
// ele.style.color = "orange";

// 6.querySelectorAll

// var eleList = document.querySelectorAll(".dark");

// for (var ele of eleList) {
//   ele.style.color = "pink";
// }

//Changing the DOM node properties

// var ele = document.getElementById("myid");

// ele.id = "newId";

// ele.textContent = "This is new content from js";
// ele.textContent = "<span>This is new content from js</span>";
// ele.innerHTML = "<span>This is new content from js</span>"; //innerHTML add the content to  the outer tag with the inner tag
// ele.outerHTML = "<span>This is new content from js</span>"; //outerHTML add the content by removing the outer tag with inner tag

// console.log(ele.tagName);

// THere are 4 functions to process attributes

// setAttribute("attrName"); :- adds an attribute to the current node
// getAttribute("attrName"); :- returns the value of the attributes of the current node
// hasAttribute("attrName"); :- returns true if attribute is available, otherwise return false
// removeAttribute("attrName"); :- remove the attribute

// ele.setAttribute("name", "myname");

// console.log(ele.getAttribute("name"));
// if (ele.hasAttribute("name")) ele.removeAttribute("name");

//Changing the classes

// var ele = document.querySelector("h2");
// alert(ele.className);

// var classList = ele.classList;
// console.log(classList);

// classList.add("third"); //add the class
// classList.remove("third");  //remove the class
//to check whether a class is available or not
// console.log("exists :", classList.contains("third"));

//creating DOM node

// var ele = document.createElement("li"); //creating element
// ele.textContent = "third"; //adding the external content
// var ul = document.querySelector("ul");

// ul.appendChild(ele);   //append the child to the parent
// ul.insertBefore(ele, ul.firstElementChild);  //isert the before first element

function addCity() {
  var ul = document.getElementById("cities");
  var li = document.createElement("li");
  var input = document.getElementById("city");

  li.textContent = input.value;
  input.value = "";
  if (li.textContent.length >= 2) ul.appendChild(li);
}
