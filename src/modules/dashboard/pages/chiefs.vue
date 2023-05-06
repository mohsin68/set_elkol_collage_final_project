<template>
  <div class="chiefs-page">
    <div class="new-chiefs mb-8">
      <h3>New Chiefs Requests</h3>
      <div
        class="new-chiefs__list grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
      >
        <base-card
          v-for="chief in 5"
          :key="chief"
          class="new-chiefs__card d-flex gap-4"
        >
          <div class="new-chiefs__card-image">
            <img
              class="w-32 h-32 rounded-full object-cover mx-auto"
              src="@/assets/images/chief.jpg"
            />
          </div>

          <div class="new-chiefs__card-info flex-1">
            <h6>Ahmed Mohsen</h6>
            <ul class="px-0 mx-0 my-2">
              <li class="text-sm">Gender: Male</li>
              <li class="text-sm">Years of experience: 4</li>
            </ul>

            <div class="card-info__actions d-flex justify-end gap-4 mt-4">
              <v-btn color="grey lighten-1" elevation="2" icon outlined>
                <v-icon>mdi-eye</v-icon>
              </v-btn>
              <v-btn color="red" elevation="2" icon outlined>
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-btn color="teal lighten-1" elevation="2" icon outlined>
                <v-icon>mdi-check</v-icon>
              </v-btn>
            </div>
          </div>
        </base-card>
      </div>
    </div>
    <div class="our-chiefs">
      <h3>Our Chiefs</h3>
      <div
        class="chiefs-list grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4"
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
