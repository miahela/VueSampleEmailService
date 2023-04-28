<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { onMounted, onBeforeUnmount } from 'vue';
import SidePanel from './components/SidePanel.vue';
import EmailListVue from './components/EmailList.vue';

</script>

<template>
  <div class="wrap">
    <SidePanel :unreadMessages="unreadMessages" @navigate="navigate" @logout="logout" />
    <RouterView />
    <!-- <router-view name="overlay" v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" v-if="Component" @close="$router.back()" />
      </transition>
    </router-view> -->
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  justify-content: space-between;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.email-details {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
}
</style>
