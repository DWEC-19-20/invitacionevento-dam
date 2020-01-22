document.body.onload = addElement;

function borrar(elemento){
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


document.getElementById("registrar").addEventListener("click",añadir());

function añadir(name){

event.preventDefault();

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
  newLabel.appendChild(newContent);
  
  newContent.addEventListener('change',function(){
    if (this.checked){
      newLabel.parentElement.className="responded"
    }
    else {
      newLabel.parentElement.className="not-responded"
    }
    });
    

  let newButton=document.createElement("button");
  newLi.appendChild(newButton); //Añadir Button a Li
  newContent=document.createTextNode("edit");
  newButton.appendChild(newContent);

  newButton.addEventListener("click",function(){    
    let nom=(document.getElementById("nombreAñadir").value);
    //var nombre=document.getElementById("nombreAÑadir").value;
    newButton.parentElement.firstChild.innerText = nom;
  });

  let newButton2=document.createElement("button");
  newLi.appendChild(newButton2); //Añadir Button1 a LI
  newContent=document.createTextNode("remove");
  newButton2.appendChild(newContent);

  newButton2.addEventListener("click", function(){
    window.confirm("seguro de querer borrar?");
    if (window.confirm=true){
      newLi.remove();
  }
  });

// añade el elemento creado y su contenido al DOM 
  let currentLi=document.getElementById("li");
  document.getElementById("invitedList").insertBefore(newLi, currentLi);

  document.getElementById("registrar").reset();

  
  
}

