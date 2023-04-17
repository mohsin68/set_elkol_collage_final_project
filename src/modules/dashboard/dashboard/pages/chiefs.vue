<template>
  <div class="chiefs-page">
    <div
      class="chiefs-list grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      <base-card class="chief-card" v-for="chief in chiefs" :key="chief.id">
        <div class="chief-card__image mb-4">
          <img
            class="w-32 h-32 rounded-full object-cover mx-auto"
            :src="chief.image"
            alt=""
          />
        </div>
        <div class="chief-info text-center">
          <h6 class="font-bold text-green">{{ chief.name }}</h6>
          <span class="text-sm">Deliver: {{ chief.delivery }}</span>
          <span class="text-xs text-yellow block my-2">
            Special Dish:
            <span class="text-white">{{ chief.special_dish }}</span>
          </span>
          <v-rating
            readonly
            background-color="grey lighten-2"
            color="primary"
            length="5"
            :value="chief.rating"
            size="40"
          ></v-rating>
        </div>
      </base-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chiefs: [
        {
          id: 1,
          name: "Mohamed Adeel",
          image: require("@/assets/images/chief.jpg"),
          rating: 3,
          special_dish: "Chicken Shawarma",
          delivery: "Giza",
        },
        {
          id: 2,
          name: "Mohamed Adeel",
          image: require("@/assets/images/chief.jpg"),
          rating: 3,
          special_dish: "Chicken Shawarma",
          delivery: "Giza",
        },
        {
          id: 3,
          name: "Mohamed Adeel",
          image: require("@/assets/images/chief.jpg"),
          rating: 3,
          special_dish: "Chicken Shawarma",
          delivery: "Giza",
        },
        {
          id: 4,
          name: "Mohamed Adeel",
          image: require("@/assets/images/chief.jpg"),
          rating: 3,
          special_dish: "Chicken Shawarma",
          delivery: "Giza",
        },
        {
          id: 5,
          name: "Mohamed Adeel",
          image: require("@/assets/images/chief.jpg"),
          rating: 3,
          special_dish: "Chicken Shawarma",
          delivery: "Giza",
        },
        {
          id: 6,
          name: "Mohamed Adeel",
          image: require("@/assets/images/chief.jpg"),
          rating: 3,
          special_dish: "Chicken Shawarma",
          delivery: "Giza",
        },
        {
          id: 7,
          name: "Mohamed Adeel",
          image: require("@/assets/images/chief.jpg"),
          rating: 3,
          special_dish: "Chicken Shawarma",
          delivery: "Giza",
        },
        {
          id: 8,
          name: "Mohamed Adeel",
          image: require("@/assets/images/chief.jpg"),
          rating: 3,
          special_dish: "Chicken Shawarma",
          delivery: "Giza",
        },
        {
          id: 9,
          name: "Mohamed Adeel",
          image: require("@/assets/images/chief.jpg"),
          rating: 3,
          special_dish: "Chicken Shawarma",
          delivery: "Giza",
        },
        {
          id: 10,
          name: "Mohamed Adeel",
          image: require("@/assets/images/chief.jpg"),
          rating: 3,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.v-rating {
  button {
    padding: 0px !important;
    width: 20px !important;
    height: 20px !important;
  }
}
</style>
