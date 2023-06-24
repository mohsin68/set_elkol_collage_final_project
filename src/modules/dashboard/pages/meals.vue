<template>
  <div class="meals-page">
    <header class="d-flex justify-between items-center">
      <h1>Meals</h1>
      <v-btn
        color="primary"
        class="add-meal-btn"
        @click="
          dialog = true;
          edit = false;
        "
      >
        <v-icon class="mr-2">mdi-plus</v-icon>
        Add Meal
      </v-btn>
    </header>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
      <meal-card
        v-for="meal in meals"
        :key="meal.id"
        :meal="meal"
        @editMeal="editMeal"
      />
    </div>
    <v-dialog v-model="dialog" max-width="768px">
      <v-card>
        <!-- <v-container> -->
        <v-card-title>
          <span class="headline">{{ edit ? "Edit Meal" : "Add Meal" }}</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text
          class="d-flex gap-8 mt-4"
          style="padding-bottom: 0 !important"
        >
          <div class="meal__image w-[30%]">
            <img
              v-if="previewImage.length"
              class="w-32 h-32 rounded-full mx-auto"
              :src="previewImage"
              alt="meal image"
            />
            <div
              v-else
              class="bg-white w-32 h-32 d-flex item-center justify-center rounded-full mx-auto"
            >
              <v-icon size="50" color="dark"> mdi-food </v-icon>
            </div>
            <label
              class="text-center text-sm text-white block mt-4 border border-dashed py-2 cursor-pointer"
              for="meal-image"
            >
              <input
                id="meal-image"
                type="file"
                class="hidden"
                @change="handleImageUpload"
                accept="image/*"
              />
              <span>
                <v-icon class="mr-2" color="white">mdi-upload</v-icon>
                {{ edit ? "Change" : "Upload" }}
              </span>
            </label>
          </div>

          <div class="meal__info-form flex-1">
            <validation-observer class="grid grid-cols-2 gap-4" ref="add-meal">
              <validation-provider
                vid="name"
                name="Meal Name"
                v-slot="{ errors, validated, invalid }"
                rules="required"
              >
                <v-text-field
                  v-model="meal.name"
                  label="Meal Name"
                  outlined
                  dense
                  hide-details
                  class="mt-4"
                ></v-text-field>
                <v-errors v-if="validated && invalid" :data="errors" />
              </validation-provider>

              <validation-provider
                vid="category"
                name="Meal Category"
                v-slot="{ errors, validated, invalid }"
                rules="required"
              >
                <v-select
                  v-model="meal.category_slug"
                  :items="categories"
                  item-text="name"
                  value="slug"
                  label="Meal Category"
                  outlined
                  dense
                  hide-details
                  class="mt-4"
                ></v-select>
                <v-errors v-if="validated && invalid" :data="errors" />
              </validation-provider>

              <validation-provider
                vid="price"
                name="Meal Price"
                v-slot="{ errors, validated, invalid }"
                rules="required|numeric"
              >
                <v-text-field
                  v-model="meal.price"
                  label="Meal Price"
                  outlined
                  dense
                  hide-details
                  class="mt-4"
                ></v-text-field>
                <v-errors v-if="validated && invalid" :data="errors" />
              </validation-provider>

              <validation-provider
                vid="calories"
                name="Meal calories"
                v-slot="{ errors, validated, invalid }"
                rules="required|numeric"
              >
                <v-text-field
                  v-model="meal.calories"
                  label="Meal calories"
                  outlined
                  dense
                  hide-details
                  class="mt-4"
                ></v-text-field>
                <v-errors v-if="validated && invalid" :data="errors" />
              </validation-provider>

              <validation-provider
                vid="description"
                name="Meal Description"
                v-slot="{ errors, validated, invalid }"
                rules="required"
              >
                <v-textarea
                  v-model="meal.description"
                  label="Meal Description"
                  outlined
                  dense
                  hide-details
                  class="mt-4"
                ></v-textarea>
                <v-errors v-if="validated && invalid" :data="errors" />
              </validation-provider>

              <validation-provider
                vid="ingredients"
                name="Meal Ingredients"
                v-slot="{ errors, validated, invalid }"
                rules="required"
              >
                <v-textarea
                  v-model="meal.ingredients"
                  label="Meal Ingredients"
                  outlined
                  dense
                  hide-details
                  class="mt-4"
                ></v-textarea>
                <v-errors v-if="validated && invalid" :data="errors" />
              </validation-provider>

              <div class="warnings-wrapper mt-4 col-span-2">
                <div class="d-flex justify-between mb-4">
                  <h5>Warnings</h5>
                  <v-btn
                    color="primary"
                    class="add-warning-btn"
                    @click="meal.warnings.push('')"
                    small
                  >
                    <v-icon class="mr-2">mdi-plus</v-icon>
                    Add a Warning
                  </v-btn>
                </div>
                <validation-provider
                  vid="warning"
                  name="Warning"
                  v-slot="{ errors, validated, invalid }"
                  rules="required"
                >
                  <v-text-field
                    v-for="(warning, index) in meal.warnings"
                    :key="index"
                    v-model="meal.warnings[index]"
                    :label="`Warning ${index + 1}`"
                    outlined
                    dense
                    hide-details
                    :append-icon="index ? 'mdi-trash-can-outline' : ''"
                    @click:append="meal.warnings.splice(index, 1)"
                    class="mt-4"
                  ></v-text-field>
                  <v-errors v-if="validated && invalid" :data="errors" />
                </validation-provider>
              </div>
            </validation-observer>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="addMeal">
            {{ edit ? "Edit" : "Add" }}
          </v-btn>
        </v-card-actions>
        <!-- </v-container> -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import MealCard from "@/components/MealCard.vue";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import VErrors from "@/components/VErrors.vue";
export default {
  components: {
    MealCard,
    VErrors,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      dialog: false,
      categories: [],
      previewImage: "",
      meal: {
        name: "",
        description: "",
        category_slug: "",
        ingredients: "",
        price: "",
        image: "",
        calories: "",
        warnings: [""], // array of strings
      },
      edit: false,
      meals: [],
      meta: {},
    };
  },
  methods: {
    transformToFormData(obj) {
      const formData = new FormData();
      for (const key in obj) {
        if (Array.isArray(obj[key])) {
          obj[key].forEach((item) => {
            formData.append(`${key}[]`, item);
          });
        } else {
          formData.append(key, obj[key]);
        }
      }
      return formData;
    },
    async getAllMeals() {
      try {
        const { data } = await this.$api.get("/chef/meals");
        this.meals = data.data;
        this.meta = data.meta;
      } catch (error) {
        console.log(error);
      }
    },
    async addMeal() {
      const valid = await this.$refs["add-meal"].validate();
      if (!valid) return;
      const mealData = this.transformToFormData(this.meal);

      try {
        const { data } = await this.$api.post("/chef/meals", mealData);
        this.meals.push(data.data);
        this.dialog = false;
        this.$toast.success("Meal added successfully");
        this.resetMeal();
      } catch (error) {
        this.$toast.error(error.response.data.message);
      }
    },
    async editMeal(meal) {
      this.meal = meal;
      this.edit = true;
      this.dialog = true;
    },
    async updateMeal() {
      const valid = await this.$refs["add-meal"].validate();
      if (!valid) return;
      const mealData = this.transformToFormData(this.meal);
      try {
        const { data } = await this.$api.put(
          `/chef/meals/${this.meal.id}`,
          mealData
        );
        this.meals = this.meals.map((meal) => {
          if (meal.id === this.meal.id) {
            return data.data;
          }
          return meal;
        });
        this.dialog = false;
        this.$toast.success("Meal updated successfully");
        this.resetMeal();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteMeal(meal) {
      try {
        const { data } = await this.$api.delete(`/chef/meals/${meal.id}`);
        this.meals = this.meals.filter((m) => m.id !== meal.id);
        this.$toast.success("Meal deleted successfully");
      } catch (error) {
        console.log(error);
      }
    },
    resetMeal() {
      this.previewImage = "";
      this.meal = {
        name: "",
        category: "",
        price: "",
        image: "",
        description: "",
        ingredients: "",
        calories: "",
        warnings: [], // array of strings
      };
    },
    handleImageUpload(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
      };
      this.meal.image = file;
    },
    async getCats() {
      try {
        const { data } = await this.$api.get("/chef/meals/create");
        this.categories = data.data.categories;
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    edit() {
      if (!this.edit) {
        this.resetMeal();
      }
    },
  },
  created() {
    this.getAllMeals();
    this.getCats();
  },
};
</script>

<style>
</style>
