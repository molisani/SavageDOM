
window["buildExample"] = window["buildExample"] || {};
window["buildExample"]["transforms"] = (root) => {
  const width = 250;
  const gap = 15;
  const scale = 0.75;

  const clear = new SavageDOM.Attribute.Color("rgb", 0, 0, 0, 0);
  const red = new SavageDOM.Attribute.Color("#FF0000");
  const gray = percent => new SavageDOM.Attribute.Color("rgb", percent * 255, percent * 255, percent * 255);

  const paper = new SavageDOM.Paper(root);

  const transforms: SavageDOM.Attribute.Transform[] = [
    new SavageDOM.Attribute.Transform.UniformScale(0.8),
    new SavageDOM.Attribute.Transform.Scale(0.8, 1.2),
    new SavageDOM.Attribute.Transform.Rotate(15),
    new SavageDOM.Attribute.Transform.SkewX(15),
  ];

  const sqrtLength = Math.ceil(Math.sqrt(transforms.length));
  const length = (width - (2 + sqrtLength - 1) * gap) / sqrtLength;
  const side = (scale * length);

  const box = (c: SavageDOM.Attribute.Color) => {
    return new SavageDOM.Elements.Renderable.Shape.Rect(paper, {
      x: 0 - side / 2, y: 0 - side / 2, width: side, height: side,
      fill: clear, stroke: c, "stroke-width": 2,
    });
  };

  transforms.forEach((tf, i: number) => {
    const x = gap + (length / 2) + (gap + length) * (i % sqrtLength);
    const y = gap + (length / 2) + (gap + length) * Math.floor(i / sqrtLength);

    const origin = paper.circle(0, 0, 2);
    origin.setAttribute("fill", red);
    const start = paper.group([box(gray(0.5))]);

    const mid = paper.group([box(gray(0.25))]);
    const midTF = new SavageDOM.Attribute.List<SavageDOM.Attribute.Transform>(tf.interpolate(tf.parse(null), 0.5));
    mid.setAttribute("transform", midTF);

    const end = paper.group([box(gray(0))]);
    const endTF = new SavageDOM.Attribute.List<SavageDOM.Attribute.Transform>(tf);
    end.setAttribute("transform", endTF);

    const g = paper.group([origin, start, mid, end]);
    g.setAttribute("transform", new SavageDOM.Attribute.List<SavageDOM.Attribute.Transform>(
      new SavageDOM.Attribute.Transform.Translate(x, y),
    ));
  });

};
