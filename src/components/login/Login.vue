<template>
  <div>
    <el-container>
      <el-main>
        <el-form :model="form" label-width="auto">
          <el-form-item label="username" style="width: 30%;">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="password" style="width: 30%;">
            <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">Login</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      this.$router.push({ path: "/dashboard" });
    }
  },
  data: function() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  }
};
</script>
