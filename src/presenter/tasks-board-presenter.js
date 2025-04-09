// tasks-board-presenter.js
import TaskComponent from '../view/task-component.js';
import TaskBoardComponent from '../view/task-board-component.js';
import { render, RenderPosition } from '../framework/render.js';
import TaskListComponent from '../view/task-list-component.js';
import { Status, StatusLabel } from '../const.js';
import ButtonDeleteComponent from '../view/button-delete-component.js';
import EmptyListComponent from '../view/empty-list-component.js';

export default class TasksBoardPresenter {
  #boardContainer = null;
  #tasksModel = null;
  #boardTasks = [];
  
  tasksBoardComponent = new TaskBoardComponent();

  constructor({ boardContainer, tasksModel }) {
    this.#boardContainer = boardContainer;
    this.#tasksModel = tasksModel;
  }

  #renderEmptyList(container, text) {
    render(new EmptyListComponent(text), container);
  }

  #renderTask(task, container) {
    const taskComponent = new TaskComponent(task);
    render(taskComponent, container);
  }

  #renderTasksList(status) {
    const tasks = this.#boardTasks.filter(task => task.status === status);
    const taskListComponent = new TaskListComponent({
      status: status,
      title: StatusLabel[status],
    });

    render(taskListComponent, this.tasksBoardComponent.getElement());
    
    const listContainer = taskListComponent.getElement().querySelector('.task-list__items');
    
    if (tasks.length === 0) {
      this.#renderEmptyList(listContainer, 'Бэклог\nПеретащите карточку');
    } else {
      tasks.forEach(task => this.#renderTask(task, listContainer));
    }

    return taskListComponent;
  }

  #renderBasketList() {
    const basketListComponent = this.#renderTasksList(Status.BASKET);
    render(
      new ButtonDeleteComponent(),
      basketListComponent.getElement(),
      RenderPosition.BEFOREEND
    );
  }

  #renderBoard() {
    render(this.tasksBoardComponent, this.#boardContainer);
    
    Object.values(Status)
      .filter(status => status !== Status.BASKET)
      .forEach(status => this.#renderTasksList(status));

    this.#renderBasketList();
  }

  init() {
    this.#boardTasks = [...this.#tasksModel.tasks];
    
    if (!this.#boardTasks.length) {
      this.#renderEmptyList(this.#boardContainer, 'Нет задач');
      return;
    }
    
    this.#renderBoard();
  }
}