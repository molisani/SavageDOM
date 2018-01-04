
window["buildExample"] = window["buildExample"] || {};
window["buildExample"]["gradient"] = (root) => {
  const context = new SavageDOM.Context(root);

  // const gradient1Fill = context.radialGradient({
  //   0: new SavageDOM.Attributes.Color("#007700"),
  //   1: new SavageDOM.Attributes.Color("#00FF77"),
  // });

  // const gradient1Stroke = context.linearGradient({
  //   0: new SavageDOM.Attributes.Color("rgb", 127, 127, 0, 1),
  //   1: new SavageDOM.Attributes.Color("rgb", 255, 0, 127, 0),
  // });
  // const gradient1Stroketf: SavageDOM.Attributes.Transform[] = [];
  // gradient1Stroketf.push(new SavageDOM.Attributes.Transforms.Rotate(45));
  // gradient1Stroke.setAttribute("gradientTransform", gradient1Stroketf);

  // const outer1 = new SavageDOM.Elements.Renderables.Shapes.Circle(context, {
  //   "cx:cy": new SavageDOM.Attributes.Point(105, 105), r: 90,
  //   fill: gradient1Fill, stroke: gradient1Stroke, "stroke-width": 10,
  // });

  // const gradient2Fill = context.linearGradient({
  //   0.25: new SavageDOM.Attributes.Color("rgb", 0, 0, 0, 0.5),
  //   0.5: new SavageDOM.Attributes.Color("rgb", 127, 127, 127, 0),
  //   0.75: new SavageDOM.Attributes.Color("rgb", 255, 255, 255, 0.5),
  // });
  // const gradient2Filltf: SavageDOM.Attributes.Transform[] = [];
  // gradient2Filltf.push(new SavageDOM.Attributes.Transforms.Rotate(90));
  // gradient2Fill.setAttribute("gradientTransform", gradient2Filltf);

  // const gradient2stroke = context.linearGradient({
  //   0: new SavageDOM.Attributes.Color("#FF0000"),
  //   0.5: new SavageDOM.Attributes.Color("#77FF77"),
  //   1: new SavageDOM.Attributes.Color("#0000FF"),
  // });

  // const outer2Points: SavageDOM.Attributes.Point[] = [];
  // outer2Points.push(new SavageDOM.Attributes.Point(175, 25));
  // outer2Points.push(new SavageDOM.Attributes.Point(225, 75));
  // outer2Points.push(new SavageDOM.Attributes.Point(150, 150));
  // outer2Points.push(new SavageDOM.Attributes.Point(75, 125));
  // const outer2 = new SavageDOM.Elements.Renderables.Shapes.Polygon(context, {
  //   points: outer2Points,
  //   fill: gradient2Fill, stroke: gradient2stroke, "stroke-width": 15,
  // });

  // const gradient3 = context.radialGradient({
  //   0: new SavageDOM.Attributes.Color("#7700FF"),
  //   1: new SavageDOM.Attributes.Color("rgb", 0, 0, 127, 0),
  // });
  // const gradient3tf: SavageDOM.Attributes.Transform[] = [];
  // gradient3tf.push(new SavageDOM.Attributes.Transforms.Scale(1, 2));
  // gradient3.setAttribute("gradientTransform", gradient3tf);

  const t3 = context.text([new SavageDOM.Attributes.TextContent("GRADIENT FILL")], 15, 225);
  t3.setAttribute("font-family", "Arial Black");
  t3.setAttribute("font-size", 25);
  t3.setAttribute("font-weight", "bold");
  // t3.setAttribute("fill", gradient3);
};
