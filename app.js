let btn= document.querySelector('button');
btn.addEventListener('click',function(){
    let h1=document.querySelector("h1");
    let random=colorChange();
    h1.innerText=random;
    let x=document.querySelector(".ine");
    x.style.backgroundColor=random;
});

function colorChange(){
    let r1=Math.floor(Math.random()*255);
    let g1=Math.floor(Math.random()*255);
    let b1=Math.floor(Math.random()*255);
    let color=`rgb(${r1},${g1},${b1})`;
    return color;
}
