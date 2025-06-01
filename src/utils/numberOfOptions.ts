const numberOfOptions = (): number[] =>
  Array.from({ length: 5 }, (_, i) => i + 1);

export const options = numberOfOptions();
