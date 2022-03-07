let bRestart = document.getElementById('restart')
let bConfig = document.getElementById('config')
let dMenu = document.getElementById('menu')


bRestart.addEventListener('click', ()=> {
    main()
})

bConfig.addEventListener('click', ()=> {
    if(menu.style.display == 'block'){
        canvas.classList.remove('BlurAnime')
        menu.style.display = 'none'
    }
    else{
        canvas.classList.add('BlurAnime')
        menu.style.display = 'block'
    }
})

window.addEventListener('mousedown', e=> {
    if(menu.style.display == 'block'){
        let bound = menu.getBoundingClientRect()
        if(e.pageX < bound.left || e.pageX > bound.right || e.pageY < bound.top || e.pageY > bound.bottom){
            canvas.classList.remove('BlurAnime')
            menu.style.display = 'none'
        }
    }
})