const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const original = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const copy = utils.trimProperties(original);
    expect(copy).not.toBe(original);
  });
});

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });
  test('[4] the object returned is the exact same one we passed in', () => {
    const original = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const mutation = utils.trimPropertiesMutation(original);
    expect(mutation).toBe(original);
  });
});

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [1,2,8,56,4,6,3].map(num => {
      return {integer: num};
    });
    const expected = 56;
    const actual = utils.findLargestInteger(input);
    expect(actual).toBe(expected);
  });
});

describe('[Exercise 4] Counter', () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(3);
  });
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown();
    expect(counter.countDown()).toBe(2);
  });
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    for(let i = 0; i < 5; i++){
      counter.countDown();
    }
    expect(counter.countDown()).toBe(0);
  });
});

describe('[Exercise 5] Seasons', () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  const nextTimes = function(times) {
    for (let i = 0; i < times - 1; i++) {
      seasons.next();
    }
    return seasons.next();
  };

  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const expected = 'summer';
    const actual = nextTimes(1);
    expect(actual).toBe(expected);
  });
  test.todo('[10] the SECOND call of seasons.next returns "fall"');
  test.todo('[11] the THIRD call of seasons.next returns "winter"');
  test.todo('[12] the FOURTH call of seasons.next returns "spring"');
  test.todo('[13] the FIFTH call of seasons.next returns again "summer"');
  test.todo('[14] the 40th call of seasons.next returns "spring"');
});

describe('[Exercise 6] Car', () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30); // each test must start with a fresh car
  });
  test.todo('[15] driving the car returns the updated odometer');
  test.todo('[16] driving the car uses gas');
  test.todo('[17] refueling allows to keep driving');
  test.todo('[18] adding fuel to a full tank has no effect');
});

describe('[Exercise 7] isEvenNumberAsync', () => {
  test.todo('[19] resolves true if passed an even number');
  test.todo('[20] resolves false if passed an odd number');
});
