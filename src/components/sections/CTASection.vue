<template>
  <section ref="sectionRef" class="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-inter">
    <div class="container mx-auto px-4 text-center">
      <h2
        class="text-4xl font-bold mb-6 transition-all duration-700 ease-out"
        :class="isVisible.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        Ready to Explore Bali with Us?
      </h2>
      <p
        class="text-xl mb-8 opacity-90 max-w-2xl mx-auto transition-all duration-700 ease-out"
        :class="isVisible.text ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        Join thousands of satisfied travelers who have discovered the magic of Bali through our expertly crafted tours
      </p>
      <div
        class="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ease-out"
        :class="isVisible.buttons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <router-link 
          to="/tour-packages" 
          class="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
        >
          <font-awesome-icon :icon="['fas', 'map-marked-alt']" class="mr-2" />
          View Our Packages
        </router-link>
        <a 
          href="https://wa.me/62881038411816" 
          target="_blank"
          class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-flex items-center justify-center"
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="mr-2" />
          Contact Us Now
        </a>
      </div>
    </div>
  </section>
  
</template>

<script>
export default {
  name: 'CTASection',
  data() {
    return {
      isVisible: {
        title: false,
        text: false,
        buttons: false
      }
    }
  },
  mounted() {
    const sectionElement = this.$refs.sectionRef
    if (!sectionElement) return

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        this.isVisible.title = true
        setTimeout(() => { this.isVisible.text = true }, 120)
        setTimeout(() => { this.isVisible.buttons = true }, 240)
        observer.disconnect()
      }
    }, { threshold: 0.2 })

    observer.observe(sectionElement)
  }
}
</script>