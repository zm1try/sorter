class Sorter {
  constructor() {
    this.data = [];
    this.comparator = (left, right) => left - right;
  }

  add(element) {
    this.data.push(element);
  }

  at(index) {
    return this.data[index];
  }

  get length() {
    return this.data.length;
  }

  toArray() {
    return this.data;
  }

  sort(indices) {
    this.indices = indices;
    let temp;
    for(let i = 0; i<this.indices.length;i++) {
      for(let j = i; j<this.indices.length-i;j++) {
        if (this.indices[j]>this.indices[j+1]) {
          this.temp = this.indices[j+1];
          this.indices[j+1] = this.indices[i];
          this.indices[j] = this.temp;
        }
      }
    }
    for(let i = 0; i<this.indices.length;i++) {
      for(let j = 0; j<this.indices.length-1;j++) {
        if (this.comparator(this.data[this.indices[j]],this.data[this.indices[j+1]])>0) {
          this.temp = this.data[this.indices[j+1]];
          this.data[this.indices[j+1]] = this.data[this.indices[j]];
          this.data[this.indices[j]] = this.temp;
        }
      }
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;