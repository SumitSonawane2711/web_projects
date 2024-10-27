window.addEventListener("mousemove", function(details) {

    var rect = this.document.querySelector('#rect')
    var xvar = gsap.utils.mapRange(0, window.innerWidth, 100+rect.getBoundingClientRect().width/2, window.innerWidth-(100+rect.getBoundingClientRect().width/2), details.clientX)
    gsap.to('#rect', {
        left: xvar + "px",
        ease: Power3
    })
})