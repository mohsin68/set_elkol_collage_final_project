<template>
  <div class="sign-in mt-2">
    <v-form>
      <div class="text-center">
        <h1 class="text-2xl font-bold">Sign In</h1>
      </div>
      <v-text-field
        v-model="email"
        label="Email"
        outlined
        dense
        hide-details
        class="mt-4"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        outlined
        dense
        hide-details
        class="mt-4"
        type="password"
      ></v-text-field>
      <div class="mt-4">
        <v-btn block color="primary">Sign In</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style>
</style>
