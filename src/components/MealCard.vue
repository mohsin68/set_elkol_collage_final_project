<template>
  <base-card class="meal-card relative d-flex gap-4">
    <div class="meal__image w-28 h-28 rounded-full self-start">
      <img
        class="w-full h-full rounded-full object-cover"
        src="@/assets/images/meal.jpg"
        alt="meal image"
      />
    </div>
    <div class="meal-info">
      <h4 class="meal-name pe-3">{{ meal.name }}</h4>
      <p class="meal-category text-muted text-sm">{{ meal.category }}</p>
      <span class="meal-price text-green font-bold">{{ meal.price }} EGP</span>
    </div>
    <v-menu close-on-content-click transition="scale-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="absolute top-2 right-2"
          dark
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item link dense @click="$emit('editMeal', meal)">
          <v-list-item-title class="text-sm text-green">
            <v-icon color="green" class="mr-2">mdi-pencil</v-icon>
            Edit
          </v-list-item-title>
        </v-list-item>
        <v-list-item link dense>
          <v-list-item-title class="text-sm text-red">
            <v-icon color="red" class="mr-2">mdi-delete</v-icon>
            Delete
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </base-card>
</template>

<script>
export default {
  props: {
    meal: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>
