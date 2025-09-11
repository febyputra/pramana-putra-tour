<template>
  <section id="home" class="min-h-screen relative flex items-center font-inter overflow-hidden">
    <!-- Background image with more transparency -->
    <div class="absolute inset-0 z-0">
      <img :src="backgroundImage" alt="Bali Background" class="w-full h-full object-cover" />
    </div>
    
    <!-- Dark overlay for better text readability - UPDATED -->
    <div class="absolute inset-0 z-5 bg-black opacity-50"></div>
    
    <!-- Animated background particles -->
    <div class="absolute inset-0 z-20">
      <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-30 animate-float animate-delay-100"></div>
      <div class="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-40 animate-float animate-delay-300"></div>
      <div class="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-25 animate-float animate-delay-500"></div>
      <div class="absolute top-2/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-35 animate-float animate-delay-700"></div>
    </div>

    <div class="container mx-auto px-4 relative z-30">
      <div class="text-center text-white">
        <!-- Main heading with staggered animation -->
        <div class="overflow-hidden">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-up animate-delay-200">
            Explore <span class="text-yellow-400 animate-pulse-custom">Bali</span>
            <br>
            <span class="animate-slide-in-left animate-delay-400">with Us</span>
          </h1>
        </div>
        
        <!-- Subtitle with fade-in animation -->
        <p class="text-xl md:text-2xl mb-8 opacity-0 animate-fade-in animate-delay-600">
          An amazing travel experience with the best service
        </p>

        <!-- Buttons with staggered slide-in animation -->
        <div class="flex flex-col md:flex-row gap-4 md:space-x-4 justify-center items-center">
          <button
            @click="goToTourPackages"
            class="w-full md:w-auto bg-yellow-400 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 opacity-0 animate-slide-in-left animate-delay-800 hover:shadow-lg hover:shadow-yellow-400/25"
          >
            <font-awesome-icon icon="map-marker-alt" class="mr-2" />
            Get More Packages
          </button>
          <button
            @click="openWhatsApp"
            class="w-full md:w-auto border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transform hover:scale-105 transition-all duration-300 opacity-0 animate-slide-in-right animate-delay-800 hover:shadow-lg hover:shadow-white/25"
          >
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="mr-2" />
            Contact Us
          </button>
        </div>
      </div>
    </div>

    <!-- Enhanced floating decorative elements -->
    <div class="absolute top-20 left-10 animate-float animate-delay-100 z-20">
      <font-awesome-icon icon="paper-plane" class="text-white text-4xl opacity-20 hover:opacity-40 transition-opacity duration-300" />
    </div>
    <div class="absolute bottom-20 right-10 animate-float animate-delay-300 z-20">
      <font-awesome-icon icon="umbrella-beach" class="text-white text-3xl opacity-20 hover:opacity-40 transition-opacity duration-300" />
    </div>
    <div class="absolute top-1/2 left-5 animate-float animate-delay-500 z-20">
      <font-awesome-icon icon="compass" class="text-yellow-400 text-2xl opacity-15 hover:opacity-30 transition-opacity duration-300" />
    </div>
    <div class="absolute top-1/4 right-5 animate-float animate-delay-700 z-20">
      <font-awesome-icon icon="mountain" class="text-white text-2xl opacity-15 hover:opacity-30 transition-opacity duration-300" />
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-custom animate-delay-1000 z-30">
      <div class="flex flex-col items-center text-white opacity-60">
        <span class="text-sm mb-2">Scroll Down</span>
        <font-awesome-icon icon="chevron-down" class="text-lg" />
      </div>
    </div>

  </section>
</template>

<script>
import backgroundImg from '../../assets/ubud.png'

export default {
  name: 'HeroSection',
  data() {
    return {
      backgroundImage: backgroundImg,
      phoneNumber: '62881038411816',
      defaultMessage: 'Hello! I am interested in the Pramana Putra Tour package.'
    }
  },
  methods: {
    scrollToSection(section) {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth'})
      }
    },
    goToTourPackages() {
      this.$router.push('/tour-packages')
    },
    openWhatsApp() {
      const message = encodeURIComponent(this.defaultMessage)
      const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${message}`
      window.open(whatsappUrl, '_blank')
    },
  },
}
</script>