<template>
  <div class="chiefs-page">
    <div class="new-chiefs mb-8" v-if="chiefsRequests.length">
      <h3>New Chiefs Requests</h3>
      <div
        class="new-chiefs__list grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
      >
        <base-card
          v-for="chief in chiefsRequests"
          :key="chief.id"
          class="new-chiefs__card d-flex gap-4"
        >
          <div
            class="new-chiefs__card-image bg-white rounded-full p-4 w-32 h-32"
          >
            <img
              class="w-24 h-24 rounded-full object-cover mx-auto"
              src="@/assets/images/chef.png"
            />
          </div>

          <div class="new-chiefs__card-info flex-1">
            <h6>{{ chief.first_name }} {{ chief.last_name }}</h6>
            <ul class="px-0 mx-0 my-2">
              <li class="text-sm">Gender: {{ chief.gender }}</li>
              <li class="text-sm">Nationality: {{ chief.nationality }}</li>
              <li class="text-sm">
                Years of experience: {{ Math.floor(Math.random() * 10) + 1 }}
              </li>
              <li class="text-sm">certificate: {{ chief.certificate }}</li>
            </ul>

            <div class="card-info__actions d-flex gap-4 mt-4">
              <v-btn
                color="red"
                elevation="2"
                icon
                outlined
                @click="rejectChef(chief.id)"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-btn
                color="teal lighten-1"
                elevation="2"
                icon
                outlined
                @click="rejectChef(chief.id)"
              >
                <v-icon>mdi-check</v-icon>
              </v-btn>
            </div>
          </div>
        </base-card>
      </div>
    </div>
    <div class="no-chiefs-requests mt-20 text-center" v-else>
      <h3>No Chiefs Requests Right Now</h3>
    </div>

    <!-- <div class="our-chiefs">
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
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      chiefsRequests: [],
    };
  },
  methods: {
    getChiefsRequests() {
      this.$api
        .get("admin/chefs-requests")
        .then((res) => {
          this.chiefsRequests = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async acceptChef(id) {
      try {
        const { data } = await this.$api.post(`admin/chefs-requests/approve`, {
          id,
        });
        this.$toast.success(data.message);
        this.chiefsRequests = this.chiefsRequests.filter(
          (chief) => chief.id !== id
        );
      } catch (error) {
        console.log(error);
      }
    },
    async rejectChef(id) {
      try {
        const { data } = await this.$api.post(`admin/chefs-requests/reject`, {
          id,
        });
        this.$toast.success(data.message);
        this.chiefsRequests = this.chiefsRequests.filter(
          (chief) => chief.id !== id
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getChiefsRequests();
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
