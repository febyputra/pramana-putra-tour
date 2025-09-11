<template>
  <div class="fixed bottom-6 right-6">
    <a :href="whatsappUrl" target="_blank" class="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
      <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-2xl" />
    </a>
    
    <transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 transform scale-95 translate-y-2" enter-to-class="opacity-100 transform scale-100 translate-y-0" leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 transform scale-100 translate-y-0" leave-to-class="opacity-0 transform scale-95 translate-y-2">
      <div v-show="showTooltip" class="absolute bottom-20 right-0 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap">
        Chat dengan kami di Whatsapp
        <div class="absolute -bottom-1 right-6 w-2 h-2 bg-gray-800 transform rotate-45"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FloatingWhatsapp',
  data() {
    return {
      showTooltip: false,
      phoneNumber: '62881038411816',
      defaultMessage: 'Halo! Saya tertarik dengan paket tour Pramana Putra Tour.'
    }
  },
  computed: {
    whatsappUrl() {
      const message = encodeURIComponent(this.defaultMessage)
      return `https://wa.me/${this.phoneNumber}?text=${message}`
    }
  }
}
</script>