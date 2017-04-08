
window["buildExample"] = window["buildExample"] || {};
window["buildExample"]["shapes"] = (root) => {
  const gray = percent => new SavageDOM.Attribute.Color("rgb", percent * 255, percent * 255, percent * 255);

  const paper = new SavageDOM.Paper(root);
  const circle = new SavageDOM.Elements.Renderable.Shape.Circle(paper, {
    "cx:cy": new SavageDOM.Attribute.Point(40, 40), "r": 25,
    "fill": gray(0.75), "stroke": gray(0.125), "stroke-width": 5,
  });
  const ellipse = new SavageDOM.Elements.Renderable.Shape.Ellipse(paper, {
    "cx:cy": new SavageDOM.Attribute.Point(80, 40), "rx:ry": new SavageDOM.Attribute.Point(25, 10),
    "fill": gray(0.875), "stroke": gray(0.25), "stroke-width": 7.5,
  });
  const rect = new SavageDOM.Elements.Renderable.Shape.Rect(paper, {
    "x:y:width:height": new SavageDOM.Attribute.Box(95, 15, 25, 50),
    "fill": gray(0.375), "stroke": gray(0.625), "stroke-width": 2.5,
  });
  const line1 = new SavageDOM.Elements.Renderable.Shape.Line(paper, {
    "x1": 130, "y1": 15, "x2": 185, "y2": 65,
    "stroke": new SavageDOM.Attribute.Color("#abcdef"), "stroke-width": 5,
  });
  const line2 = new SavageDOM.Elements.Renderable.Shape.Line(paper, {
    "x1": 130, "y1": 65, "x2": 185, "y2": 15,
    "stroke": new SavageDOM.Attribute.Color("#123456"), "stroke-width": 5,
  });
  const lineR = new SavageDOM.Elements.Renderable.Shape.Line(paper, {
    "x1": 200, "y1": 15, "x2": 200, "y2": 65,
    "stroke": new SavageDOM.Attribute.Color("#FF0000"), "stroke-width": 5,
  });
  const lineG = new SavageDOM.Elements.Renderable.Shape.Line(paper, {
    "x1": 215, "y1": 15, "x2": 215, "y2": 65,
    "stroke": new SavageDOM.Attribute.Color("#00FF00"), "stroke-width": 5,
  });
  const lineB = new SavageDOM.Elements.Renderable.Shape.Line(paper, {
    "x1": 230, "y1": 15, "x2": 230, "y2": 65,
    "stroke": new SavageDOM.Attribute.Color("#0000FF"), "stroke-width": 5,
  });
  const segments1: SavageDOM.Attribute.PathSegment[] = [];
  segments1.push(new SavageDOM.Attribute.PathSegment.MoveToAbs(new SavageDOM.Attribute.Point(15, 80)));
  segments1.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(20, 5)));
  segments1.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(5, 20)));
  segments1.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(20, 5)));
  segments1.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(20, -5)));
  segments1.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(5, -20)));
  segments1.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(20, -5)));
  segments1.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(-10, 40)));
  segments1.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(-35, 10)));
  segments1.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(-35, -10)));
  segments1.push(new SavageDOM.Attribute.PathSegment.ClosePath());
  const path1 = new SavageDOM.Elements.Renderable.Shape.Path(paper, {
    "d": segments1,
    "fill": new SavageDOM.Attribute.Color("#FFFF00"),
    "stroke": new SavageDOM.Attribute.Color("#00FFFF"),
    "stroke-width": 2.5,
  });
  const segments2A: SavageDOM.Attribute.PathSegment[] = [];
  segments2A.push(new SavageDOM.Attribute.PathSegment.MoveToAbs(new SavageDOM.Attribute.Point(120, 80)));
  segments2A.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(40, 50)));
  segments2A.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(10, 0)));
  segments2A.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(0, -50)));
  segments2A.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(-10, 0)));
  segments2A.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(-40, 50)));
  segments2A.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(10, 0)));
  segments2A.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(30, -40)));
  segments2A.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(0, 30)));
  segments2A.push(new SavageDOM.Attribute.PathSegment.LineToRel(new SavageDOM.Attribute.Point(-30, -40)));
  segments2A.push(new SavageDOM.Attribute.PathSegment.ClosePath());
  const path2A = new SavageDOM.Elements.Renderable.Shape.Path(paper, {
    "d": segments2A, "fill-rule": "nonzero",
    "fill": new SavageDOM.Attribute.Color("#77FF00"),
    "stroke": new SavageDOM.Attribute.Color("#0077FF"),
    "stroke-width": 2.5,
  });
  const segments2B: SavageDOM.Attribute.PathSegment[] = segments2A.slice();
  segments2B[0] = new SavageDOM.Attribute.PathSegment.MoveToAbs(new SavageDOM.Attribute.Point(180, 80));
  const path2B = new SavageDOM.Elements.Renderable.Shape.Path(paper, {
    "d": segments2B, "fill-rule": "evenodd",
    "fill": new SavageDOM.Attribute.Color("#FF0077"),
    "stroke": new SavageDOM.Attribute.Color("#7700FF"),
    "stroke-width": 2.5,
  });
  const polygonPoints: SavageDOM.Attribute.Point[] = [];
  polygonPoints.push(new SavageDOM.Attribute.Point(20, 150));
  polygonPoints.push(new SavageDOM.Attribute.Point(20, 235));
  polygonPoints.push(new SavageDOM.Attribute.Point(125, 210));
  polygonPoints.push(new SavageDOM.Attribute.Point(100, 170));
  const polygon = new SavageDOM.Elements.Renderable.Shape.Polygon(paper, {
    "points": polygonPoints,
    "fill": new SavageDOM.Attribute.Color("#FF00FF"),
    "stroke": new SavageDOM.Attribute.Color("#770077"),
    "stroke-width": 5,
  });
  const polylinePoints: SavageDOM.Attribute.Point[] = [];
  polylinePoints.push(new SavageDOM.Attribute.Point(230, 150));
  polylinePoints.push(new SavageDOM.Attribute.Point(230, 235));
  polylinePoints.push(new SavageDOM.Attribute.Point(150, 210));
  polylinePoints.push(new SavageDOM.Attribute.Point(125, 170));
  const polyline = new SavageDOM.Elements.Renderable.Shape.Polyline(paper, {
    "points": polylinePoints,
    "fill": new SavageDOM.Attribute.Color("#FF7700"),
    "stroke": new SavageDOM.Attribute.Color("#00FF77"),
    "stroke-width": 5,
  });
};
