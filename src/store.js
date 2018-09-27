export const store = {
  // debug: true,
  state: {
    currentPage: 0,
    previousPage: -1
  },
  setPage (newPage) {
    if (this.debug) console.log('setPage triggered with', newPage)
    this.state.previousPage = this.state.currentPage
    this.state.currentPage = newPage
  }
}
