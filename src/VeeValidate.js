import Vue from "vue";
import {
  ValidationObserver,
  ValidationProvider,
  extend
} from "vee-validate";
import { required, email, min, max } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "This field is required"
});
extend("email", {
  ...email,
  message: "This field must be a valid email"
});
extend("min", {
  ...min,
  message: "This field must be {length} characters or less"
});
extend("max", {
  ...max,
  message: "This field must be {length} characters or less"
});
extend('confirmed', {
  params: [ 'target' ],
  validate (value, { target }) {
    return value === target;
  },
  message: 'Password confirmation does not match'
}
);

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

export { ValidationProvider, ValidationObserver };


