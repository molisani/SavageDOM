import { Subscription } from "rxjs";
import { EasingFunction, linear } from "../../animation/easing";
import { Rotate_Transform } from "../../attributes/transforms/rotate";
import { Scale_Transform } from "../../attributes/transforms/scale";
import { Translate_Transform } from "../../attributes/transforms/translate";
import { Context } from "../../context";
import { Group } from "./group";

export class Component extends Group {
  public static get context(): Context {
    if (!Component._CONTEXT) {
      throw new ReferenceError("No static Component context found. Set one manually, or subscribe to the latest created context.");
    }
    return Component._CONTEXT;
  }
  public static set context(ctx: Context) {
    if (Component._CONTEXT_SUBSCRIPTION) {
      Component._CONTEXT_SUBSCRIPTION.unsubscribe();
    }
    Component._CONTEXT = ctx;
  }
  public static subscribeLatestContext() {
    if (Component._CONTEXT_SUBSCRIPTION) {
      return;
    }
    Component._CONTEXT_SUBSCRIPTION = Context.contexts.subscribe((context) => {
      Component._CONTEXT = context;
    });
  }
  private static _CONTEXT_SUBSCRIPTION?: Subscription;
  private static _CONTEXT?: Context;
  private _hidden = false;
  constructor(origin?: { x: number, y: number }, protected easing: EasingFunction = linear) {
    super(Component.context);
    const transforms = [new Translate_Transform(), new Rotate_Transform(0), new Scale_Transform()];
    if (origin) {
      transforms.push(new Translate_Transform(-origin.x, -origin.y));
    }
    this.setAttribute("transform", transforms);
  }
  public moveTo(x: number, y: number, duration: number = 0) {
    if (duration === 0) {
      this.setAttribute("transform.translate", new Translate_Transform(x, y));
    } else {
      this.animateAttribute("transform.translate", new Translate_Transform(x, y), duration, this.easing);
    }
  }
  public rotate(angle: number, duration: number = 0) {
    if (duration === 0) {
      this.setAttribute("transform.rotate", new Rotate_Transform(angle));
    } else {
      this.animateAttribute("transform.rotate", new Rotate_Transform(angle), duration, this.easing);
    }
  }
  public scale(x: number, y: number = x, duration: number = 0) {
    if (duration === 0) {
      this.setAttribute("transform.scale", new Scale_Transform(x, y));
    } else {
      this.animateAttribute("transform.scale", new Scale_Transform(x, y), duration, this.easing);
    }
  }
  public show() {
    if (!this._hidden) {
      this.setAttribute("opacity", 1);
      this._hidden = false;
    }
  }
  public hide() {
    if (this._hidden) {
      this.setAttribute("opacity", 0);
      this._hidden = true;
    }
  }
}
