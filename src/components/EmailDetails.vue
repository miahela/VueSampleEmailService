<template>
  <div class="email-details">
    <div class="email-details__actions">
      <RouterLink to="/inbox" class="email-details__button email-details__button--white">
        Close (Esc)
      </RouterLink>
      <Actions :email-id="email.id" :is-archived="isArchived" :email-unread="email.unread"/>
    </div>
    <div class="email-details__header">
      <h1>{{ email.from }}</h1>
      <h2>{{ email.subject }}</h2>
    </div>
    <div class="email-details__body">
      <p>{{ email.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Actions from "@/components/Actions.vue";

export default {
  name: "EmailView",
  props: {
    emailId: {
      default: null,
    },
    isArchived: {
      default: false,
    },
  },
  components: {
    Actions,
  },
  computed: {
    ...mapGetters(["getEmailById"]),
    email() {
      return this.emailId !== null ? this.getEmailById(this.emailId) : null;
    },
  },
  watch: {
    $route(to) {
      this.emailId = parseInt(to.params.emailId, 10);
    },
  },
  created() {
    this.emailId = parseInt(this.$route.params.emailId, 10);
  },
  methods: {
    markAsRead(id) {
      this.$store.commit("markAsRead", id);
    },
    archive(id) {
      this.$store.commit("archiveEmail", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.email-details {
  &__actions {
    display: flex;
    gap: 10px;
  }

  &__button {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
    margin: 0 10px;
    font-size: large;

    &--white {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
