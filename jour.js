
document.getElementById("boutton").addEventListener("click",function (){
var j=document.getElementById("jour").value
var c=document.getElementById("content").value
var i=1;
// var b=document.querySelector("#boutton")
    let text;
    if ((j != "") && (c != "")) {
        text1 = j + " : " + c + "  "
        var newNode = document.createElement("div")
        newNode.innerText = text1
        newNode.id=i
        newNode.style.border = "1px outset lightpink ";
        newNode.style.backgroundColor="lightpink"

        newNode.style.fontSize=20
            // .style.borderColor="pink"
        document.getElementById("add").appendChild(newNode)

        var newnode2=document.createElement("button")
        // newnode2.style.width="20"
        // newnode2.style.background="delete.jpg"
        // newnode2.style.backgroundColor="transparent"
        newnode2.id=i
        newnode2.style.border="pink"
        newnode2.style.backgroundColor="lightpink"
        // newnode2.style.outline = "none";
        newnode2.className="btn"
        newNode.appendChild(newnode2)

        var newnode3=document.createElement("img")
        newnode3.id=i
        newnode3.src="delete.jpg"
        newnode3.width=30
        newnode3.height=25

        newnode2.appendChild(newnode3)

        newnode2.addEventListener("click",()=>{
            newNode.remove()
        })
        document.getElementById("jour").value=""
        document.getElementById("content").value=""

    }


})
// document.getElementById("boutton").addEventListener("click",()=>{
//     document.getElementById("jour").nodeValue.remove()
//     document.getElementById("content").remove()
//
// })

// document.getElementById("boutton").addEventListener("click",function(){
//     var text1 = document.getElementById("jour").value ;
//     var text2 = document.getElementById("content").value;
//     var i=1;
//     if((text1!="") &&(text2!="")){
//         var text = text1 + " " + text2;
//         var newNode=document.createElement("div");
//         newNode.innerText = text ;
//         newNode.id =  i +"";
//         document.getElementById("add").appendChild(newNode);
//
//         var newNode2=document.createElement("button");
//         //newNode2.style.backgroundColor = "transparent" ;
//         //newNode2.style.outline = "transparent";
//         newNode2.id=  i + "";
//         newNode2.className = "btn"
//         newNode.appendChild(newNode2);
//
//
//         var newNode3 = document.createElement("img")
//         newNode3.src="delete.jpg";
//         newNode3.width="20";
//         newNode3.height="15";
//         newNode2.appendChild(newNode3);
//
//         //newNode2.onclick = reply(newNode2.id);
//         i++;
//     }
//
//     function reply(id)
//     {
//         document.getElementById(id).remove();
//     }
//
//     document.getElementsByClassName("btn").addEventListener("click",function(){
//
//
//         //var id = document.getElementById("todo").parentNode.remove();
//         // var todo = document.getElementById("todo");
//         //todo.remove();
//     })
//
// })