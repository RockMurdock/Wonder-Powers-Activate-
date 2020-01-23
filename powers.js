const flight = document.getElementById("flight")

const flightHandlerFunction = () => {

    flight.classList.remove("disabled");
    flight.classList.add("enabled");
}

document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);

const mind = document.getElementById("mindreading")

const mindReadingHandlerFunction = () => {
    
    mind.classList.remove("disabled");
    mind.classList.add("enabled");
}

document.querySelector("#activate-mindreading").addEventListener("click", mindReadingHandlerFunction);

const xray =document.getElementById("xray")

const xRayHandlerFunction = () => {

    xray.classList.remove("disabled");
    xray.classList.add("enabled")
}

document.querySelector("#activate-xray").addEventListener("click",xRayHandlerFunction)


const enableAll = document.querySelectorAll("section")

const enableAllHandlerFunction = () => {
    for(let i = 0; i < enableAll.length; i++) {
        enableAll[i].classList.remove("disabled")
        enableAll[i].classList.add("enabled")
    }
}
document.querySelector("#activate-all").addEventListener("click", enableAllHandlerFunction)

const disableAll = document.querySelectorAll("section")

const disableAllFunction = () => {
    for(let i = 0; i < enableAll.length; i++) {
        disableAll[i].classList.remove("enabled")
        disableAll[i].classList.add("disabled")
    }
}

document.querySelector("#deactivate-all").addEventListener("click", disableAllFunction)