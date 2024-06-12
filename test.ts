interface MyIterable {
  [Symbol.iterator](): IterableIterator<[string, string]>;
}

class MyCollection implements MyIterable {
  private items: [string, string][] = [
    ['key1', 'value1'],
    ['key2', 'value2'],
  ];

  [Symbol.iterator](): IterableIterator<[string, string]> {
    let index = 0;
    const items = this.items;

    return {
      next(): IteratorResult<[string, string]> {
        if (index < items.length) {
          return { value: items[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  }
}

const collection = new MyCollection();

for (const [key, value] of collection) {
  console.log(key, value);
}
