<template>
  <teleport to=".email-modal">
    <div :class="['email-detail-view', { 'email-detail-view--hidden': !showEmail }]">
      <main>
        <h1 class="email-detail-view__title">Email</h1>
        <EmailDetails :email="id" />
      </main>
    </div>
  </teleport>
</template>

<script>
import EmailDetails from "@/components/EmailDetails.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  components: {
    EmailDetails,
  },
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const showEmail = ref(true);

    return {
      id,
      showEmail,
    };
  },
};
</script>

<style lang="scss" scoped>
.email-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.email-detail-view {
  margin: 0 auto;
  width: 40%;
  margin-left: 55%;
  max-width: 1100px;
  padding: 20px;
  box-sizing: border-box;
  font-family: sans-serif;
  color: #333;
  background: #d438d7;

  &__title {
    text-align: center;
  }

  &--hidden {
    display: none;
  }
}

main {
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  padding: 20px;
  box-sizing: border-box;
  font-family: sans-serif;
  color: #333;
}
</style>