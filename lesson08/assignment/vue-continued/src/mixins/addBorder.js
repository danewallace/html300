export const addBorder = {
  data() {
    return {
      catImage: {
        applyBorder: 'border-on-click',
        imgFluid: 'img-fluid img-thumbnail',
        isClicked: false
      }
    }
  },
  methods: {
    // Method declaration for method to turn isClicked and thus add border around image until page is refreshed
    imgClicked() {
      this.catImage.isClicked = true;
      // I chose not to toggle the isClicked behavior when the function is run.
      // This allows the user to more easily identify which links have been clicked until they refresh or navigate back to the page.
      // However, the toggle behavior can be implemented by commenting out the first line of the function and uncommenting the line below.
      // this.catImage.isClicked = !this.catImage.isClicked;
    }
  }
}
