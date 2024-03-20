<script>
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['click'],
  props: {
    sources: {
      type: Object,
      required: true
    }
  },
})
</script>

<template>
  <div :style="`background-image: url(${sources.emoji});`" class="vue3-discord-emojipicker__emojibutton filter grayscale hover:filter-none transform transition duration-200 cursor-pointer hover:scale-110" @click="$emit('click', 'emoji')" />
</template>