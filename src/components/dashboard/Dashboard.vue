<template>
  <div>
    <el-container>
      <el-aside :style="aside_style">
        <Menu></Menu>
      </el-aside>
      <el-main :style="main_style">
        <div>
          <PageHeader></PageHeader>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import PageHeader from "./PageHeader.vue";

export default {
  name: "Dashboard",
  components: {
    Menu,
    PageHeader
  },
  computed: {
    aside_style: function() {
      let aside_style = "";
      aside_style += "width: " + window.innerWidth / 7 + "px;";
      aside_style += "height: " + window.innerHeight + "px;";
      return aside_style;
    },
    main_style: function() {
      let main_style = "";
      main_style += "height: " + window.innerHeight + "px;";
      return main_style;
    }
  }
};
</script>
