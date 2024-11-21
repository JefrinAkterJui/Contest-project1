const inputBox=document.getElementById('input-box');
const listComtainer=document.getElementById('list-container');

function addtask(){
    if(inputBox.value===''){
        alert('Please write your text')
    }
    else{
        let li =document.createElement('li');
        li.innerHTML=inputBox.value ;
        listComtainer.appendChild(li);

        let span=document.createElement('span')
        span.innerHTML= '\u00d7'
        li.appendChild(span)
    }
    inputBox.value='';
    saveData()
}
listComtainer.addEventListener("click", function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false)
// ------------storage-----------
function saveData(){
    localStorage.setItem("data", listComtainer.innerHTML);
}
function showlist(){
    listComtainer.innerHTML=localStorage.getItem("data");
}
showlist()