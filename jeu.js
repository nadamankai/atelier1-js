var c=Math.floor(Math.random()*10)
console.log(c)
//var chiffre=prompt("donner un chiifre entre 0 et 10")
var i=0
while(t=prompt("donner un chiffre entre 0 et 10")){
    if(t!=c){
    alert("it's wrong")
    i++;
}
    else{
        alert(`vous avez gagné apres ${i} fois `)
        break;
    }

}