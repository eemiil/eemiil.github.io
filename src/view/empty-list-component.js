import { AbstractComponent } from "../framework/view/abstract-component.js";

function createEmptyListComponentTemplate() {
    return (
        `<li class="empty-task">
            <h1>Список задач</h1>
        </li>`
      );
}


export default class EmptyListComponent extends AbstractComponent{  
    get template() {
      return createEmptyListComponentTemplate();
    }
  }