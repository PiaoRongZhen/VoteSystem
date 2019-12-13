<template>
  <div>
    <el-container>
      <el-main>
        <el-link type="primary" @click="login">Login</el-link>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Index",
  methods: {
    login() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
