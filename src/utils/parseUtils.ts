import { ifElse, isNil } from "ramda";

export const  safeParseObject = ifElse(
    (value) => isNil(value),
    () => {},
    (value) => value,
);