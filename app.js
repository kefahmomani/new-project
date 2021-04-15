<<<<<<< HEAD
var kefaName = prompt('Hello welcome, please enter your name !');

// validator 
// i will use the and
while(kefaName !== 'petra'&& kefaName !== 'aquaba'){
  kefaName = prompt('Please enter the name petra or aquaba');
}

// var will save the image that the user choose
var userChoose;

if(kefaName === 'petra'){
userChoose='<img src="https://images.memphistours.com/large/184203755_Petra.jpg">';
}else if (kefaName === 'aquaba'){
  userChoose='<img src="https://blog.padi.com/wp-content/uploads/2013/04/AAD-Pictur-64.jpg">';

 
  
}


var imagesNumber= prompt('How many image do you want???');

for(var i=0 ; i < imagesNumber; i++){
  document.write(userChoose);
}
=======
var city = prompt("Please enter the type of city you want to watch ", "PATRA");

if (city== "PATRA" ) {
 alert("I wish you an enjoyable watch ^.^ ");
} else if (city== "AQUABA" ) {
   alert("I wish you an enjoyable watch ^.^ ");
} else {
   alert("I'm sorry, You will not find what you are looking for on my website ^_^ ");
}


document.write("I hope you enjoyed browsing my website ^.^");

alert("Hello! You are in my project ^.^ ");

>>>>>>> 29e79569b18675a59b4779eed3ccea1a5145bf10
