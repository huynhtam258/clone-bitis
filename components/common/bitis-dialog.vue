<template>
  <teleport to="body">
    <Transition name="scale">
      <div v-if="isOpen" class="bitis-dialog" @click="closeDialog">
        <div class="dialog-overlay">
          <div class="dialog-content" @click.stop>
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({ isOpen: Boolean });
const emit = defineEmits(['update:isOpen']);

const closeDialog = () => emit('update:isOpen', false);
</script>

<style lang="scss" scoped>
.bitis-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}

/* Overlay */
.dialog-overlay {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.scale-enter-active, .scale-leave-active {
  transition: all 0.3s ease-out;
}
.scale-enter-from, .scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-content {
  background: white;
  min-width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  height: calc(100vh - 45px);
  width: 100vw;
}
</style>