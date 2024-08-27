

function deleteContent(){
    const contenedorMensaje = document.getElementById("contenedor-mensaje")
   
    if(contenedorMensaje){
        while(contenedorMensaje.firstChild){
            contenedorMensaje.removeChild(contenedorMensaje.firstChild)
        }
        contenedorMensaje.style.display =""
    }

     contenedorMensaje.className = ""

}

function showEncriptedText(text){
    const contenedorMensaje = document.getElementById("contenedor-mensaje")
    const contenedorMensajeEncriptado = document.createElement("div")
    const encriptedText = document.createElement("p")
    const copyTextButton = document.createElement("button")

    contenedorMensajeEncriptado.className = "contenedor-mensaje-encriptado"

    encriptedText.className = "encripted-text"
    encriptedText.textContent = text

    copyTextButton.className = "copy-text-button"
    copyTextButton.innerText = "Copiar"

    contenedorMensaje.className = "output"

    contenedorMensaje.appendChild(contenedorMensajeEncriptado)
    contenedorMensajeEncriptado.appendChild(encriptedText)
    contenedorMensaje.appendChild(copyTextButton)

    copyTextButton.addEventListener("click", ()=>{

        let textToCopy = text

        navigator.clipboard.writeText(textToCopy)

    })


}






function encriptValue(){


    const inputText = document.querySelector("textarea")
    const value = inputText.value


    if(validateInput(value) === true){

    
        
        let encryptedText = value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

        
    
        deleteContent()
        showEncriptedText(encryptedText)
        invalidInput(true)
        


    }else{
        invalidInput(false)

    }






}




function desencriptText(){
    const inputText = document.querySelector("textarea")
    const value = inputText.value

    if(validateInput(value) === true){

        let decryptedText = value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")

        deleteContent()
        showEncriptedText(decryptedText)
        invalidInput(true)

    }else{
        invalidInput(false)
    }

    
}



function validateInput(text){

    if(text.length === 0){
        return false
    }
    let regex = /^[a-z\s]*$/;

    if (!regex.test(text)) {
        return false;
    }


    return true
    

}


function invalidInput(isValid){

    const validText = document.querySelector(".contenedor-entrada p")
    

    if(isValid){
        validText.style.color = "#495057"
    }else{
        validText.style.color = "red"

    }

}




