var inputElements, button,taskNames, taskBlock;

inputElements = document.querySelector('#taskInput');   
button = document.querySelector('#addButton');
taskNames = document.querySelector('.taskname');
taskBlock = document.querySelector('.task');

class UI{
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.remove();
            
        }

    }
}

function execute(){

    if(inputElements.value !== ''){
        document.getElementById('tasks').innerHTML += `
            <div class="eachTask d-flex justify-content-center text-center " style="flex-direction: row;">
                <div class="task bg-white p-2 my-2 w-50 rounded-1">
                    <span class="taskname fw-bold">${inputElements.value}</span>
                </div>
                <button class="delete my-2 btn btn-info btn-sm w-5 h-2"><i class="fas fa-trash-alt"></i></button>
            </div>
            `     
    }
    inputElements.value = '';

    document.querySelector('#tasks').addEventListener('click', (e) =>{
        UI.deleteBook(e.target);

    });
/*
    deleteButtons.forEach (e => {
        e.addEventListener('click', () => {
            var verify = prompt(`Are you sure you want to delete ${this.document.querySelector(".taskname").textContent}`);
         if(verify.toLowerCase() == 'yes' || verify.toLowerCase == 'sure' || verify.toLowerCase() == 'ya'){
            this.document.querySelector('.task').remove();
            e.remove();
         }
         else{
            alert('Please enter a task');
         }
        });
    });*/

}

inputElements.onkeyup = (e) => {
    if(e.keyCode === 13) {
        execute();
    }
}

button.onclick = () => {
    execute();
}