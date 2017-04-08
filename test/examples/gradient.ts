
window["buildExample"] = window["buildExample"] || {};
window["buildExample"]["gradient"] = (root) => {
  const paper = new SavageDOM.Paper(root);

  const gradient1Fill = paper.radialGradient({
    "0": new SavageDOM.Attribute.Color("#007700"),
    "1": new SavageDOM.Attribute.Color("#00FF77"),
  });

  const gradient1Stroke = paper.linearGradient({
    "0": new SavageDOM.Attribute.Color("rgb", 127, 127, 0, 1),
    "1": new SavageDOM.Attribute.Color("rgb", 255, 0, 127, 0),
  });
  const gradient1Stroketf: SavageDOM.Attribute.Transform[] = [];
  gradient1Stroketf.push(new SavageDOM.Attribute.Transform.Rotate(45));
  gradient1Stroke.setAttribute("gradientTransform", gradient1Stroketf);

  const outer1 = new SavageDOM.Elements.Renderable.Shape.Circle(paper, {
    "cx:cy": new SavageDOM.Attribute.Point(105, 105), "r": 90,
    "fill": gradient1Fill, "stroke": gradient1Stroke, "stroke-width": 10,
  });

  const gradient2Fill = paper.linearGradient({
    "0.25": new SavageDOM.Attribute.Color("rgb", 0, 0, 0, 0.5),
    "0.5": new SavageDOM.Attribute.Color("rgb", 127, 127, 127, 0),
    "0.75": new SavageDOM.Attribute.Color("rgb", 255, 255, 255, 0.5),
  });
  const gradient2Filltf: SavageDOM.Attribute.Transform[] = [];
  gradient2Filltf.push(new SavageDOM.Attribute.Transform.Rotate(90));
  gradient2Fill.setAttribute("gradientTransform", gradient2Filltf);

  const gradient2stroke = paper.linearGradient({
    "0": new SavageDOM.Attribute.Color("#FF0000"),
    "0.5": new SavageDOM.Attribute.Color("#77FF77"),
    "1": new SavageDOM.Attribute.Color("#0000FF"),
  });

  const outer2Points: SavageDOM.Attribute.Point[] = [];
  outer2Points.push(new SavageDOM.Attribute.Point(175, 25));
  outer2Points.push(new SavageDOM.Attribute.Point(225, 75));
  outer2Points.push(new SavageDOM.Attribute.Point(150, 150));
  outer2Points.push(new SavageDOM.Attribute.Point(75, 125));
  const outer2 = new SavageDOM.Elements.Renderable.Shape.Polygon(paper, {
    "points": outer2Points,
    "fill": gradient2Fill, "stroke": gradient2stroke, "stroke-width": 15,
  });

  const gradient3 = paper.radialGradient({
    "0": new SavageDOM.Attribute.Color("#7700FF"),
    "1": new SavageDOM.Attribute.Color("rgb", 0, 0, 127, 0),
  });
  const gradient3tf: SavageDOM.Attribute.Transform[] = [];
  gradient3tf.push(new SavageDOM.Attribute.Transform.Scale(1, 2));
  gradient3.setAttribute("gradientTransform", gradient3tf);

  const t3 = paper.text([new SavageDOM.Attribute.TextContent("GRADIENT FILL")], 15, 225);
  t3.setAttribute("font-family", "Arial Black");
  t3.setAttribute("font-size", 25);
  t3.setAttribute("font-weight", "bold");
  t3.setAttribute("fill", gradient3);
};
