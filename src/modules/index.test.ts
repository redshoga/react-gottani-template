import { ActionTypeName as CounterActionTypeName } from "./Counter";
import { ActionTypeName as PostsActionTypeName } from "./Posts";

describe("Redux", () => {
  // https://qiita.com/Takepepe/items/00af6d6cd3318fbe2aab#actiontypes%E9%87%8D%E8%A6%81%E5%BA%A6b
  it("ActionTypeName should not be duplicates", () => {
    const allTypeName = [
      ...Object.values(CounterActionTypeName),
      ...Object.values(PostsActionTypeName)
    ];

    const uniq: <T>(array: T[]) => T[] = array => {
      return Array.from(new Set(array));
    };

    expect(allTypeName).toStrictEqual(uniq<string>(allTypeName));
  });
});
