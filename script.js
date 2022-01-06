const AddBtn =document.querySelector(".Add");
const ClearBtn =document.querySelector(".Clear");

const AddTaskInput=document.querySelector(".AddtaskInput")
const SearchTaskInput=document.querySelector(".SearchtaskInput");

const tasks =document.querySelector(".tasks");


const  Addtask =()=>{

    let AddTaskInputContent =AddTaskInput.value;

    // <div class="task  border d-flex justify-content-between ">
                        
    //         <p class="TaskContent p-2 " >dsdsdsdsd</p> 
    //         <span class="bg-dark p-3 " >
    //             <a href="" class=" text-white text-decoration-none"> X</a>
    //         </span>

    // </div>

    if(AddTaskInputContent==""){

        alert("please add a task")
        return;
    }
   const task= document.createElement("div")
   task.classList.add("task","border","d-flex","justify-content-between","mb-3");

   const paragraph=document.createElement("p");
   paragraph.classList.add("TaskContent","p-2");
   paragraph.textContent=AddTaskInputContent;

   task.appendChild(paragraph);

   const span =document.createElement("span");
   span.classList.add("bg-dark","p-3")
   task.appendChild(span);

   const a =document.createElement("a");
   a.classList.add("text-decoration-none","text-white")
   a.textContent="X";
   a.href="#"
   span.appendChild(a);

   tasks.appendChild(task);
   AddTaskInputContent="";

   a.addEventListener("click",function(){


    tasks.removeChild(task);

   })

}

AddBtn.addEventListener("click",Addtask);

ClearBtn.addEventListener("click",function(){

    tasks.textContent="";
})
