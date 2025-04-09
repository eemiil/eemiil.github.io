import {createElement} from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';


function createTaskListComponentTemplate(status, title) {
  return `
    <section class="${status}Title">
      <h3>${title}</h3>
      <ul class="task-list__items"></ul>
    </section>
  `;
}
export default class TaskListComponent extends AbstractComponent {
  constructor({status, title}) {
    super();
    this.status = status;
    this.title = title;
  }
  

  get template() {
    return createTaskListComponentTemplate(this.status, this.title);
  }

}
