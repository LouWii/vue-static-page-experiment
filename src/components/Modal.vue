<template>
    <div class="modal-module">
        <button class="btn btn-primary" @click.prevent="openModal">Modal</button>
        <foo-modal :name="modalName">
            <slot name="modal-content">Default modal content</slot>
        </foo-modal>
    </div>
</template>

<script>
import Vue from 'vue'
import VModal from 'vue-js-modal'

Vue.use(VModal, { componentName: "foo-modal" })

export default {
    name: 'Modal',
    components: {VModal},
    props: {
        modalName: {
            type: String,
            default: 'my-modal'
        }
    },
    data() {
        return {
            modalOpened: false,
        }
    },
    methods: {
        openModal: function() {
            this.$modal.show(this.modalName)
        }
    }
}
</script>