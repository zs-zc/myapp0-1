<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="username" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="ruleForm.password" @keydown.enter.native.="login"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click.native.prevent="login">登录</el-button>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };

    const validateUserpwd = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "admin",
        password: "111111",
      },
      rules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [{ required: true, trigger: "blur", validator: validateUserpwd }],
      },
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    async login() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log('00000000000000000');
          this.$store.dispatch("user/login", this.ruleForm).then(() => {
            this.$router.push({ path: this.redirect || "/" });
          });
        } else {
          console.log("登录失败");
          return false;
        }
      });
      // const res = await login();
    },
  },
};
</script>

<style>
</style>