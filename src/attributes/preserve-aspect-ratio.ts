export class PreserveAspectRatio {
  constructor();
  constructor(x: "Min" | "Mid" | "Max", y: "Min" | "Mid" | "Max");
  constructor(x: "Min" | "Mid" | "Max", y: "Min" | "Mid" | "Max", meetOrSlice: "meet" | "slice");
  constructor(public x?: "Min" | "Mid" | "Max", public y?: "Min" | "Mid" | "Max", public meetOrSlice?: "meet" | "slice") {}
  public toString(): string {
    if (this.x !== undefined && this.y !== undefined) {
      let str = `x${this.x}Y${this.y}`;
      if (this.meetOrSlice !== undefined) {
        str += " " + this.meetOrSlice;
      }
      return str;
    } else {
      return "none";
    }
  }
}
