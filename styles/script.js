const pics = document.querySelectorAll('.card')

pics.forEach((pic) =>{
    pic.addEventListener('mouseover', () =>{
        pic.classList.add('active')


    })
})

pics.forEach((pic) => {
    pic.addEventListener('mouseout', ()=> {
        pic.classList.remove('active')
    })
})