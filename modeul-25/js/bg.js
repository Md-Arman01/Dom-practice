// <!-- section 1 -->
// <!-- bg changes practice -->

// option 2 button bg set
//  <button onclick="makeRed()">red bg</button>
function makeRed() {
  document.body.style.backgroundColor = "red";
}
// option 3 button bg set
//  <button id="make-blue">blue bg</button>
const makeBlueBg = document.getElementById("make-blue");
makeBlueBg.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
// option 4 button bg set
//  <button id="make-purple">perple bg</button>
const makePurpleBg = document.getElementById("make-purple");
makePurpleBg.onclick = function purpleBg() {
  document.body.style.backgroundColor = "purple";
};

// option 5 button bg set
//  <button id="make-orange">orenge bg</button>
const makeOrange = document.getElementById("make-orange");
makeOrange.addEventListener("click", orange);
function orange() {
  document.body.style.backgroundColor = "orange";
}

// option 6 button bg set
//  <button id="make-gray">gray bg</button>
document.getElementById("make-gray").addEventListener("click", function () {
  document.body.style.backgroundColor = "gray";
});

// <!-- section 2 -->
// <!-- handle practice -->

const handleName = document.getElementById("handle");
handleName.addEventListener("click", function () {
  const outputName = document.getElementById("output");
  outputName.innerText = "good work";
});

document.getElementById('handle2').addEventListener('click', function(){
  const inputField = document.getElementById('input')
  const inputText = inputField.value;
  const inputTextDisplay = document.getElementById('input-text-display');
  inputTextDisplay.innerText = inputText;
  inputField.value = '';
})

// <!-- section 3 -->

document.getElementById('btn-post').addEventListener('click', function(){
  const commentBox = document.getElementById('text-area');
  const newComment = commentBox.value;
  const textContainer = document.getElementById('text-container');
  const paraggrap = document.createElement('p');
  paraggrap.innerText = (newComment);
  textContainer.appendChild(paraggrap)
  commentBox.value = '';


})


// <!-- section 4 -->
// github delete system

document.getElementById('delete-confarm').addEventListener('keyup', function(event){
  const text = event.target.value
  const deleted = document.getElementById('delete-btn');
  if(text === 'delete'){
      deleted.removeAttribute('disabled')
  }else{
      deleted.setAttribute('disabled', true)
  }
  
})
document.getElementById('delete-btn').addEventListener('click', function(){
  const secretInfo = document.getElementById('secret-info');
  secretInfo.style.display = 'none'
})

