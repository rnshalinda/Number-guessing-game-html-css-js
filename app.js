
let randNum = Math.round(Math.random() * 10)
let count = parseInt(document.getElementById("attempts").innerText);      // displayed attempts count
count = count -1    // actual attempts count
let flag = false
console.log("random num is : "+randNum);


let placeImg = document.getElementById("placeImg")


function SubmitBtn_clickAction() {  // submit btn action

    let userInput = parseInt(document.getElementById("userInput").value)
    let outResult = document.getElementById("result")
    let hint = document.getElementById("hint")
    let attempts  = document.getElementById("attempts")


    if(count > 0 && !flag){

        if(randNum < userInput){        // if input higher
            outResult.innerText = "Try again!"
            hint.innerText = "Hint : Correct number is lower"
            chk(count)
        }
        else if(randNum > userInput){   // if input lower
            outResult.innerText = "Try again!"
            hint.innerText = "Hint : Correct number is higher"
            chk(count)
        }
        else if(randNum === userInput){ // if input eqaual to randNum
            flag = true
            outResult.innerText = "You won!"
            hint.innerText = "Correct number : "+randNum
            placeImg.innerHTML = '<img id="imgSet" src="./media/won.gif" alt="won" width="250px">'
        }
        else{
            outResult.innerText = "Sorry, invalid input."   // if input other than a number
            count++
            placeImg.innerHTML = '<img id="imgSet" src="./media/patience.gif" alt="" width="270px">'
        }

        attempts.innerText = count--    // attempts count
    }
    else{
        if(!flag){
            outResult.innerText = "Oops! Max attempts reached."    // if max attempts reached
            hint.innerText = ""
            attempts.innerText = count
            placeImg.innerHTML = '<img id="imgSet" src="./media/lost.gif" alt="won" width="220px" height=170px">'
        }
    }
}

function RefBtn_clickAction(){
    location.reload(true)   // page refresh btn action
}

function chk(count){
    switch(count){
        case 2 :  placeImg.innerHTML = '<img id="imgSet" src="./media/first.gif" alt="" width="250px" height="135px">'
            break
        case 1 :  placeImg.innerHTML = '<img id="imgSet" src="./media/scnd.gif" alt="" width="250px">'
            break
    }
}