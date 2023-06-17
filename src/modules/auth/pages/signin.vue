<template>
  <div class="sign-in mt-2">
    <v-form>
      <h1 class="text-2xl font-bold text-center mb-4">Sign In</h1>

      <validation-observer ref="sign-in">
        <validation-provider
          vid="email"
          name="Email"
          v-slot="{ errors, validated, invalid }"
          rules="required|email"
        >
          <v-text-field
            v-model="form.email"
            label="Email"
            dense
            outlined
            hide-details
          />
          <v-errors v-if="validated && invalid" :data="errors" />
        </validation-provider>
        <validation-provider
          vid="password"
          name="Password"
          v-slot="{ errors, validated, invalid }"
          rules="required|min:8"
        >
          <v-text-field
            v-model="form.password"
            label="Password"
            dense
            outlined
            hide-details
            type="password"
            class="mt-4"
          />
          <v-errors v-if="validated && invalid" :data="errors" />
        </validation-provider>
        <v-btn
          color="primary"
          class="mt-4"
          @click="signin"
          block
          :loading="loading"
        >
          Sign In
        </v-btn>
      </validation-observer>
    </v-form>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import VErrors from "@/components/VErrors.vue";
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
    VErrors,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    async signin() {
      const valid = await this.$refs["sign-in"].validate();
      if (!valid) return;
      try {
        this.loading = true;
        const data = await this.$store.dispatch("auth", this.form);
        this.$toast.success("Logged in successfully");
        if (data.roles[0] == "super-admin")
          this.$router.push({ name: "admin-dashboard" });
        else this.$router.push({ name: "chef-dashboard" });
      } catch (err) {
        if (err.response.status === 401) {
          return this.$toast.error("Invalid credentials");
        }
        this.$refs["sign-in"].setErrors(err.response.data.errors);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
</style>
