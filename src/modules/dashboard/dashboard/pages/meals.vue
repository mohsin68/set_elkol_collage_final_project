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
    <v-dialog v-model="dialog" max-width="668px">
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
              v-if="meal.image.length"
              class="w-32 h-32 rounded-full mx-auto"
              :src="meal.image"
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
            <v-text-field
              v-model="meal.name"
              label="Meal Name"
              outlined
              dense
            ></v-text-field>
            <!-- text-area -->
            <v-textarea
              v-model="meal.description"
              label="Meal Description"
              outlined
              dense
            ></v-textarea>
            <v-text-field
              v-model="meal.category"
              label="Meal Category"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              v-model="meal.price"
              label="Meal Price"
              outlined
              dense
            ></v-text-field>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="green" block @click="addMeal">
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
export default {
  components: { MealCard },
  data() {
    return {
      dialog: false,
      meal: {
        name: "",
        description: "",
        category: "",
        price: "",
        image: "",
      },
      edit: false,
      meals: [
        {
          id: 1,
          name: "kofta",
          category: "mashawy",
          price: 20,
        },
        {
          id: 2,
          name: "kofta",
          category: "mashawy",
          price: 20,
        },
        {
          id: 3,
          name: "kofta",
          category: "mashawy",
          price: 20,
        },
        {
          id: 4,
          name: "kofta",
          category: "mashawy",
          price: 20,
        },
        {
          id: 5,
          name: "kofta",
          category: "mashawy",
          price: 20,
        },
        {
          id: 6,
          name: "kofta",
          category: "mashawy",
          price: 20,
        },
        {
          id: 7,
          name: "kofta",
          category: "mashawy",
          price: 20,
        },
        {
          id: 8,
          name: "kofta",
          category: "mashawy",
          price: 20,
        },
        {
          id: 9,
          name: "kofta",
          category: "mashawy",
          price: 20,
        },
        {
          id: 10,
          name: "kofta",
          category: "mashawy",
          price: 20,
        },
        {
          id: 11,
          name: "kofta",
          category: "mashawy",
          price: 20,
        },
        {
          id: 12,
          name: "kofta",
          category: "mashawy",
          price: 20,
        },
      ],
    };
  },
  methods: {
    addMeal() {
      this.meals.unshift(this.meal);
      this.meal = {
        name: "",
        category: "",
        price: "",
        image: "",
        description: "",
      };
      this.dialog = false;
    },
    editMeal(meal) {
      this.meal = meal;
      this.dialog = true;
      this.edit = true;
    },
    handleImageUpload(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.meal.image = reader.result;
      };
    },
  },
  watch: {
    edit() {
      if (!this.edit) {
        this.meal = {
          name: "",
          category: "",
          price: "",
        };
      }
    },
  },
};
</script>

<style>
</style>
