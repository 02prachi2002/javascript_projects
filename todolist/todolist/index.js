let onClickHandler = () =>{
    console.log(inputElement.value);
    let paraElement = document.createElement('p');
    let deletebtnpara = document.createElement('button');
    deletebtnpara.textContent = "delete item";
    paraElement.textContent=inputElement.value;
    paraElement.append(deletebtnpara);
    todoList.append(paraElement);
    inputElement.value = " ";

    deletebtnpara.addEventListener('click',()=>{
      paraElement.remove();
    })
}

let inputElement = document.getElementById('inputEle');
let btnclickme = document.querySelector('.btn');
let todoList = document.querySelector('.todoListClass');

btnclickme.addEventListener('click',()=>{
    onClickHandler();
});
