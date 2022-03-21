document.querySelector("#couleur").addEventListener("input",(e)=>{

    document.querySelector("p").style.color=document.querySelector("#couleur").value
})
document.querySelector("#taille").addEventListener("input",(e)=> {
    document.querySelector("p").style.fontSize=document.querySelector("#taille").value+"px"
})

document.querySelector("#police").addEventListener("input",(e)=> {
    document.querySelector("p").style.fontFamily=document.querySelector("#police").value
})