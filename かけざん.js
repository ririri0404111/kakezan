function buttononclick(){
 var a = document.getElementById('a').value;
 var b = document.getElementById('b').value;
  a = Number(a);
  b = Number(b);
  var result = a * b;
  var ccc = document.getElementById('c');
  ccc.value = result

}
