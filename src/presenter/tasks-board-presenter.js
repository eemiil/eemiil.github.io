import TaskComponent from '../view/task-component.js';
import TaskBoardComponent from '../view/task-board-component.js';
import {render, RenderPosition} from '../framework/render.js';
import TaskListComponent from '../view/task-list-component.js';
import { Status, StatusLabel } from '../const.js';
import ButtonDeleteComponent from '../view/button-delete-component.js';

export default class TasksBoardPresenter {
    tasksBoardComponent = new TaskBoardComponent();
    
    #boardContainer = null;
    #tasksModel = null;
    
    
    #boardTasks = [];
    
    constructor({boardContainer, tasksModel}) {
        this.#boardContainer = boardContainer;
        this.#tasksModel = tasksModel;
    }
    
    

    init() {
        this.#boardTasks = [...this.#tasksModel.getTasks()];
        
        render(this.tasksBoardComponent, this.#boardContainer);
        for (const status of Object.values(Status)) {
            const taskListComponent = new TaskListComponent({ 
                status: status, 
                title: StatusLabel[status] 
              });
            render(taskListComponent, this.tasksBoardComponent.getElement(), RenderPosition.BEFOREEND);
            this.#boardTasks.forEach(task => {
                if (task.status === taskListComponent.status) {
                  const taskComponent = new TaskComponent(task.title);
                  render(taskComponent, taskListComponent.getElement().querySelector('ul'), RenderPosition.BEFOREEND);
                }
              });        
            if (status === 'basket') {
                render(new ButtonDeleteComponent(), taskListComponent.getElement(), RenderPosition.BEFOREEND);
            }
        }
    }
    
}
