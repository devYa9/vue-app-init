<template>
    <div v-if="visible">
        <teleport to="body">
            <div>
                <div
                ref="popup"
                class="
                    tw-fixed tw-top-0 tw-left-0 tw-z-[50999] tw-right-0 tw-bottom-0
                    tw-flex tw-items-center tw-justify-center
                "
                >
                
                <v-fade-transition>
                        <div
                            v-if="showContent"
                            @click.self="resolve(false)"
                            :style="{'z-index': index}"
                            class="tw-w-full md:tw-min-w-[300px] !tw-overflow-auto !tw-max-h-screen"
                        >
                            <slot></slot>
                            
                        </div>
                </v-fade-transition>

                <div
                    @click="resolve(false)"
                    class="
                    tw-duration-300
                    tw-absolute
                    tw-top-0
                    tw-left-0
                    tw-w-full
                    tw-h-full
                    
                    tw-backdrop-blur-sm
                    tw-bg-black/20
                    tw-opacity-0
                    "
                    :class="{'!tw-opacity-100': visible}"
                ></div>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
export default {
    props: {
        visible: {
            required: true,
            default: false
        },
        closeable: {
            required: false,
            default: true
        },
        zIndex: {
            required: false,
            default: 0
        }
    },
    data() {
        return {
            showContent: false,
            defaultIndex: 50999
        };
    },

    computed: {
        index() {
            return this.zIndex + this.defaultIndex
        }
    },

    watch: {
        visible(value) {
            if(!value) {
                this.showContent = value;
            }
            else {
                setTimeout(() => {
                    this.showContent = value;
                }, 0)
            }
        },
    },
    methods: {
        resolve(value) {
            if(this.closeable) {
                this.$emit("cancel", value);
            }
        },
    },

    mounted() {
        this.showContent = this.visible;
    },

    unmounted() {

    }
};
</script>

<style>
</style>