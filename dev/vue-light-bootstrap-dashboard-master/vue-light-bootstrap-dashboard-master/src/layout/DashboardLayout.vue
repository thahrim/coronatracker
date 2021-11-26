<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/panel/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Panel</p>
      </sidebar-link>
      <sidebar-link to="#1">
        <i class="nc-icon nc-circle-09"></i>
        <p>By Thaharim</p>
      </sidebar-link>
      <sidebar-link to="#2">
        <i class="nc-icon nc-notes"></i>
        <p>Coming</p>
      </sidebar-link>
      <sidebar-link to="#3">
        <i class="nc-icon nc-pin-3"></i>
        
        <p>Soon</p>
      </sidebar-link>

      <template slot="bottom-links">
           <a href="https://www.buymeacoffee.com/CoronaTrackerca" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
