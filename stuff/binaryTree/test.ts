// class with getters and setters for data  
//   get data() { return this.data }
//   set data(data: any) { this.data = data }

class Data  {
  private _data: any;
  get data() { return this._data }
  set data(data: any) { this._data = data }

}

let d = new Data();
d.data = 1;
console.log(d.data);