import { useAlertStore } from '@/stores/';

export default (message, type = 'success') => {
    const store = useAlertStore();
    store.toggle(type, message);
}