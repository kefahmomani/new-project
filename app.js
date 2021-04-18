 function sum()
{
  var num1=prompt('enter the first num');
  var num2=prompt('enter secund');
  var z=num1+num2;
alert(z);
}
sum ();
 
 var kefaName = prompt('Hello and welcome, please enter your name again !');
 

// validator 
// i will use the and
while(kefaName !== 'max'&& kefaName !== 'venom'){
  kefaName = prompt('Please enter the name max or venom');
}

// var will save the image that the user choose
var userChoose;

if (kefaName === 'max'){
userChoose='<img src="https://i.ytimg.com/vi/5hr2gwM_LVY/maxresdefault.jpg">';

}else if (kefaName === 'venom'){
  userChoose='<img src="https://miro.medium.com/max/1200/1*leC1oGHWSrAq5mdNsK1Few.jpeg">';
}


var imagesNumber= prompt('How many image do you want???');

for(var i=0 ; i < imagesNumber; i++){
  document.write(userChoose);
}

