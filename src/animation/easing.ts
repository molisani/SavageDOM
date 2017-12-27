namespace SavageDOM.Animation.Easing {

  const INITIAL_NUM_SAMPLES = 17;
  const NEWTON_ITERATIONS = 5;

  interface Constants {
    a: number;
    b: number;
    c: number;
  }

  const _calcConstants = (p1: number, p2: number): Constants => {
    return {
      a: 1 - 3 * p2 + 3 * p1,
      b: 3 * p2 - 6 * p1,
      c: 3 * p1,
    };
  };

  const _evaluateBezier = (t: number, c: Constants) => ((c.a * t + c.b) * t + c.c) * t;
  const _evaluateBezierDerivative = (t: number, c: Constants) => (3 * c.a * t + 2 * c.b) * t + c.c;

  const _calcTFromX = (samples: Float32Array, x: number, c: Constants): number => {
    const idx = Math.min(Math.max(samples.findIndex(sample => sample > x) - 1, 1), samples.length - 1);
    const d = (x - samples[idx]) / (samples[idx + 1] - samples[idx]);
    let estimate = (d + idx - 1) / (INITIAL_NUM_SAMPLES - 1);
    for (let iter = 0; iter < NEWTON_ITERATIONS; ++iter) {
      const slope = _evaluateBezierDerivative(estimate, c);
      if (slope === 0) {
        break;
      }
      estimate -= (_evaluateBezier(estimate, c) - x) / slope;
    }
    return estimate;
  };

  export const cubicBezier = (p1x: number, p1y: number, p2x: number, p2y: number): (x: number) => number => {
    if (p1x === p1y && p2x === p2y) {
      return (x: number) => x;
    }
    const xConstants = _calcConstants(p1x, p2x);
    const yConstants = _calcConstants(p1y, p2y);
    const samples = new Float32Array(INITIAL_NUM_SAMPLES);
    for (let sample = 0; sample < INITIAL_NUM_SAMPLES; ++sample) {
      samples[sample] = _evaluateBezier(sample / (INITIAL_NUM_SAMPLES - 1), xConstants);
    }
    return (x: number) => _evaluateBezier(_calcTFromX(samples, x, xConstants), yConstants);
  };

  const flip = (ease: (t: number) => number) => (t: number) => 1 - ease(1 - t);
  const inout = (easeIn: (t: number) => number, easeOut: (t: number) => number) => {
    return (t: number) => t < 0.5 ? easeIn(t * 2) / 2 : easeOut(2 * t - 1) / 2 + 0.5;
  };

  const s = 1.70158;
  const p = 0.075;

  export const linear = (t: number) => t;

  export const quadraticIn = (t: number) => t ** 2;
  export const quadraticOut = flip(quadraticIn);
  export const quadratic = inout(quadraticIn, quadraticOut);

  export const cubicIn = (t: number) => t ** 3;
  export const cubicOut = flip(cubicIn);
  export const cubic = inout(cubicIn, cubicOut);

  export const quarticIn = (t: number) => t ** 4;
  export const quarticOut = flip(quarticIn);
  export const quartic = inout(quarticIn, quarticOut);

  export const quinticIn = (t: number) => t ** 5;
  export const quinticOut = flip(quinticIn);
  export const quintic = inout(quinticIn, quinticOut);

  export const sineIn = (t: number) => 1 - Math.cos(t * Math.PI / 2);
  export const sineOut = flip(sineIn);
  export const sine = inout(sineIn, sineOut);

  export const exponentialIn = (t: number) => 2 ** (10 * (t - 1));
  export const exponentialOut = flip(exponentialIn);
  export const exponential = inout(exponentialIn, exponentialOut);

  export const circularIn = (t: number) => 1 - Math.sqrt(1 - t ** 2);
  export const circularOut = flip(circularIn);
  export const circular = inout(circularIn, circularOut);

  export const backIn = (t: number) => t ** 2 * ((s + 1) * t - s);
  export const backOut = flip(backIn);
  export const back = inout(backIn, backOut);

  export const elasticIn = (t: number) => 2 ** (-10 * t) * Math.sin((t - p) * (2 * Math.PI) / 0.3) + 1;
  export const elasticOut = flip(elasticIn);
  export const elastic = inout(elasticIn, elasticOut);

}
