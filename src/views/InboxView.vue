<template>
  <main class="mail-view">
    <h1 class="mail-view__title">{{ typeOfMail }}</h1>
    <EmailList :typeOfMail="typeOfMail" />
  </main>
</template>

<script>
import EmailList from '../components/EmailList.vue';
import { defineProps } from 'vue';

export default {
  name: 'MailView',
  components: {
    EmailList
  },
  props: {
    typeOfMail: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.mail-view__title {
  text-align: left;
  font-size: 50px;
  margin: 2%;
}

.mail-view {
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  padding: 20px;
  box-sizing: border-box;
  font-family: sans-serif;
  color: #333;
}
</style>
