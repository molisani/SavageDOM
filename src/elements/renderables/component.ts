import { Subscription } from "rxjs";
import { EasingFunction, linear } from "../../animation/easing";
import { Transform, TransformList } from "../../attributes/transform";
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
    const transforms = [Transform.translate(), Transform.rotate(0), Transform.scale()];
    if (origin) {
      transforms.push(Transform.translate(-origin.x, -origin.y));
    }
    this.setAttribute("transform", new TransformList(transforms));
  }
  public moveTo(x: number, y: number, duration: number = 0) {
    if (duration === 0) {
      this.setAttribute("transform.translate", Transform.translate(x, y));
    } else {
      this.animateAttribute("transform.translate", Transform.translate(x, y), duration, this.easing);
    }
  }
  public rotate(angle: number, duration: number = 0) {
    if (duration === 0) {
      this.setAttribute("transform.rotate", Transform.rotate(angle));
    } else {
      this.animateAttribute("transform.rotate", Transform.rotate(angle), duration, this.easing);
    }
  }
  public scale(x: number, y: number = x, duration: number = 0) {
    if (duration === 0) {
      this.setAttribute("transform.scale", Transform.scale(x, y));
    } else {
      this.animateAttribute("transform.scale", Transform.scale(x, y), duration, this.easing);
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
