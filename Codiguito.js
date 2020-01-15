document.body.onload = addElement;

function borrar(elemento){
    {
        var id=elemento.parentNode.getAttribute("li");
        node=document.getElementById(li);
        node.parentNode.removeChild(node);
    }
}

function editar(){

}


document.getElementById("registrar").addEventListener("click",añadir());

function añadir(name){

event.preventDefault();

  let newLi=document.createElement("li");

  let newSpan=document.createElement("span");
  newLi.appendChild(newSpan);
  let newContent = document.createTextNode(document.getElementById("nombreAñadir").value); 
  newSpan.appendChild(newContent); //añade texto al elemento creado. 

  let newLabel=document.createElement("label");
  newLi.appendChild(newLabel); //añadir Labbel a Li
  newContent=document.createTextNode("Confirmed");

  newLabel.appendChild(newContent); //Añadir contenido a Labbel
  newContent=document.createElement("input");
  newLabel.appendChild(newContent); //Añadir Input a Li
  newContent.type="checkbox";
  newLabel.appendChild(newContent);

  let newButton=document.createElement("button");
  newLi.appendChild(newButton); //Añadir Button a Li
  newContent=document.createTextNode("edit");
  newButton.appendChild(newContent);

  let newButton2=document.createElement("button");
  newLi.appendChild(newButton2); //Añadir Button1 a LI
  newContent=document.createTextNode("remove");
  newButton2.appendChild(newContent);

// añade el elemento creado y su contenido al DOM 
  let currentLi=document.getElementById("li");
  document.getElementById("invitedList").insertBefore(newLi, currentLi);


  document.getElementById("registrar").reset();
}