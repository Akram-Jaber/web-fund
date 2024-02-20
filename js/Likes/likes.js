function add(x){
    y=document.getElementById(x)
    console.log (y)
    var counter=parseInt(y.innerText)
    y.innerText=counter+1
}