const pics = document.querySelectorAll('.card')

pics.forEach((pic) => {
    pic.addEventListener('click', () => {
        pic.classList.add('active')


    })
})

pics.forEach((pic) => {
    pic.addEventListener('mouseout', () => {
        pic.classList.remove('active')
    })
})