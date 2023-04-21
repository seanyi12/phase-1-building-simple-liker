// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const selectAllHearts = document.querySelectorAll(".like-glyph")

for(let loop of selectAllHearts){
  loop.addEventListener('click', mockmimicServerCall)
}

const modal = document.querySelector('#modal')
modal.className = "hidden"
function mockmimicServerCall(e){
mimicServerCall()
  .then(function(){
    console.log(e.target)
    if(e.target.innerText === EMPTY_HEART){
    e.target.className = 'activated-heart'
    e.target.innerText = FULL_HEART}

    else{
      e.target.className = ''
      e.target.innerText = EMPTY_HEART
    }
  })
.catch(function(error){
 modal.className = ""
 modal.innerText = error
  setTimeout(function(){
    modal.className = "hidden"
  }, 3000)
})
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
