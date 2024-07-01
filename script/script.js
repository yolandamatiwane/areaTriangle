let inpB = document.querySelector('#base')
let inpH = document.querySelector('#height')
let btn = document.querySelector('button')
let spn = document.querySelector('#span')
let ans = document.querySelector('#ans')
let clear = document.querySelector('#clear')

btn.addEventListener('click',()=>{
    ans.value = eval(`${spn.innerText}*${inpB.value}*${inpH.value}`)
})
clear.addEventListener('click',()=>{
    ans.value = ''
    inpB.value = ''
    inpH.value = ''
})