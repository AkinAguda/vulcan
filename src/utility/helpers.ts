/**
 * This function allows you to combine sevral classNames together.
 * For conditional classes, just pass in the condition (boolean)
 * as the first elemnt in the array and pass the classes you want
 * to merge as the other items in the array.
 * @param  {Array.<String | [Boolean, ...String]>} args
 */

type ConditionalClass = [boolean, ...string[]];

export const mergeClasses = <T extends []>(
  ...args: string[] | Array<string | ConditionalClass>
): string => {
  return (args as T).reduce(
    (accumulator, currentValue: string | Array<string | ConditionalClass>) => {
      if (Array.isArray(currentValue)) {
        const bool = currentValue.shift();
        if (bool) return `${accumulator} ${mergeClasses(...currentValue)}`;
        return accumulator;
      }
      if (!currentValue) return accumulator;
      return `${accumulator ? `${accumulator} ` : ""}${currentValue}`;
    },
    ""
  );
};
