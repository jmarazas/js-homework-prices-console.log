var question = prompt("Kokia prekės kaina?")

while(isNaN(question)){
    question = prompt("Kokia prekės kaina?")
}

var withVAT= console.log("Prekės kaina su PVM: " + question + " €")
var onlyVAT = console.log("PVM: " + (question * .21).toFixed(2) + " €")
var withoutVAT = console.log("Be PVM: " + (question - (question * .21).toFixed(2)).toFixed(2) + " €")


