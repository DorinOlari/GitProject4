const patrat = document.querySelector('.patrat')
const body = document.body

patrat.addEventListener('click', ()=>{
 const new_patrat = document.createElement('div')
 new_patrat.classList.add('patrat2')
new_patrat.style.width = '100px'
 new_patrat.style.height = '100px'
 new_patrat.style.margin = '7px'
 new_patrat.style.backgroundColor = 'red'
 body.append(new_patrat)
})