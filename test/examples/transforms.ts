
window["buildExample"] = window["buildExample"] || {};
window["buildExample"]["transforms"] = (root) => {
  const width = 250;
  const gap = 15;
  const scale = 0.75;

  const clear = new SavageDOM.Attribute.Color("rgb", 0, 0, 0, 0);
  const red = new SavageDOM.Attribute.Color("#FF0000");
  const gray = percent => new SavageDOM.Attribute.Color("rgb", percent * 255, percent * 255, percent * 255);

  const paper = new SavageDOM.Context(root);

  const transforms: SavageDOM.Attribute.Transform[] = [
    new SavageDOM.Attribute.Transform.UniformScale(0.8),
    new SavageDOM.Attribute.Transform.Scale(0.8, 1.2),
    new SavageDOM.Attribute.Transform.Rotate(15),
    new SavageDOM.Attribute.Transform.SkewX(15),
  ];

  const sqrtLength = Math.ceil(Math.sqrt(transforms.length));
  const length = (width - (2 + sqrtLength - 1) * gap) / sqrtLength;
  const side = (scale * length);

  const buildGroup = (g: number, t: string): SavageDOM.Elements.Renderable.Group => {
    const c = gray(g);
    const box = new SavageDOM.Elements.Renderable.Shape.Rect(paper, {
      "x": 0 - side / 2, "y": 0 - side / 2, "width": side, "height": side,
      "fill": clear, "stroke": c, "stroke-width": 2,
    });
    const text = new SavageDOM.Elements.Renderable.Text(paper, {
      "x": 0, "y": 0, "fill": c,
      "font-size": 20, "font-family": "Courier New", "text-anchor": "middle",
    });
    text.addSpan(new SavageDOM.Attribute.TextContent(t));
    return paper.group([box, text]);
  };

  transforms.forEach((tf, i: number) => {
    const x = gap + (length / 2) + (gap + length) * (i % sqrtLength);
    const y = gap + (length / 2) + (gap + length) * Math.floor(i / sqrtLength);

    const type = tf.type;

    const origin = paper.circle(0, 0, 2);
    origin.setAttribute("fill", red);

    const start = buildGroup(0.5, type);

    const mid = buildGroup(0.25, type);
    const midTF = tf.interpolate(tf.parse(null), 0.5);
    mid.setAttribute(`transform.${type}` as any, midTF);

    const end = buildGroup(0, type);
    const endTF = tf;
    end.setAttribute(`transform.${type}` as any, endTF);

    const g = paper.group([origin, start, mid, end]);
    g.setAttribute("transform.translate", new SavageDOM.Attribute.Transform.Translate(x, y));
  });

};
