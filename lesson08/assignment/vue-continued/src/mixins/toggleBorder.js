export const toggleBorder = {
  created() {
    this.logMessage()
  },
  data() {
    return {
      message: 'I am such a nice mixin'
    }
  },
  methods: {
    logMessage() {
      console.log(this.message)
    }
  }
}
