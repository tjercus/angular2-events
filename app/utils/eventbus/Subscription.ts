/**
 * Created by tvalentijn on 7/2/15.
 */

export class Subscription {

  /**
   * Constructor
   *
   * @param id is an integer
   * @param to is the message that is subscribed to
   * @param callback is the function that gets called when the message is sent
   */
  constructor (public id: number, public to: string, public callback: (payload?: any) => void) {
    // ~
  }
}
