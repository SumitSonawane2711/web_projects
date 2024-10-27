const throttleFunction = (func, delay) => {
    let prev = 0;
    return(...args) => {
        let now = new Date().getTime();
        if(now - prev > delay){
            prev = now;
            return func(...args)
        }
    }
}


document.querySelector('#center')
.addEventListener('mousemove',throttleFunction((detls)=> {
    var div = document.createElement("div");
    div.classList.add('imagediv')
    div.style.left =detls.clientX + 'px';
    div.style.top = detls.clientY + 'px';

    var img = document.createElement("img");
    img.setAttribute("src","horses.jpg")
    div.appendChild(img);

    document.body.appendChild(div)

    gsap.to(img,{
        y: "0",
        ease: Power1,
        duration: .6
    })

    gsap.to(img,{
        y: "100%",
        delay: .3,
        ease: Power2,
    
    })
    
    setTimeout(function(){
        div.remove()
    },600)

},400));

