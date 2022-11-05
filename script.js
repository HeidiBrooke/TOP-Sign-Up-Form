addEventListener()
function passMatch(){
    let pass1 = document.
    if (pass1 === pass2){
        //submit button
    }
    else {
        //prompt "Passwords do not match"
    }
}

function addListeners(){
    const submitBtn = document.querySelectorAll('button'); 
    submitBtn.addEventListener('click', passMatch);
    
}

addListeners()