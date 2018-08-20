<template>
  <div class="full">
    <div class="full-h"></div>
    <div class="full-h bar"></div>
    <div class="full-h"></div>
  </div>
</template>

<script>
  export default {
    name: 'layout-horizontal'
  };
</script>

<style scoped>
  .full-h{
    height: 100%;
  }
  .full-w{
    width: 100%;
  }
  .full{
    width: 100%;
    height: 100%;
  }
  .bar-vertical{
    width: 12px;

    background: #d3dce6;
  }
</style>
