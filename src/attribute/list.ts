namespace vektor.Attribute {

  export class List<T extends Attribute<T>> extends Array<T> implements Attribute<List<T>> {
    toString(): string {
      return this.join("\t");
    }
    parse(css: string | null): List<T> {
      if (css !== null) {
        const list = new List<T>();
        css.split("\t").forEach((s, i) => {
          list.push(this[i].parse(s));
        });
        return list;
      } else {
        return new List<T>();
      }
    }
    get(element: Element<SVGElement, any>, attr: string): List<T> {
      return this.parse(element.getAttribute(attr));
    }
    set(element: Element<SVGElement, any>, attr: string, override?: List<T>): void {
      if (override !== undefined) {
        element.setAttribute(attr, override.toString());
      } else {
        element.setAttribute(attr, this.toString());
      }
    }
    interpolate(from: List<T>, t: number): List<T> {
      const list = new List<T>();
      for (let i = 0; i !== this.length; ++i) {
        list.push(this[i].interpolate(from[i], t));
      }
      return list;
    }
  }

}
