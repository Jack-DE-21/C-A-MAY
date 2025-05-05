images = document.querySelectorAll('img');

const mouseE = (evt) => {
    evt.target.className = "animate"
    thisimage = evt.target.getAttribute('src');
    newimage = thisimage.replace('thumbnail', 'bw')
    evt.target.setAttribute('src', newimage)
}

const mouseL = (evt) => {
    evt.target.className = "animate2"
	evt.target.setAttribute('src', thisimage)
}

images.forEach((item) => {
    item.addEventListener('mouseenter', mouseE);
    item.addEventListener('mouseleave', mouseL)
})
