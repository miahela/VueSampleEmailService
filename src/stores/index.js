import {
    createStore
} from 'vuex';

export const store = createStore({
    state: {
        emails: [{
                id: 1,
                from: 'John Doe',
                subject: 'Hello World',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet urna, vitae aliquam nisl nunc eu nunc. Sed vitae nunc eget nisl aliquam aliquet. Sed vitae nunc eget nisl aliquam aliquet.',
                unread: true,
                selected: false,
            },
            {
                id: 2,
                from: 'Jane Doe',
                subject: 'Hello World',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet urna, vitae aliquam nisl nunc eu nunc. Sed vitae nunc eget nisl aliquam aliquet. Sed vitae nunc eget nisl aliquam aliquet.',
                unread: true,
                selected: false,
            },
            {
                id: 3,
                from: 'John Smith',
                subject: 'Hello World',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien aliquet urna, vitae aliquam nisl nunc eu nunc. Sed vitae nunc eget nisl aliquam aliquet. Sed vitae nunc eget nisl aliquam aliquet.',
                unread: true,
                selected: false,
            },
        ],
        archivedEmails: [],
        selectedEmails: new Set(),
    },
    getters: {
        getEmails: (state) => state.emails,
        getArchivedEmails: (state) => state.archivedEmails,
        getSelectedEmails: (state) => state.selectedEmails,
        getEmailById: (state) => (id) => state.emails.find((email) => email.id === id),
    },
    mutations: {
        selectEmail(state, emailId) {
            state.emails.find((email) => email.id === emailId).selected = true;
            state.selectedEmails.add(emailId);
        },
        deselectEmail(state, emailId) {
            state.emails.find((email) => email.id === emailId).selected = false;
            state.selectedEmails.delete(emailId);
        },
        selectAll(state) {
            state.emails.forEach((email) => this.commit('selectEmail', email.id));
        },
        deselectAll(state) {
            state.emails.forEach((email) => this.commit('deselectEmail', email.id));
        },
        archiveEmail(state, emailId) {
            state.archivedEmails.push(state.emails.find((email) => email.id === emailId));
            state.emails = state.emails.filter(email => email.id !== emailId);
        },
        unarchiveEmail(state, emailId) {
            state.emails.push(state.archivedEmails.find((email) => email.id === emailId));
            state.archivedEmails = state.archivedEmails.filter(email => email.id !== emailId);
        },
        markAsRead(state, emailId) {
            state.emails.find((email) => email.id === emailId).unread = false;
        },
    },
});