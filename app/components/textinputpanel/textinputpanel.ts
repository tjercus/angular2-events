import {Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

import {EventManagerService} from '../../utils/eventbus/EventManagerService';

@Component({
  selector: 'textinput-panel'
})
@View({
  templateUrl: './components/textinputpanel/textinputpanel.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class TextInputPanel {

  private textvalue:string;

  constructor(public eventManager:EventManagerService) {
    eventManager.publish("componentConstructed", "textinputpanel");


    setTimeout(() => {
      console.log(this.eventManager.toString());
    }, 5000);
  }

  valueChanged(): void {
    console.log("TextInputPanel.valueChanged: " + this.textvalue);
    this.eventManager.publish("textInputValueChanged", this.textvalue);
  }
}

