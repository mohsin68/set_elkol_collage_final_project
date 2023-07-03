<template>
  <div class="chiefs-page">
    <v-loading :loading="loading" v-if="loading" />
    <tamplate v-else>
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
                <li class="text-sm">Experince: {{ chief.certificate }}</li>
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
    </tamplate>
  </div>
</template>

<script>
import VLoading from "@/components/VLoading.vue";
export default {
  components: { VLoading },
  data() {
    return {
      chiefsRequests: [],
      loading: false,
    };
  },
  methods: {
    getChiefsRequests() {
      this.loading = true;
      this.$api
        .get("admin/chefs-requests")
        .then((res) => {
          this.chiefsRequests = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async acceptChef(id) {
      this.loading = true;
      try {
        const { data } = await this.$api.post(`admin/chefs-requests/approve`, {
          id,
        });
        this.$toast.success("Chef approved successfully");
        this.chiefsRequests = this.chiefsRequests.filter(
          (chief) => chief.id !== id
        );
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async rejectChef(id) {
      this.loading = true;
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
      } finally {
        this.loading = false;
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
