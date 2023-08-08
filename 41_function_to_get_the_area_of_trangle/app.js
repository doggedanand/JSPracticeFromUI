function getAreaOfTriangle(h, b) {
  var h=  document.getElementById('height').value;

  var b=document.getElementById('base').value;
  
    var area = (h * b) / 2; // Calculate the area using the formula: (height * base) / 2
    document.getElementById('result').innerHTML=area;
    return area; // Return the calculated area
  }
  
  