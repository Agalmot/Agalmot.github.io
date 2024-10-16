const node_for_click = ("for_click")

function find_edit(){
    const item  = document.getElementById('new')
    console.log(item.innerText)
    item.innerHTML="<b>новый фрагмент</b>"
}

node_for_click.addEventListener("click",find_edit)
