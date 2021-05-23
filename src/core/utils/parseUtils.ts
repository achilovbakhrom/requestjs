import { ifElse, isNil, empty, always} from "ramda";

export const safeParseObject = ifElse(
  isNil,
  empty,
  (value) => value
);
