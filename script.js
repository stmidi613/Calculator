const result = document.querySelector(".result");  

document.querySelectorAll(".number").forEach(button => {
    button.onclick = function () {
        if(result.innerText === "0"){
            result.innerText = button.innerText
        }else{
            result.innerText = result.innerText + button.innerText;
        }
}
});

document.querySelectorAll(".function").forEach(button => {
    button.onclick = function () {
        result.innerText = result.innerText + button.innerText;
    } 
})

document.querySelector("#equals").onclick = function(){
    result.innerText = eval(result.innerText); 
}

document.querySelector("#clear").onclick = function(){
    result.innerText = "0"; 
}
/*document.getElementById("plus").onclick = function () {
    let number = document.getElementById("numbers").innerHTML;
     document.getElementById("numbers").innerHTML = Number(number) + 1;
     
     You need to have a solve button and function button

     Solve  eval() This pretends the parenthesis is Javascript code
 }  result.innerText = eval(result.innerText) Creates a security risk
 */