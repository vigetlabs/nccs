export default class filter {
  constructor(el) {
    this.el = el
    this.setVars()
    this.bindEvents()
  }

  setVars() {
    this.select = this.el.querySelector('[data-filter-select]')
    this.clear = this.el.querySelector('[data-filter-clear]')
    this.entries = this.el.querySelectorAll('[data-filter-entry]');

    // animation presets
    this.fadeOut = [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(5px)' },
    ]

    this.fadeIn = [
      { opacity: 0, transform: 'translateY(5px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ]

    this.defaultTiming = {
      duration: 250,
      fill: 'both',
      iterations: 1,
      easing: 'cubic-bezier(0.33, 1, 0.68, 1)', //easeOutCubic
    }
  }

  bindEvents() {
    this.select.addEventListener('change', this.handleChange);
    this.clear.addEventListener('click', this.handleClear);
  }

  handleClear = () => {
    this.select.value = "";
    this.filterSort(this.select.value)
  }

  handleChange = (e) => {
    this.filterSort(e.target.value)
  }

  filterSort(filterTerm) {
    // build array of matches so we know how many we have
    const matches = Array.prototype.filter.call(this.entries, function(entry) {
      if (filterTerm === "all" || filter === "") {
        return entry
      }

      return entry.dataset.filterTerms.includes(filterTerm);
    })

    this.entries.forEach((entry) => {
      // fade all out, deactivate all, then activate and fade in the matching entries
      entry.animate(this.fadeOut, this.defaultTiming).finished.then(() => {
        entry.dataset.active = false;
        matches.forEach((match) => {
          match.dataset.active = true
          match.animate(this.fadeIn, this.defaultTiming)
        })
      })
    })
  }
}
