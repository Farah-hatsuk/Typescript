var task = [];
var form = document.getElementById("task");
function saveTask() {
    // Ensure `form` is a valid reference to your form element
    var form = document.querySelector('form'); // or use another way to reference your form
    if (!form) {
        console.error("Form element not found.");
        return;
    }
    var data = new FormData(form);
    // Check if required fields exist in the form data
    var task = {
        id: Date.now(),
        title: data.get("title") || "", // Default to empty string if no value
        states: data.get("states") || "",
        startDate: data.get("startDate") || "",
        endDate: data.get("endDate") || ""
    };
    // Check if `allTasks` is null or an empty string before parsing
    var allTasks = localStorage.getItem("Tasks");
    var allTasks2 = allTasks ? JSON.parse(allTasks) : []; // Default to an empty array if null or empty
    allTasks2.push(task);
    localStorage.setItem("Tasks", JSON.stringify(allTasks2));
    view(); // Assuming `view()` function is defined elsewhere to update the UI
}
function view() {
    var T = localStorage.getItem("Tasks");
    var Tasks = JSON.parse(T);
    var taskList = document.getElementById("viewTask");
    taskList.innerHTML = "";
    Tasks.forEach(function (Task) {
        var listItem = document.createElement("tr");
        listItem.innerHTML = "<td>".concat(Task.title, "</td> <td>").concat(Task.states, "</td>  <td>").concat(Task.startDate, "</td>  <td>").concat(Task.endDate, "</td>");
        taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(listItem);
    });
}
window.onload = function () {
    var task = localStorage.getItem("Tasks");
    if (task) {
        view();
    }
};
