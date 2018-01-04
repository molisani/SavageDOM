
window["buildExample"] = window["buildExample"] || {};
window["buildExample"]["pattern"] = (root) => {
  const gray = percent => new SavageDOM.Attributes.Color("rgb", percent * 255, percent * 255, percent * 255);

  const context = new SavageDOM.Context(root);

  // const inner1 = new SavageDOM.Elements.Renderables.Shapes.Circle(context, {
  //   "cx:cy": new SavageDOM.Attributes.Point(15, 15), r: 10,
  //   fill: new SavageDOM.Attributes.Color("#00FFFF"),
  //   stroke: new SavageDOM.Attributes.Color("#007777"),
  //   "stroke-width": 5,
  // });

  // const pattern1 = context.group([inner1]).toPattern(30, 30);

  // const outer1 = new SavageDOM.Elements.Renderables.Shapes.Circle(context, {
  //   "cx:cy": new SavageDOM.Attributes.Point(105, 105), r: 90,
  //   fill: pattern1, stroke: new SavageDOM.Attributes.Color("#770077"), "stroke-width": 5,
  // });

  // const inner2A = new SavageDOM.Elements.Renderables.Shapes.Rect(context, {
  //   "x:y": new SavageDOM.Attributes.Point(2.5, 2.5), width: 25, height: 25,
  //   fill: new SavageDOM.Attributes.Color("#FF7777"),
  //   stroke: new SavageDOM.Attributes.Color("#FF0000"),
  //   "stroke-width": 2.5,
  // });

  // const pattern2A = context.group([inner2A]).toPattern(30, 30);
  // const pattern2Atf: SavageDOM.Attributes.Transform[] = [];
  // pattern2Atf.push(new SavageDOM.Attributes.Transforms.SkewX(25));
  // pattern2A.setAttribute("patternTransform", pattern2Atf);

  // const inner2B = new SavageDOM.Elements.Renderables.Shapes.Rect(context, {
  //   "x:y": new SavageDOM.Attributes.Point(2.5, 2.5), width: 25, height: 25,
  //   fill: new SavageDOM.Attributes.Color("#77FF77"),
  //   stroke: new SavageDOM.Attributes.Color("#007700"),
  //   "stroke-width": 2.5,
  // });

  // const pattern2B = context.group([inner2B]).toPattern(30, 30);
  // const pattern2Btf: SavageDOM.Attributes.Transform[] = [];
  // pattern2Btf.push(new SavageDOM.Attributes.Transforms.SkewX(25));
  // pattern2B.setAttribute("patternTransform", pattern2Btf);

  // const outer2Points: SavageDOM.Attributes.Point[] = [];
  // outer2Points.push(new SavageDOM.Attributes.Point(175, 25));
  // outer2Points.push(new SavageDOM.Attributes.Point(225, 75));
  // outer2Points.push(new SavageDOM.Attributes.Point(150, 150));
  // outer2Points.push(new SavageDOM.Attributes.Point(75, 125));
  // const outer2 = new SavageDOM.Elements.Renderables.Shapes.Polygon(context, {
  //   points: outer2Points,
  //   fill: pattern2A, stroke: pattern2B, "stroke-width": 15,
  // });

  // const rectLine = context.rect(0, 0, 15, 30);
  // rectLine.setAttribute("fill", new SavageDOM.Attributes.Color("#FF7700"));
  // const pattern3 = context.group([rectLine]).toPattern(30, 30);
  // const pattern3tf: SavageDOM.Attributes.Transform[] = [];
  // pattern3tf.push(new SavageDOM.Attributes.Transforms.SkewX(25));
  // pattern3tf.push(new SavageDOM.Attributes.Transforms.UniformScale(0.25));
  // pattern3.setAttribute("patternTransform", pattern3tf);

  const t3 = context.text([new SavageDOM.Attributes.TextContent("PATTERN FILL")], 15, 225);
  t3.setAttribute("font-family", "Arial Black");
  t3.setAttribute("font-size", 27);
  t3.setAttribute("font-weight", "bold");
  // t3.setAttribute("fill", pattern3);
};
