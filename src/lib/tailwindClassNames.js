import { twMerge } from "tailwind-merge";
import classNames from "classnames";

export const twClassNames = (..._arguments) => twMerge(classNames(_arguments));
