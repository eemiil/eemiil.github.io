import {createElement} from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';


function createFormAddTaskComponentTemplate() {
    return (
        `<section class="task-form">
            <h2>Новая задача</h2>
            <div class="input-group">
                <input type="text" placeholder="Название задачи...">
                <button>+ Добавить</button>
            </div>
        </section>`
      );
}


export default class FormAddTaskComponent extends AbstractComponent {
  get template() {
    return createFormAddTaskComponentTemplate();
  }

}
