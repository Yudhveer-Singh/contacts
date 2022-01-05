
var map= new Map();

map.set("Akash",6283328132)
.set("Daddy",7696829870)
.set("Gopi Veera",8872421362)
.set("Gurdeep Veera",9592841362)
.set("Gurpinder Aunty",9780982262)
.set("Home",7627884503)
.set("Jaad",8198812562)
.set("Jaad New",6283989706)
.set("Mandeep Mama",9988263862)
.set("Mummy",9779013987)
.set("Sheenu Ma'am",9814553416)
.set("Sony Chacha",9781744462)
.set("Suman",8437112296)
.set("Yudhveer",9872629870);


for(let k of map.entries()){
   $(".contacts").append("<div>"+k[0]+"</div>");
}
/*function cont(name,contact){
   $(".contacts").append("<div>"+name+"</div>");
}*/
//cont("ok",86556);
$(".contacts div").click(function (){
   let name= this.innerHTML;
   let num= map.get(name);
   $(".pop").remove();
   $("body").prepend('<div class="pop"><span></span>'+'<div style="font-size:20px;">'+name+'</div><hr color="deepskyblue" width="80px" align="left">'+num+'<br><br>'+'<a href="tel:'+num+'">call</a>'+'<a href="sms:'+num+'?body=Hi">massage</a>'+'<a href="https://wa.me/+91'+num+'">whatsapp</a>'+'</div>');
   //$("header").html(name+" "+map.get(name));
});
$("body .after").click(function(){
   $(".pop").remove();
});
function toast(msg,toast_duration){
    $(".toast").empty();
    $("body").prepend('<div class="toast"><span class="s1"></span><span class="s2"></div></div>');
    $(".toast").append($('<div></div>').attr("class","tos").html(msg));
    setTimeout(function(){
        $(".toast").remove();
    },toast_duration);
}
toast("Welcome...",2000);
var params = new window.URLSearchParams(window.location.search);
if(params.get('v')!==null){
   setTimeout(function(){
      toast(params.get('v'),2000);
   },2000);
}