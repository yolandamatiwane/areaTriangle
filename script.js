let inpB = document.querySelector('#base')
let inpH = document.querySelector('#height')
let btn = document.querySelector('button')
let spn = document.querySelector('#span')
let ans = document.querySelector('#ans')

btn.addEventListener('click',()=>{
    ans.value = eval(`${spn.innerText}*${inpB.value}*${inpH.value}`)
})