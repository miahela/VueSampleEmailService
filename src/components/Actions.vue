<template>
  <div class="actions">
    <button @click.stop="toggleArchive($event, emailId)">
      {{ isArchived ? "Unarchive" : "Archive" }} (a)
    </button>
    <button @click.stop="toggleReadStatus($event, emailId)">
      {{ emailUnread ? "Mark as read" : "Mark as unread" }} (r)
    </button>
  </div>
</template>
  
<script>
export default {
  name: "Actions",
  props: {
    emailId: {
      default: null,
    },
    isArchived: {
      default: false,
    },
    emailUnread: {
      default: true,
    },
  },
  computed: {
    selectedEmails() {
      return this.$store.state.selectedEmails;
    },
  },
  methods: {
    toggleReadStatus(event, emailId) {
      event.stopPropagation();
      if (emailId !== null) {
        this.$store.commit("markAsRead", emailId);
      } else if (this.selectedEmails.size > 0) {
        this.selectedEmails.forEach((emailId) => {
          this.$store.commit("markAsRead", emailId);
        });
      }
    },
    toggleArchive(event, emailId) {
      event.stopPropagation();
      if (emailId !== null) {
        this.$store.commit("archiveEmail", emailId);
      } else if (this.selectedEmails.size > 0) {
        this.selectedEmails.forEach((emailId) => {
          this.$store.commit("archiveEmail", emailId);
        });
      }
    },
  },
};
</script>
  
<style scoped>
.actions {
  display: flex;
  gap: 10px;
}

button {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px;
  z-index: 100;
}

button:hover {
  background-color: #f5f5f5;
}
</style>