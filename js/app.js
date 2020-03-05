import * as ui from './interfaz.js'

console.log(ui)

ui.formToSearch.addEventListener('submit',(e)=>{
    e.preventDefault()
    const artist=document.querySelector('#artista').value
    const song=document.querySelector('#cancion').value
    
    if (artist==='' || song==='') {
        //Error by incomplete data
        ui.mensajes.innerHTML='Error... all fields are required'
        ui.mensajes.classList.add('error')
        setTimeout(() => {
            ui.mensajes.innerHTML=''
            ui.mensajes.classList.remove('error')
        }, 2000);
    } else {
        //Form complete
    }
})