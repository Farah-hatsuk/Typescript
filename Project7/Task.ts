
interface Task {
    id: number;
    title: string;
    states: string;
    startDate: string;
    endDate: string;
}

var task: Task[] = []
var form: any = document.getElementById("task");

function saveTask() {
    // Ensure `form` is a valid reference to your form element
    var form = document.querySelector('form'); // or use another way to reference your form

    if (!form) {
        console.error("Form element not found.");
        return;
    }

    var data: any = new FormData(form);

    // Check if required fields exist in the form data
    let task: Task = {
        id: Date.now(),
        title: data.get("title") || "",  // Default to empty string if no value
        states: data.get("states") || "",
        startDate: data.get("startDate") || "",
        endDate: data.get("endDate") || ""
    };

    // Check if `allTasks` is null or an empty string before parsing
    var allTasks: any = localStorage.getItem("Tasks");
    var allTasks2 = allTasks ? JSON.parse(allTasks) : []; // Default to an empty array if null or empty

    allTasks2.push(task);
    localStorage.setItem("Tasks", JSON.stringify(allTasks2));

    view();  // Assuming `view()` function is defined elsewhere to update the UI
}


function view() {
    var T: any = localStorage.getItem("Tasks")
    var Tasks: any = JSON.parse(T)
    var taskList: any = document.getElementById("viewTask")
    taskList.innerHTML = "";


    Tasks.forEach(Task => {
        const listItem = document.createElement("tr");

        listItem.innerHTML = `<td>${Task.title}</td> <td>${Task.states}</td>  <td>${Task.startDate}</td>  <td>${Task.endDate}</td>`;

        taskList?.appendChild(listItem);

    })
}

window.onload = () => {
    var task = localStorage.getItem("Tasks")
    if (task) {
        view()
    }
}
