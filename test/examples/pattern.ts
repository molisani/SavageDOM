
window["buildExample"] = window["buildExample"] || {};
window["buildExample"]["pattern"] = (root) => {
  const gray = percent => new SavageDOM.Attribute.Color("rgb", percent * 255, percent * 255, percent * 255);

  const paper = new SavageDOM.Paper(root);

  const inner1 = new SavageDOM.Elements.Renderable.Shape.Circle(paper, {
    "cx:cy": new SavageDOM.Attribute.Point(15, 15), r: 10,
    fill: new SavageDOM.Attribute.Color("#00FFFF"),
    stroke: new SavageDOM.Attribute.Color("#007777"),
    "stroke-width": 5,
  });

  const pattern1 = paper.group([inner1]).toPattern(30, 30);

  const outer1 = new SavageDOM.Elements.Renderable.Shape.Circle(paper, {
    "cx:cy": new SavageDOM.Attribute.Point(105, 105), r: 90,
    fill: pattern1, stroke: new SavageDOM.Attribute.Color("#770077"), "stroke-width": 5,
  });

  const inner2A = new SavageDOM.Elements.Renderable.Shape.Rect(paper, {
    "x:y": new SavageDOM.Attribute.Point(2.5, 2.5), width: 25, height: 25,
    fill: new SavageDOM.Attribute.Color("#FF7777"),
    stroke: new SavageDOM.Attribute.Color("#FF0000"),
    "stroke-width": 2.5,
  });

  const pattern2A = paper.group([inner2A]).toPattern(30, 30);
  const pattern2Atf = new SavageDOM.Attribute.List<SavageDOM.Attribute.Transform>();
  pattern2Atf.push(new SavageDOM.Attribute.Transform.SkewX(25));
  pattern2A.setAttribute("patternTransform", pattern2Atf);

  const inner2B = new SavageDOM.Elements.Renderable.Shape.Rect(paper, {
    "x:y": new SavageDOM.Attribute.Point(2.5, 2.5), width: 25, height: 25,
    fill: new SavageDOM.Attribute.Color("#77FF77"),
    stroke: new SavageDOM.Attribute.Color("#007700"),
    "stroke-width": 2.5,
  });

  const pattern2B = paper.group([inner2B]).toPattern(30, 30);
  const pattern2Btf = new SavageDOM.Attribute.List<SavageDOM.Attribute.Transform>();
  pattern2Btf.push(new SavageDOM.Attribute.Transform.SkewX(25));
  pattern2B.setAttribute("patternTransform", pattern2Btf);

  const outer2Points = new SavageDOM.Attribute.List<SavageDOM.Attribute.Point>();
  outer2Points.push(new SavageDOM.Attribute.Point(175, 25));
  outer2Points.push(new SavageDOM.Attribute.Point(225, 75));
  outer2Points.push(new SavageDOM.Attribute.Point(150, 150));
  outer2Points.push(new SavageDOM.Attribute.Point(75, 125));
  const outer2 = new SavageDOM.Elements.Renderable.Shape.Polygon(paper, {
    points: outer2Points,
    fill: pattern2A, stroke: pattern2B, "stroke-width": 15,
  });

  const rectLine = paper.rect(0, 0, 15, 30);
  rectLine.setAttribute("fill", new SavageDOM.Attribute.Color("#FF7700"));
  const pattern3 = paper.group([rectLine]).toPattern(30, 30);
  const pattern3tf = new SavageDOM.Attribute.List<SavageDOM.Attribute.Transform>();
  pattern3tf.push(new SavageDOM.Attribute.Transform.SkewX(25));
  pattern3tf.push(new SavageDOM.Attribute.Transform.UniformScale(0.25));
  pattern3.setAttribute("patternTransform", pattern3tf);

  const t3 = paper.text([new SavageDOM.Attribute.TextContent("PATTERN FILL")], 15, 225);
  t3.setAttribute("font-family", "Arial Black");
  t3.setAttribute("font-size", 27);
  t3.setAttribute("font-weight", "bold");
  t3.setAttribute("fill", pattern3);
};
