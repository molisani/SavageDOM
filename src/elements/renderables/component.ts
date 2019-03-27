import { Subscription } from "rxjs";
import { AnimationTiming } from "../../animation/timing";
import { Transform, TransformList } from "../../attributes/transform";
import { XMLNS } from "../../constants";
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
  constructor(origin?: { x: number, y: number }) {
    super(Component.context, Component.context.window.document.createElementNS(XMLNS.SVG, "g"));
    const transforms = [Transform.translate(), Transform.rotate(0), Transform.scale()];
    if (origin) {
      transforms.push(Transform.translate(-origin.x, -origin.y));
    }
    this.setAttribute("transform", new TransformList(transforms));
  }
  public moveTo(x: number, y: number) {
    this.setAttribute("transform.translate", Transform.translate(x, y));
  }
  public async moveTo_anim(timing: AnimationTiming, x: number, y: number) {
    return this.animateAttribute("transform.translate", Transform.translate(x, y), timing);
  }
  public rotate(angle: number) {
    this.setAttribute("transform.rotate", Transform.rotate(angle));
  }
  public async rotate_anim(timing: AnimationTiming, angle: number) {
    return this.animateAttribute("transform.rotate", Transform.rotate(angle), timing);
  }
  public scale(x: number, y: number = x) {
    this.setAttribute("transform.scale", Transform.scale(x, y));
  }
  public async scale_anim(timing: AnimationTiming, x: number, y: number = x) {
    return this.animateAttribute("transform.scale", Transform.scale(x, y), timing);
  }
  public show() {
    this.setAttribute("opacity", 1);
  }
  public async show_anim(timing: AnimationTiming) {
    return this.animateAttribute("opacity", 1, timing);
  }
  public hide() {
    this.setAttribute("opacity", 0);
  }
  public async hide_anim(timing: AnimationTiming) {
    return this.animateAttribute("opacity", 0, timing);
  }
}
