<template>
    <div class="side-panel">
        <div class="side-panel__buttons">
            <RouterLink to="/inbox">
                <button class="side-panel__button">Inbox ({{ inboxMessages }})</button>
            </RouterLink>
            <RouterLink to="/archive">
                <button class="side-panel__button">Archive ({{ archivedMessages }})</button>
            </RouterLink>
        </div>
        <div class="side-panel__logout">
            <button class="side-panel__button">Logout</button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "SidePanel",
    computed: {
        inboxMessages() {
            return this.$store.state.emails.length;
        },
        archivedMessages() {
            return this.$store.state.archivedEmails.length;
        },
    },
};
</script>
  
<style lang="scss" scoped>
.side-panel {
    background-color: rgb(25, 24, 24);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    padding: 20px;
    width: 300px;

    &__buttons {
        display: flex;
        flex-direction: column;
    }

    &__button {
        background-color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        margin-bottom: 10px;
        padding: 10px;
        width: 100%;

        &:hover {
            background-color: rgba(255, 255, 255, 0.9);
        }
    }

    &__logout {
        margin-bottom: 20px;
    }
}
</style>
  