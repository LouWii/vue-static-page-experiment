<template>
    <div class="modal-module">
        <button class="btn btn-primary" @click.prevent="openModal">Modal</button>
        <foo-modal name="test-modal">
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
    data() {
        return {
            modalOpened: false,
        }
    },
    methods: {
        openModal: function() {
            this.$modal.show('test-modal');
        }
    }
}
</script>