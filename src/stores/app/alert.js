import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alertStore', {
    state: () => ({
        alerts: [],

        interval: null
    }),

    getters: {},

    actions: {
        toggle(type, message) {
            this.alerts.push({
                id: Date.now(),
                type,
                message,
            });
            this.resive(6);
            this.clearAlerts();
        },


        clearAlerts() {
            clearInterval(this.interval);
            this.interval = setInterval(() => {
                this.alerts.shift();
                if(this.alerts.length == 0) {
                    clearInterval(this.interval)
                }
            }, 3000);
        },

        resive(length) {
            if(this.alerts.length > length) {
                this.alerts = this.alerts.slice(this.alerts.length - length);
            }

        },

        setAlerts(value) {
            this.alerts = value;
        },


    }
});