namespace vektor {

  export interface Dynamic<Attrs> {
    element: Element<SVGElement, Attrs>;
    defs: Dynamic.Defined<Attrs>;
    progress: (now: number) => number | undefined;
  }
  export namespace Dynamic {

    export interface Definition<A extends string> extends Setter {
      set(element: Element<SVGElement, any>, attr: A): void;
    }

    export type Defined<Attrs> = {
      [A in keyof Attrs]?: Dynamic.Definition<A>;
    };

    export class MousePosition<A extends string> extends Attribute.Point implements Definition<A> {
      private xAttr: string;
      private yAttr: string;
      constructor(target: Document | HTMLElement | SVGElement | Paper = document) {
        super(0, 0);
        if (target instanceof Paper) {
          target = target.root;
        }
        target.addEventListener("mousemove", (e: MouseEvent) => {
          this.x = e.offsetX;
          this.y = e.offsetY;
        });
      }
    }
  }

}
