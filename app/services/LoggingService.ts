import {EventManagerService} from "../utils/eventbus/EventManagerService";
import {Component} from 'angular2/angular2';

@Component({
  bindings: [EventManagerService]
})
export class LoggingService {

  constructor(public eventManager:EventManagerService) {
    console.log("LoggingService.constructor");

    // Make sure the ANY handler is subscribed after all others so its callback is attached to all events
    // Note that this delay causes the ANY handler to NOT catch the constructor events thrown on app init
    setTimeout(() => {
      this.eventManager.subscribe("componentConstructed", (event:string) => {
        this.log("LoggingService caught a componentConstructed event, payload: " + event);
      });
      this.eventManager.subscribe("textInputValueChanged", (event:string) => {
        this.log("LoggingService caught a textInputValueChanged event, payload: " + event);
      });
    }, 3000);
  }

  private log(msg) {
    console.log("%c" + msg, "background: yellow;");
  }
}
