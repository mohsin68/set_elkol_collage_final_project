<template>
  <div class="delivery-page">
    <div class="new-delivery mb-8">
      <h3>New delivery Requests</h3>
      <div
        class="new-delivery__list grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
      >
        <base-card
          v-for="chief in 5"
          :key="chief"
          class="new-delivery__card d-flex gap-4"
        >
          <div
            class="new-delivery__card-image w-32 h-32 bg-white rounded-full overflow-hidden"
          >
            <img
              class="transform scale-75 mx-auto"
              src="@/assets/images/delivery.webp"
            />
          </div>

          <div class="new-delivery__card-info flex-1">
            <h6>Ahmed Mohsen</h6>
            <ul class="px-0 mx-0 my-2">
              <li class="text-sm">Gender: Male</li>
              <li class="text-sm">Deliver: Cairo</li>
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
    <div class="our-delivires">
      <h3>Our delivires</h3>
      <div
        class="delivery-list grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4"
      >
        <base-card class="chief-card" v-for="chief in delivery" :key="chief.id">
          <div
            class="chief-card__image w-32 h-32 rounded-full mb-4 bg-white mx-auto overflow-hidden"
          >
            <img class="mx-auto transform scale-75" :src="chief.image" alt="" />
          </div>
          <div class="chief-info text-center">
            <h6 class="font-bold text-green">{{ chief.name }}</h6>
            <span class="text-sm">Deliver: {{ chief.delivery }}</span>

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
      delivery: [
        {
          id: 1,
          name: "Mohamed Adeel",
          image: require("@/assets/images/delivery.webp"),
          rating: 3,

          delivery: "Giza",
        },
        {
          id: 2,
          name: "Mohamed Adeel",
          image: require("@/assets/images/delivery.webp"),
          rating: 3,

          delivery: "Giza",
        },
        {
          id: 3,
          name: "Mohamed Adeel",
          image: require("@/assets/images/delivery.webp"),
          rating: 3,

          delivery: "Giza",
        },
        {
          id: 4,
          name: "Mohamed Adeel",
          image: require("@/assets/images/delivery.webp"),
          rating: 3,

          delivery: "Giza",
        },
        {
          id: 5,
          name: "Mohamed Adeel",
          image: require("@/assets/images/delivery.webp"),
          rating: 3,

          delivery: "Giza",
        },
        {
          id: 6,
          name: "Mohamed Adeel",
          image: require("@/assets/images/delivery.webp"),
          rating: 3,

          delivery: "Giza",
        },
        {
          id: 7,
          name: "Mohamed Adeel",
          image: require("@/assets/images/delivery.webp"),
          rating: 3,

          delivery: "Giza",
        },
        {
          id: 8,
          name: "Mohamed Adeel",
          image: require("@/assets/images/delivery.webp"),
          rating: 3,

          delivery: "Giza",
        },
        {
          id: 9,
          name: "Mohamed Adeel",
          image: require("@/assets/images/delivery.webp"),
          rating: 3,

          delivery: "Giza",
        },
        {
          id: 10,
          name: "Mohamed Adeel",
          image: require("@/assets/images/delivery.webp"),
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
