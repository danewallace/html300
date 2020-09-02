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
    imgClicked() {
      this.catImage.isClicked = true;
    }
  }
}
