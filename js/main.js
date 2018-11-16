
catFact()
document.querySelector('.next').onclick = forwards;
document.querySelector('.prev').onclick = backwards;

const factArray = []

let i =0;
function catFact(e){
  // e.preventDefault()
  fetch(`https://cat-fact.herokuapp.com/facts`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      response.all.forEach(function(fact){
        // saves all cat facts into array
        factArray.push(fact.text);
        })
        document.querySelector('p').textContent = factArray[0]
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}


// when click go to the next fact which starts in array
function forwards() {
 i--
 if(i == -1){
  i = factArray.length-1;
 }
 document.querySelector('p').innerHTML = factArray[i]
}
// when click go to the previous fact which starts in array
function backwards() {
i++
  if(i == factArray.length){
  i = 0;
}
document.querySelector('p').innerHTML = factArray[i]
}
//addeventlistener for keys being pressed
document.onkeydown = zebra //onkeydown is the universal term used for keyboards
function zebra(e){ // zebra is calling on two prior functions
  if(e.keyCode===39){
    backwards()
  }
  if(e.keyCode===37){
    forwards()
  }
}
