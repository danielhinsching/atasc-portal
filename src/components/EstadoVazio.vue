<script setup lang="ts">
defineProps<{ mensagem: string }>()
</script>

<template>
  <div role="status" class="rounded-card border border-dashed border-linha bg-white p-8 text-center text-suave">
    {{ mensagem }}
  </div>
</template>
