import {createElement} from '../framework/render.js';


function createTaskListComponentTemplate(status, title) {
    return (
        `<div class="${status}Title">
          <h3>${title}</h3>
          <ul>
          
          </ul>
        </div>`
      );
}

export default class TaskListComponent {
  constructor({status, title}) {
    this.status = status;
    this.title = title;
  }
  

  getTemplate() {
    return createTaskListComponentTemplate(this.status, this.title);
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}
