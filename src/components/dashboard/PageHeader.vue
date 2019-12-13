<template>
  <div>
    <!-- the flex-direction property's default is row -->
    <!-- Aligning Items in a Flex Container -->
    <!-- To center our box we use the align-items property to align our item on the cross axis -->
    <!-- We use justify-content to align the item on the main axis -->
    <div style="display: flex; align-items: center; justify-content: center;">
      <el-breadcrumb separator="/" style="font-size: 150%;">
        <el-breadcrumb-item :key="index" v-for="(item, index) in el_breadcrumb_item">{{ item }}</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- Typical use cases of Flexbox -->
      <!-- we are aligning the item on the right by giving it a left margin of auto. -->
      <div style="margin-left: auto;">
        <el-avatar
          shape="square"
          src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
        ></el-avatar>
      </div>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  // a component’s data option must be a function
  // so that each instance can maintain an independent copy of the returned data object
  data: function() {
    return {
      el_breadcrumb_item: []
    };
  },
  // the created hook can be used to run code after an instance is created
  created: function() {
    this.el_breadcrumb_item = this.$route.path.split("/");
  },
  // To react to params changes in the same component, you can simply watch the $route object
  watch: {
    $route(to) {
      this.el_breadcrumb_item = to.path.split("/");
    }
  }
};
</script>
