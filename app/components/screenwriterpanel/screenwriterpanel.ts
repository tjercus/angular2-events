import {Component, View} from 'angular2/angular2';
import {EventManagerService} from '../../utils/eventbus/EventManagerService';

@Component({
  selector: 'screenwriter-panel'
})
@View({
  templateUrl: './components/screenwriterpanel/screenwriterpanel.html'
})
export class ScreenWriterPanel {

  private payload: string;

  constructor(public eventManager: EventManagerService) {
    eventManager.publish("componentConstructed", "screenwriterpanel");

    this.eventManager.subscribe("textInputValueChanged", (event:string) => {
      console.log("ScreenWriterPanel caught event, textInputValueChanged: " + event);
      this.payload = event;
    });
  }

}
