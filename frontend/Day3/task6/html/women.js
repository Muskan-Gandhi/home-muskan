console.log("running");
var count=0;
function addtocart(){
    count++;
    console.log(count);
    document.getElementById("cartItem").innerHTML = "Cart Items: " + count;
}