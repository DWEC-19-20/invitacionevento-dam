/*function borrar(elemento){
    {
        var id=elemento.parentNode.getAttribute("li");
        node=document.getElementById(li);
        node.parentNode.removeChild(node);
    }
}

document.getElementById("borrar").addEventListener("click",editar());

function editar(){
  event.preventDefault();
let spanamodificar=document.getElementById("nombrecito");
document.getElementById("nombrecito").reset();
spanamodificar=document.createTextNode("");
}
*/

//document.getElementById("registrar").addEventListener("submit",añadir());

document.getElementById("añadirNombre").addEventListener("click",añadir);

function añadir(name){
  event.preventDefault();

  let invitado=document.getElementById("nombreAñadir").value;
  for (let c=0; c<document.getElementsByTagName("span").length;c++){
    if (invitado==document.getElementsByTagName("span")[c].innerHTML){
      document.getElementById("d").style.display="block";
      document.getElementById("d").innerHTML="No se pueden repetir nombres";
      return false
    }
    else{
      document.getElementById("d").style.display="none";
    }
  }

  

  let newLi=document.createElement("li");

  let newSpan=document.createElement("span");
  newLi.appendChild(newSpan);
  let newName = document.createTextNode(document.getElementById("nombreAñadir").value); 
  newName.id="nombrecito";
  newSpan.appendChild(newName); //añade texto al elemento creado. 
  let newTextito=document.createElement("input");
  newTextito.type="text";
  newTextito.style.display="none";
  

  let newLabel=document.createElement("label");
  newLi.appendChild(newLabel); //añadir Labbel a Li
  let newContent=document.createTextNode("Confirmed");

  newLabel.appendChild(newContent); //Añadir contenido a Labbel
  newContent=document.createElement("input");
  newLabel.appendChild(newContent); //Añadir Input a Li
  newContent.type="checkbox";
  newLabel.parentElement.className="not-responded";
  newLabel.appendChild(newContent);

  newContent.addEventListener('change',function(){
    if (this.checked){
      newLabel.parentElement.className="responded"
    }
    else {
      newLabel.parentElement.className="not-responded"
    }
    });
  
  
    document.getElementById("añadirNombre").addEventListener("click", function(){
      let lista=document.getElementById("invitedList");
      /*let confirmados=lista.getElementsByClassName("not-responded");
      let n=lista.getElementsByClassName("responded");
      let nombre=confirmados.item(0).firstChild.textContent;*/
      for (let i=0; lista;i++){
            if (lista.item(i).firstChild.firstChild.textContent==nombre){
              document.getElementById("d").innerHTML="Error, no puede poner dos nombre iguales";
              nombre=confirmados.item(i);
            }
    }})
    
  let newButton=document.createElement("button");
  newLi.appendChild(newButton); //Añadir Button a Li
  newContent=document.createTextNode("edit");
  newButton.appendChild(newContent);

  newButton.addEventListener("click",function(){ 
    
    let nombrecillo=window.prompt("Nombre a añadir");
    for (let c=0; c<document.getElementsByTagName("span").length;c++){
      if (nombrecillo==document.getElementsByTagName("span")[c].innerHTML){
        document.getElementById("d").style.display="block";
        document.getElementById("d").innerHTML="No se pueden repetir nombres";
        return false
      } 
      else{ 
    document.getElementById("d").style.display="none";
    newButton.parentElement.firstChild.innerText = nombrecillo;
      }
    }   
  });

  let newButton2=document.createElement("button");
  newLi.appendChild(newButton2); //Añadir Button1 a LI
  newContent=document.createTextNode("remove");
  newButton2.appendChild(newContent);

  newButton2.addEventListener("click", function(){
    let res=window.confirm("seguro de querer borrar?");
    console.log(res)
    if (res=true){
      newLi.remove();

  }
  });

// añade el elemento creado y su contenido al DOM 
  let currentLi=document.getElementById("li");
  document.getElementById("invitedList").insertBefore(newLi, currentLi);
  document.getElementById("registrar").reset();
}

document.getElementById("confirmados").addEventListener("change", function(){
  let lista=document.getElementById("invitedList");
  let confirmados=lista.getElementsByClassName("not-responded");
  if (this.checked){
    for (let i=0; confirmados;i++){
      try {
        confirmados.item(i).setAttribute("style","display:none;");
      } catch (error) {
        break
      }
      
    }
  }
  else {
    for (let i=0; confirmados;i++){
      try {
        confirmados.item(i).setAttribute("style","display:block;");
      } catch (error) {
        break
      }
      
    }
    }
  }
)


