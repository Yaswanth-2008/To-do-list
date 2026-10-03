const Add_task = document.querySelector('.TODO_btn');
const to_do_list = document.getElementById("task_ul");
let task_input_txt = document.getElementById('Add_task');
let Div_snippet;
let Function_element
console.log(`Working...`);
function AddClicked(){
    let task_label = task_input_txt.value;
    if (task_label){
        Div_snippet = `
        <li class='task_li'>${task_label} <span class="trash_can clickable" onclick="DeleteClicked(this)" ><i class="fa-solid fa-trash"></i></span></li>
    `;
        to_do_list.insertAdjacentHTML('beforeend', Div_snippet );
    }
}
function DeleteClicked(element){
    Function_element = element;
    Function_element.parentElement.remove();
}
