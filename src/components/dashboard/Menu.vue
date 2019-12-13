<template>
  <div style="width: 100%; height: 100%; background-color: #545c64;">
    <el-scrollbar
      style="width: 100%; height: 100%;"
      wrap-style="overflow-x: hidden;"
      view-style="overflow-x: hidden;"
    >
      <el-menu
        style="width: 100%; height: 100%;"
        :default-active="activeIndex"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/dashboard">
          <i class="el-icon-sunny"></i>
          <span slot="title">Module0</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/1">
          <i class="el-icon-sunny"></i>
          <span slot="title">Module1</span>
        </el-menu-item>
        <el-submenu index="/dashboard/2">
          <template slot="title">
            <i class="el-icon-sunny"></i>
            <span>Module2</span>
          </template>
          <el-menu-item index="/dashboard/2/1">SubModule1</el-menu-item>
          <el-menu-item index="/dashboard/2/2">SubModule2</el-menu-item>
          <el-menu-item index="/dashboard/2/3">SubModule3</el-menu-item>
          <el-menu-item index="/dashboard/2/4">SubModule4</el-menu-item>
        </el-submenu>
        <el-menu-item index="/dashboard/3">
          <i class="el-icon-sunny"></i>
          <span slot="title">Module3</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/4">
          <i class="el-icon-sunny"></i>
          <span slot="title">Module4</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/5">
          <i class="el-icon-sunny"></i>
          <span slot="title">Module5</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/6">
          <i class="el-icon-sunny"></i>
          <span slot="title">Module6</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/7">
          <i class="el-icon-sunny"></i>
          <span slot="title">Module7</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/8">
          <i class="el-icon-sunny"></i>
          <span slot="title">Module8</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/9">
          <i class="el-icon-sunny"></i>
          <span slot="title">Module9</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data: function() {
    return {
      activeIndex: ""
    };
  },
  created: function() {
    this.activeIndex = this.$route.path;
  }
};
</script>

