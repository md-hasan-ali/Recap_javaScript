class BetterArray {
    #items;
    constructor(items) {
        this.#items = [];
    }
    getItems() {
        return [...this.#items]
    }
    addItems(item) {
        return this.#items.push(item)
    }
    removeItem(itemToDelete) {
        this.#items = this.#items.filter((item) => item !== itemToDelete)
    }
    modifyItem(changeItem, newValue) {
        const index = this.#items.indexOf(changeItem);
        if (index !== -1) {
            this.#items[index] = newValue;
        }
    }
}
const array = new BetterArray();
console.log(array.addItems("I love Bangladesh"))
console.log(array.getItems())
array.modifyItem("I love Bangladesh", "I love Coding")
console.log(array.getItems())