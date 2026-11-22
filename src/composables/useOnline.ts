import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useOnline() {
  const online = ref(typeof navigator === 'undefined' ? true : navigator.onLine)
  const ligar = () => { online.value = true }
  const desligar = () => { online.value = false }
  onMounted(() => { window.addEventListener('online', ligar); window.addEventListener('offline', desligar) })
  onBeforeUnmount(() => { window.removeEventListener('online', ligar); window.removeEventListener('offline', desligar) })
  return online
}
