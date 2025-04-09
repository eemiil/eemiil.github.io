import {createElement} from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';


function createButtonDeleteComponentTemplate() {
    return (
        `<button class="clear-btn">
            <span>Очистить</span>
        </button>`
      );  
}


export default class ButtonDeleteComponent extends AbstractComponent {

  get template() {
    return createButtonDeleteComponentTemplate();
  }

}
