//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this._rows = string.split('\n').map(e => e.split(' ').map(Number));
    this._columns = this.rows[0].map((x,i) => this._rows.map(row => row[i]))
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
