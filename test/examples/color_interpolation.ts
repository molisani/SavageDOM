
window["buildExample"] = window["buildExample"] || {};
window["buildExample"]["color_interpolation"] = (root) => {
  const paper = new SavageDOM.Context(root);
  const incr = 15;
  const width = 250 / (incr + 1);
  const height = 250 / incr;

  const buildGradient = (y: number, cA: SavageDOM.Attribute.Color, cB: SavageDOM.Attribute.Color) => {
    for (let i = 0; i <= incr; ++i) {
      const rect = new SavageDOM.Elements.Renderable.Shape.Rect(paper, {
        "x": i * width, y, width, height,
        "fill": cB.interpolate(cA, i * (1 / incr)),
      });
    }
  };

  const red = new SavageDOM.Attribute.Color("#FF0000");
  const blue = new SavageDOM.Attribute.Color("#0000FF");
  const green = new SavageDOM.Attribute.Color("#00FF00");
  const low = new SavageDOM.Attribute.Color("#123456");
  const high = new SavageDOM.Attribute.Color("#ABCDEF");

  const setMode = (mode: SavageDOM.Attribute.InterpolationMode) => {
    red.mode = mode;
    blue.mode = mode;
    green.mode = mode;
    low.mode = mode;
    high.mode = mode;
  };
  setMode("rgb");
  buildGradient(0 * height, red, blue);
  buildGradient(5 * height, red, green);
  buildGradient(10 * height, low, high);
  setMode("hsl-shortest");
  buildGradient(1 * height, red, blue);
  buildGradient(6 * height, red, green);
  buildGradient(11 * height, low, high);
  setMode("hsl-longest");
  buildGradient(2 * height, red, blue);
  buildGradient(7 * height, red, green);
  buildGradient(12 * height, low, high);
  setMode("hsl-clockwise");
  buildGradient(3 * height, red, blue);
  buildGradient(8 * height, red, green);
  buildGradient(13 * height, low, high);
  setMode("hsl-counterclockwise");
  buildGradient(4 * height, red, blue);
  buildGradient(9 * height, red, green);
  buildGradient(14 * height, low, high);

};
