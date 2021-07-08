var three=document.getElementById('three');
var six=document.getElementById('six');
var nine=document.getElementById('nine');
var count=0;


function asison(){
var mod=count%2;
if(mod==0){
three.style.animationName='threeon';
six.style.animationName='sixon';
nine.style.animationName='nineon';
}


if(mod==1){
three.style.animationName='threeoff';
six.style.animationName='sixoff';
nine.style.animationName='nineoff';
}


count++;
}