// twoPointDistance function create with 4 parameter
function twoPointDistance() {
    var x1 = document.getElementById('firstValue').value
    var y1 = document.getElementById('secondValue').value
    var x2 = document.getElementById('thirdValue').value
    var y2 = document.getElementById('fourthValue').value


    // have apply the formula of distance between two point and value stored in distance variable 
    // and have return the distance 
    let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    var result = Math.floor(distance);
    document.getElementById('result').innerHTML = result

}

// function twoPointDistance called with 4 arguments and stored in distance variable
// var distance = twoPointDistance(1, 2, 3, 4);
// // print output in console
// console.log(distance); 
