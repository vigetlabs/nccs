export default class ListFilter {
  constructor(el) {
    this.el = el;
    this.setVars();
    this.bindEvents();
  }

  setVars() {
    console.log("list active");
    this.options = {
      valueNames: [
        { data: ["filter-categories"] },
        { data: ["filter-type"] },
      ],
    };

    this.filter = new List(this.el, this.options)
  }

  bindEvents() {
  }
}
