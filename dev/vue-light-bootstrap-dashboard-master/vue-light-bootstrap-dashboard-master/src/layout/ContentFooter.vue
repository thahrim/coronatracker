<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav>
        <ul class="footer-menu">
          <li>
            <router-link :to="{path:'/panel'}">Panel</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        Created with
        <i class="fa fa-heart heart"></i> by
        <a href="https://rimz.ca" target="_blank">RimZ</a>.
      </div>
    </div>
  </footer>
</template>
<script>
  export default {}

</script>
<style>

</style>
