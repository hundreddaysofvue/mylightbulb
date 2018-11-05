new Vue({
  el: '#app',
  data: {
    backdrops: ['#F5F5F5', '#FFFAFA', '#F0FFF0', '#F5FFFA', '#F0FFFF', '#FFF5EE', '#F5F5DC', '#FFFFF0']
  },
  methods: {
    changeBackground: function (color) {
      this.$el.style.backgroundColor = color
    }
  }
})
