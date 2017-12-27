
window["buildExample"] = window["buildExample"] || {};
window["buildExample"]["text"] = (root) => {
  const paper = new SavageDOM.Context(root);

  const t1content1 = new SavageDOM.Attribute.TextContent("[test string]");
  const t1content2 = new SavageDOM.Attribute.TextContent("[more text content]");
  const t1 = paper.text([], 15, 125);
  t1.addSpan(t1content1);
  t1.addSpan(t1content2);
  t1.setAttribute("font-family", "Arial");
  t1.setAttribute("font-size", 12);
  t1.setAttribute("font-weight", "normal");
  t1.setAttribute("fill", new SavageDOM.Attribute.Color("#000000"));
  t1.setAttribute("text-rendering", "geometricPrecision");

  const t2content1 = new SavageDOM.Attribute.TextContent("[test string]");
  const t2content2 = new SavageDOM.Attribute.TextContent("[more text content]");
  const t2 = paper.text([], 15, 150);
  t2.addSpan(t2content1);
  t2.addSpan(t2content2, 1);
  t2.setAttribute("font-family", "Arial");
  t2.setAttribute("font-size", 12);
  t2.setAttribute("font-weight", "normal");
  t2.setAttribute("fill", new SavageDOM.Attribute.Color("#000000"));
  t2.setAttribute("text-rendering", "geometricPrecision");

  const t3 = paper.text([], 15, 225);
  t3.setAttribute("font-family", "Arial Black");
  t3.setAttribute("font-size", 30);
  t3.setAttribute("font-weight", "bold");
  t3.setAttribute("fill", new SavageDOM.Attribute.Color("#000000"));
  t3.setAttribute("text-rendering", "geometricPrecision");

  ((t3 as any)._node as SVGTextElement).textContent = "overrideText";

  const t4 = new SavageDOM.Elements.Renderable.MultilineText(paper, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod ullamcorper ornare. Phasellus commodo gravida turpis pretium venenatis. Nam ut mi sollicitudin, lobortis eros non, tempor enim.", 175, {
    "font-size": 10,
    "font-family": "Arial Black",
  });
  // t4.setAttribute("font-family", "Arial Black");
  t4.setAttribute("fill", new SavageDOM.Attribute.Color("#000000"));
  t4.setAttribute("text-rendering", "geometricPrecision");

  const margin = paper.line(175, 0, 175, t4.boundingBox.height);
  margin.setAttribute("stroke-width", 1);
  margin.setAttribute("stroke", new SavageDOM.Attribute.Color("#FF0000"));

};
