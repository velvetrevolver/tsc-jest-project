import { TestOutput } from "./TestOutput";

describe('test', () => {
  it('should return ok', () => {
    expect(TestOutput.write()).toBe('ok');
  });
});