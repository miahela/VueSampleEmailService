<template>
  <div class="email-list">
    <h1 class="email-list__num-selected">Emails selected: {{ selectedEmails.size }}</h1>
    <div class="email-list__actions">
      <input id="checkbox-select-all" type="checkbox" v-model="allEmailsSelected" @change="toggleSelectAll" />
      <Actions />
    </div>
    <ul class="email-list__items">
      <EmailListItem v-for="email in filteredEmails" :key="email.id" :is-archived="typeOfMail === 'Archive'"
        :email="email" />
    </ul>
  </div>
</template>

<script>
import EmailListItem from "@/components/EmailListItem.vue";
import Actions from "@/components/Actions.vue";

export default {
  name: "EmailList",
  props: {
    typeOfMail: String,
  },
  components: {
    EmailListItem,
    Actions,
  },
  computed: {
    emails() {
      return this.$store.state.emails;
    },
    archivedEmails() {
      return this.$store.state.archivedEmails;
    },
    selectedEmails() {
      return this.$store.state.selectedEmails;
    },
    allEmailsSelected() {
      return this.emails.length > 0 && this.emails.length === this.selectedEmails.size;
    },
    filteredEmails() {
      return this.typeOfMail === "Archive" ? this.archivedEmails : this.emails;
    },
  },
  methods: {
    toggleSelectAll() {
      if (this.allEmailsSelected) {
        this.$store.commit("deselectAll");
      } else {
        this.$store.commit("selectAll");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.email-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 1000px;

  &__num-selected {
    margin: 0 0 20px 0;
    padding: 0;
    font-size: 30px;
  }

  &__actions {
    display: flex;
    align-items: left;
    margin-bottom: 20px;

    input {
      margin-right: 10px;
    }
  }

  &__items {
    padding: 0;
  }
}
</style>
