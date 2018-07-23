<template>
  <div class="app-container">
    <span>对用户的维护：创建、修改以及分配角色</span>
    <el-button @click="test">test</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      const h = this.$createElement;

      this.$notify({
        title: '标题名称',
        message: h(
          'i',
          { style: 'color: teal' },
          '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'
        )
      });
    }
  }
};
</script>

