import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskBoardComponent from './view/task-board-component.js';
import TaskListComponent from './view/task-list-component.js';
import TaskComponent from './view/task-component.js'
import {render, RenderPosition} from './framework/render.js';


const bodyContainer = document.querySelector('.board-app');


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
const taskBoard = new TaskBoardComponent()
render(taskBoard, bodyContainer, RenderPosition.BEFOREEND);

for (let i = 0; i < 4; i++) {
    const taskListComponent = new TaskListComponent();
    render(taskListComponent, taskBoard.getElement(), RenderPosition.BEFOREEND);
    const listContainer = taskListComponent.getElement().querySelector('ul');
    for (let j = 0; j < 4; j++) {
        render(new TaskComponent(), listContainer, RenderPosition.BEFOREEND);
    }
}
