var MyCollection = /** @class */ (function () {
    function MyCollection() {
        this.items = [
            ['key1', 'value1'],
            ['key2', 'value2'],
        ];
    }
    MyCollection.prototype[Symbol.iterator] = function () {
        var _a;
        var index = 0;
        var items = this.items;
        return _a = {
                next: function () {
                    if (index < items.length) {
                        return { value: items[index++], done: false };
                    }
                    else {
                        return { value: undefined, done: true };
                    }
                }
            },
            _a[Symbol.iterator] = function () {
                return this;
            },
            _a;
    };
    return MyCollection;
}());
var collection = new MyCollection();
console.log(collection)
for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
    var _a = collection_1[_i], key = _a[0], value = _a[1];
    console.log(key, value);
}
