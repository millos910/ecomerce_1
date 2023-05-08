
const btnCart=document.querySelector('.contenedor-icon-principal')
const conteinerCartProducts=document.querySelector('.hidden-cart')
btnCart.addEventListener('click',()=>{conteinerCartProducts.classList.toggle('hidden-cart')})


const  btnSwitch=document.querySelector('.switch');
btnSwitch.addEventListener('click',()=> {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
})
