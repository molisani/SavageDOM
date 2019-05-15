import { AttributeTestSuite } from "../util/test-env";

export function asArrayTest<T>(test: AttributeTestSuite<T>): AttributeTestSuite<T[]> {
  return {
    type: `${test.type}[]`,
    values: [
      ["empty array", []],
      ...test.values.map(([desc, value, readValue]): [string, T[], T[]?] => {
        if (readValue !== undefined) {
          return [`[${desc}]`, [value], [readValue]];
        } else {
          return [`[${desc}]`, [value]];
        }
      }),
      [
        "[all of the above]",
        test.values.map((value) => value[1]),
        test.values.map((value) => value[2] || value[1]),
      ],
    ],
  };
}
