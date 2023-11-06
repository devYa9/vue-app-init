

export default {
    install(app) {
        app.config.globalProperties.$frontend = (value) => value;

    }
}