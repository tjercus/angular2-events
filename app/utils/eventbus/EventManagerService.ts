/**
 * Created by tvalentijn on 7/2/15.
 * Based on: http://csharperimage.jeremylikness.com/2012/11/building-javascript-event-aggregator.html
 */

import {Message} from "./Message";
import {MessageImpl} from "./MessageImpl";
//import {Subscription} from "./Subscription";

export class EventManagerService {

  private messages: Message[] = [];

  constructor() {
    console.log("EventManagerService.constructor");
  }

  subscribe(message:string, callback:(payload?:any) => void): number {
    console.log("EventManagerService.subscribe for message [" + message + "]");
    let msg:Message;

    // experiment with wildcards
    //if (message === "*") {
    //  let index = 0;
    //  for (var key in this.messages) {
    //    var msgObj = this.messages[key];
    //
    //    // TODO first iterate over all messages and it's subscriptions to erase all existing ANY callbacks
    //    // find them by using the message.subscription.to field
    //
    //    msgObj.subscribe(callback);
    //    index++;
    //    console.log("EventManagerService.subscribe to ANY event ["+message+"] " + key + ", " + index);
    //  }
    //  return index; // TODO return value makes no sense
    //} else {
      msg = this.messages[message] || <Message>(this.messages[message] = new MessageImpl(message));
      return msg.subscribe(callback);
    //}
  }

  unSubscribe(message:string, token:number) {
    if (this.messages[message]) {
      (<Message>(this.messages[message])).unSubscribe(token);
    }
  }

  publish(message:string, payload?:any) {
    //console.log("EventManagerService.publish: " +message + ", with: " + payload);
    if (this.messages[message]) {
      (<Message>(this.messages[message])).notify(payload);
    }
  }

  /**
   * Iterates over the entire eventsystem and returns all as a string
   *
   * @returns {string[]}
   */
  toString() {
    let buffer:string[] = [];
    for (var key in this.messages) {
      var msgObj = this.messages[key];
      buffer.push(msgObj.toString());
    }
    return buffer.join("\n");
  }
}
