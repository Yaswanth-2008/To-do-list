const Add_task = document.querySelector('.TODO_btn');
const to_do_list = document.getElementById("task_ul");
let task_input_txt = document.getElementById('Add_task');
let Div_snippet;
let Function_element
console.log(`Working...`);
function AddClicked(){
    let task_label = task_input_txt.value;
    Div_snippet = `
    <li>${task_label} <span class="clickable" onclick="DeleteClicked(this)" ><i class="fa-solid fa-trash"></i></span></li>
`;
    to_do_list.insertAdjacentHTML('beforeend', Div_snippet );
}
function DeleteClicked(element){
    Function_element = element;
    Function_element.parentElement.remove();
}
