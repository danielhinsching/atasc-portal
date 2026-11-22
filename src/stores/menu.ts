import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenu = defineStore('menu', () => {
  const aberto = ref(false)
  const alternar = () => { aberto.value = !aberto.value }
  const fechar = () => { aberto.value = false }
  return { aberto, alternar, fechar }
})
