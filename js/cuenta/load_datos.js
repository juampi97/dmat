import { getCookie } from "../functions.js";

window.addEventListener('load',() => {
    const datos = document.querySelector("#datos");

    let nombre = getCookie('nombre')
    let apellido = getCookie('apellido')
    let email = getCookie('email')
    let empresa = getCookie('empresa')
    let cuit = getCookie('cuit')

    if(window.innerWidth > 500){
    datos.innerHTML = `
            <div class="row">
                <div class="col-2">
                    <p><strong>Nombre</strong></p>
                </div>
                <div class="col-6">
                    <p>${nombre + ' ' + apellido}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-2">
                    <p><strong>Email</strong></p>
                </div>
                <div class="col-6">
                    <p>${email}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-2">
                    <p><strong>Empresa</strong></p>
                </div>
                <div class="col-6">
                    <p>${empresa || 'No definido'}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-2">
                    <p><strong>CUIT</strong></p>
                </div>
                <div class="col-6">
                    <p>${cuit || 'No definido'}</p>
                </div>
            </div>
            `
    } else {
        datos.innerHTML = `
            <div class="row">
                <div class="flex-row">
                    <p><strong>Nombre</strong></p>
                    <p>${nombre + ' ' + apellido}</p>
                </div>
            </div>
            <div class="row">
                <div class="">
                    <p><strong>Email</strong></p>
                    <p>${email}</p>
                </div>
            </div>
            <div class="row">
                <div class="">
                    <p><strong>Empresa</strong></p>
                    <p>${empresa || 'No definido'}</p>
                </div>
            </div>
            <div class="row">
                <div class="">
                    <p><strong>CUIT</strong></p>
                    <p>${cuit || 'No definido'}</p>
                </div>
            </div>
            `
    }
})
