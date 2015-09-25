import {Component, View, bootstrap} from 'angular2/angular2';

import {ScreenWriterPanel} from './components/screenwriterpanel/screenwriterpanel';
import {TextInputPanel} from './components/textinputpanel/textinputpanel';
import {LoggingService} from "./services/LoggingService";
import {EventManagerService} from "./utils/eventbus/EventManagerService";

@Component({
  selector: 'app',
  viewBindings: [EventManagerService, LoggingService] // add only non-view datacomponents here
})

@View({
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  directives: [ScreenWriterPanel, TextInputPanel]
})
class App {
  // param is required here because it has constructor dependencies on other service
  constructor(public loggingService:LoggingService) {
    //
  }
}

// add only subviewcomponents here
bootstrap(App, [ScreenWriterPanel, TextInputPanel]).then(succes => console.log(succes), error => console.log(error));

document.createElement('screenwriter-panel');
document.createElement('textinput-panel');
