class SortedList {
  constructor(items) {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length
  }

  get(pos) {
    if (pos < this.items.length) {
    return this.items[pos];
  } else {
    throw new Error('OutOfBounds');
  }
}

  max(items) {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length-1];  
    }
  }

  min(items) {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }  else {
        return this.items[0];
    }
  }

  sum() {
    let total = this.items.reduce((acc, item) => acc + item, 0);
    return total;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      let avg = this.sum()/this.length;
      return avg;
    }
  }
}

module.exports = SortedList;
