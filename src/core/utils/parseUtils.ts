import { ifElse, isNil, empty } from "ramda";

export const safeParseObject = ifElse(
  (value) => isNil(value),
  empty,
  (value) => value
);
