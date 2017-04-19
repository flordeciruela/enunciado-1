
var frag = document.createDocumentFragment();
function firstBox() {
  var box1 = document.createElement("div");
  box1.classList.add("parent-box");
  box1.classList.add("red")

  var boxCenter = document.createElement("div");
  boxCenter.classList.add("mediun-box");
  boxCenter.classList.add("purple");

  var boxRight = document.createElement("div");
  boxRight.classList.add("small-box");
  boxRight.classList.add("yellow");

  boxCenter.appendChild(boxRight);
  box1.appendChild(boxCenter);
  frag.appendChild(box1);
  document.body.appendChild(frag);
}
firstBox();

function secondBox() {
  var box2 = document.createElement("div");
  box2.classList.add("parent-box");
  box2.classList.add("blue")

  var boxCenter2 = document.createElement("div");
  boxCenter2.classList.add("mediun-box");
  boxCenter2.classList.add("green");

  var boxRight2 = document.createElement("div");
  boxRight2.classList.add("small-box");
  boxRight2.classList.add("black");

  box2.appendChild(boxCenter2);
  box2.appendChild(boxRight2)
  frag.appendChild(box2);
  document.body.appendChild(frag);
}
secondBox();
