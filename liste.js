
// c=function randomColor(){
//     var allowed = "ABCDEF0123456789", S = "#";
//
//     while(S.length < 7){
//         S += allowed.charAt(Math.floor((Math.random()*16)+1));
//     }
//     return S;
// }

d=function get_random_color2()
{
    var r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}



document.querySelector("div").addEventListener("click",(e)=> {
// c=generateRandomColors(1,generateRandomColors(10))
    e.target.style.color =d()

})
