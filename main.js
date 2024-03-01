var typed = new Typed(".text", {
    strings:["Frontend Developer", "Graphics Designer", "Web Developer","Flutter Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const progressBar = document.getElementsByClassName('progress-bar')[0]
setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue
        ('--width')) || 0
        progressBar.computedStyleMap.setProperty('--width', width + .1)
}, 5);