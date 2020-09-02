export const toggleBorder = {
  data() {
    return {
      catImage: {
        applyBorder: 'border-on-click',
        imgFluid: 'img-fluid',
        isClicked: false
      }
    }
  },
  methods: {
    imgClicked() {
      this.catImage.isClicked = true;
    }
  }
}
