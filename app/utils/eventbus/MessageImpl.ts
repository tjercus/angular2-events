/**
 * Created by tvalentijn on 7/2/15.
 */

import {Message} from "./Message";
import {Subscription} from "./Subscription";

export class MessageImpl implements Message {

  private subscriptions:Subscription[] = [];
  private _nextId:number = 0;

  constructor(public message:string) {
    //console.log("MessageImpl.constructor for [" + message + "]");
  }

  public subscribe(callback:(payload?:any) => void):number {
    //console.log("MessageImpl.subscribe for [" + this.message + "]");
    var subscription = new Subscription(this._nextId++, this.message, callback);
    this.subscriptions[subscription.id] = subscription;
    return subscription.id;
  }

  public unSubscribe(id:number) {
    this.subscriptions[id] = undefined;
  }

  public notify(payload?:any):void {
    let index:number, len:number;
    for (index = 0, len = this.subscriptions.length; index < len; index++) {
      if (this.subscriptions[index]) {
        //console.log("MessageImpl.notify [" + this.message + "] subscription nr " + index + ", with callback: " + this.subscriptions[index].callback);
        this.subscriptions[index].callback(payload);
      }
    }
  }

  /**
   * Iterates over the entire eventsystem and returns all as a string
   *
   * @returns {string[]}
   */
  toString() {
    let buffer:string[] = [];
    buffer.push("message: " + this.message);
    for (var key in this.subscriptions) {
      var subscriptionObj = this.subscriptions[key];
      buffer.push("subscription: " + key + ", to: " + subscriptionObj.to + ", callback: " + subscriptionObj.callback);
    }
    return buffer.join("\n");
  }
}
