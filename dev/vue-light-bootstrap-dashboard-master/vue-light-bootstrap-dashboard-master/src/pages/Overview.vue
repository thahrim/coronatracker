<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <card>
            <div class="embed-responsive embed-responsive-16by9 z-depth-1">
              <iframe
                class="embed-responsive-item"
                src="https://health-infobase.canada.ca/covid-19/iframe/map.html"
                allowfullscreen
              ></iframe>
            </div>
          </card>
        </div>
        <div class="col-md-4">
          <card>
            <template slot="header">
              <h4 class="card-title" >Local News</h4>
              <p class="card-category">Near {{ locDisplayed }}</p>
            </template>
            <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
              <iframe
                id="newsVideo"
                class="embed-responsive-item"
                v-bind:src="startVideo()"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <template slot="footer">
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
window.axios = require('axios');
export default {
  components: {},
  data() {
    return{
      videoSource:
        "https://www.youtube.com/embed/videoseries?list=PLAs1zSLtTHBQsuq2EpU4QyDkmO9d4u_Wd",
      description: "Toronooo",
      city: "",
      region: "",
      locDisplayed: ""
    }
  },
  mounted(){
    axios
    .get('https://ipinfo.io')
    .then(response => (
      this.region = response.data.region,
      this.city = response.data.city
      ))
  },
  methods: {
    startVideo: function(){
      return "https://www.youtube.com/embed/videoseries?list=" + this.matchNewsPlayList()
    },
    matchNewsPlayList: function(){
      var pl

      switch (this.city){
        case "Toronto":
          pl = "PLAs1zSLtTHBTfvtHP89HpjoqoXNH9IZkF"
          this.locDisplayed = this.city + ", Ontario"
          return pl
          break
      }
      
      switch (this.region) {
        case "Ontario":
          pl = "PLAs1zSLtTHBROmXlQzc2m7d0EyBFZ41kf"
          this.locDisplayed = this.region
          break
        case "British Colombia":
          pl = "PLAs1zSLtTHBQsuq2EpU4QyDkmO9d4u_Wd"
          this.locDisplayed = this.region
          break
        case "Alberta":
          pl = "PLAs1zSLtTHBSDIqMHbLmWZFJbh66ayMNi"
          this.locDisplayed = this.region
          break
        case "Quebec":
          pl = "PLAs1zSLtTHBTKWCByQIi8VhnNLDuFWtNf"
          this.locDisplayed = this.region
          break
        case "Nova Scotia":
          pl = "PLAs1zSLtTHBS8Lz2RmEoeBjnk7lAsYQaI"
          this.locDisplayed = this.region
          break
        case "Manitoba":
          pl = "PLAs1zSLtTHBTN_QhWxn1NXlLAe8br1pIR"
          this.locDisplayed = this.region
          break
        case "Saskatchewan":
          pl = "PLAs1zSLtTHBRlqmSOzu0uHLxZtZV8_Ard"
          this.locDisplayed = this.region
          break
        default:
          pl = "PLAs1zSLtTHBQ0ayczij2W67zVyNpNrdGd"
          this.locDisplayed = "Canada"
          break
      }
      return pl;
    }
  }
};
</script>
<style>
</style>
