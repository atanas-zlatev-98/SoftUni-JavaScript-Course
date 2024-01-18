function createSortedList() {
  //let sortedList = [];

  const result = {
    add: function (el) {
      if (typeof el !== "number" || isNaN(el)) {
        return;
      }

      this._sortedList.push(Number(el));
      this._sortedList.sort(this._sort);
      this.size = this._sortedList.length;
    },
    remove: function (index) {
      if (index < 0 || index >= this.size) {
        return;
      }

      this._sortedList.splice(index, 1);
      this._sortedList.sort(this._sort);
      this.size = this._sortedList.length;
    },
    get: function (index) {
      if (index < 0 || index >= this.size) {
        return;
      }
      return this._sortedList[index];
    },
    size: 0,
    _sort: function (a, b) {
      return a - b;
    },
    _sortedList: [],
  };

  return result;
}
let list = createSortedList();

list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
