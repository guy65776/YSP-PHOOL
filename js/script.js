function flipCard(card){
card.classList.toggle("flipped");
}

const counters=document.querySelectorAll('.counter');

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute('data-target');
const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});

const accordions=document.querySelectorAll(".accordion");

accordions.forEach(item=>{

item.addEventListener("click",function(){

this.classList.toggle("active");

let panel=this.nextElementSibling;

if(panel.style.maxHeight){

panel.style.maxHeight=null;

}else{

panel.style.maxHeight=panel.scrollHeight+"px";

}

});

});
