export const store = {
  // debug: true,
  state: {
    currentPage: 0,
    previousPage: -1,
    menuOpen: false
  },
  setPage (newPage) {
    if (this.debug) console.log('setPage triggered with', newPage)
    this.state.previousPage = this.state.currentPage
    this.state.currentPage = newPage
  },
  toggleMenu() {
    this.state.menuOpen = !this.state.menuOpen
  }
}
