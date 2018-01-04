
window["buildExample"] = window["buildExample"] || {};
window["buildExample"]["transforms"] = (root) => {
  const width = 250;
  const gap = 15;
  const scale = 0.75;

  const clear = new SavageDOM.Attributes.Color("rgb", 0, 0, 0, 0);
  const red = new SavageDOM.Attributes.Color("#FF0000");
  const gray = percent => new SavageDOM.Attributes.Color("rgb", percent * 255, percent * 255, percent * 255);

  const context = new SavageDOM.Context(root);

  const transforms: SavageDOM.Attributes.Transform[] = [
    new SavageDOM.Attributes.Transforms.UniformScale(0.8),
    new SavageDOM.Attributes.Transforms.Scale(0.8, 1.2),
    new SavageDOM.Attributes.Transforms.Rotate(15),
    new SavageDOM.Attributes.Transforms.SkewX(15),
  ];

  const sqrtLength = Math.ceil(Math.sqrt(transforms.length));
  const length = (width - (2 + sqrtLength - 1) * gap) / sqrtLength;
  const side = (scale * length);

  const buildGroup = (g: number, t: string): SavageDOM.Elements.Renderables.Group => {
    const c = gray(g);
    const box = new SavageDOM.Elements.Renderables.Shapes.Rect(context, {
      x: 0 - side / 2, y: 0 - side / 2, width: side, height: side,
      fill: clear, stroke: c, "stroke-width": 2,
    });
    const text = new SavageDOM.Elements.Renderables.Text(context, {
      x: 0, y: 0, fill: c,
      "font-size": 20, "font-family": "Courier New", "text-anchor": "middle",
    });
    text.addSpan(new SavageDOM.Attributes.TextContent(t));
    return context.group([box, text]);
  };

  transforms.forEach((tf, i: number) => {
    const x = gap + (length / 2) + (gap + length) * (i % sqrtLength);
    const y = gap + (length / 2) + (gap + length) * Math.floor(i / sqrtLength);

    const type = tf.type;

    const origin = context.circle(0, 0, 2);
    origin.setAttribute("fill", red);

    const start = buildGroup(0.5, type);

    const mid = buildGroup(0.25, type);
    const midTF = tf.interpolate(tf.parse(null), 0.5);
    mid.setAttribute(`transform.${type}` as any, midTF);

    const end = buildGroup(0, type);
    const endTF = tf;
    end.setAttribute(`transform.${type}` as any, endTF);

    const g = context.group([origin, start, mid, end]);
    g.setAttribute("transform.translate", new SavageDOM.Attributes.Transforms.Translate(x, y));
  });

};
