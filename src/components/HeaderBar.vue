<template>
  <div class="menu-links">
    <a v-link="{path:'/'}">HOME</a>
    <a v-link="{path:'/hello'}">Hello</a>
  </div>
</template>

<script>
// TODO: define all components(which is not a single page) in here
export default {

}
</script>

<style>
.menu-links a {
  display: inline-block;
  text-decoration: none;
  color: #555;
  margin-right: 30px;
}
</style>
