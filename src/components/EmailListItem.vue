<template>
    <li class="email-list-item" :class="email.unread ? 'email-list-item-unread' : 'email-list-item-read'">
      <div class="together">
        <input @click.stop="selectItem" class="select-email" type="checkbox" :checked="email.selected">
        <RouterLink :to="`/${typeOfMail}/email/${email.id}`" @click.native="markAsRead(email.id)">
          <div>
            <h3>{{ email.from }}</h3>
            <p>{{ email.subject }}</p>
          </div>
        </RouterLink>
      </div>
      <Actions :email-id="email.id" :is-archived="isArchived" :email-unread="email.unread" />
    </li>
  </template>
  
  <script>
  import Actions from "@/components/Actions.vue";
  
  export default {
    name: "EmailListItem",
    props: {
      email: {
        required: true,
      },
      isArchived: {
        default: false,
      },
    },
    components: {
      Actions,
    },
    computed: {
      typeOfMail() {
        return this.isArchived ? "archived" : "inbox";
      },
    },
    methods: {
      markAsRead(emailId) {
        this.$store.commit("markAsRead", emailId);
      },
      selectItem(event) {
        event.stopPropagation();
        const action = this.email.selected ? "deselectEmail" : "selectEmail";
        this.$store.commit(action, this.email.id);
      },
    },
  };
  </script>
  
  <style scoped>
  .select-email {
    z-index: 100;
  }
  
  input[type="checkbox"] {
    margin-right: 40px;
  }
  
  .email-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 10px 0;
    cursor: pointer;
    background: #cec7c7;
  }
  
  .email-list-item-unread {
    background: #cec7c7;
    font-weight: bold;
  }
  
  .email-list-item-read {
    opacity: 0.6;
  }
  
  .together {
    display: flex;
  }
  </style>  