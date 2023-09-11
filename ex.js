var nom = [a-Az-ZéèàêËîÏâ]-[a-Az-ZéèàêËîÏâ];
document.write(nom)
alert(nom);

var prenom = [a-Az-ZéèàêËîÏâ]-[a-Az-ZéèàêËîÏâ];
document.write(prenom)
alert(prenom);

var calcule=document.getElementById(calcule);
console.log(typeof nombre);
function calc()
{
    var n1 = parseInt(document.getElementById(n1).value);
    var n2 =paresInt(document.getElementById(n2).value);
    var signes=document.getElementById('signes').value;

    if(signes === '+')
    {
        document.getElementById(n3).value== n1+n2;
    }
  
}
var n3=parseinit(n1)+parseinti(n2);