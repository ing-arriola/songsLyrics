import * as ui from './interfaz.js'
import {API} from './api.js'

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
        const api=new API(artist,song)
        api.queryToAPI()
            .then(data=>{
                if (data.lyrics) {
                    ui.resultado.innerHTML=data.lyrics
                } else {
                    ui.resultado.innerHTML=''
                    ui.mensajes.innerHTML='Error at song or artist, please check'
                    ui.mensajes.classList.add('error')
                    setTimeout(() => {
                        ui.mensajes.innerHTML=''
                        ui.mensajes.classList.remove('error')
                    }, 3000)
                    ui.formToSearch.reset()
                }
            })
    }
})