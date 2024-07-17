const patrat = document.querySelector('.patrat')
const body = document.body

patrat.addEventListener('click', ()=>{
 const new_patrat = document.createElement('div')
 body.append(new_patrat)
 new_patrat.classList.add('patrat2')

})
