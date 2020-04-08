var app = new Vue({
  el: '#app',
  data: {
    seen: true,
    message: 'Hello'
  },
  methods: {
    methodName: function(){
      if(app.seen == true){
        app.seen = false;
      }
      else {
        app.seen = true;
      }
    }
  }
})

app.seen = false;
