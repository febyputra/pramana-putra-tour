<template>
  <transition name="fade-up" appear>
  <footer class="bg-gray-800 text-white py-12 font-inter">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <i class="fas fa-mountain text-2xl text-blue-400"></i>
            <span class="text-xl font-bold">Pramana Putra Tour</span>
          </div>
          <p class="text-gray-400 mb-6 leading-relaxed">
            A trusted tour agent for an exciting travel experience on Bali's Island of the Gods.
          </p>
          
          <!-- Social Media -->
          <div class="flex space-x-4">
            <a 
              v-for="social in socialMedia" 
              :key="social.name"
              :href="social.url" 
              target="_blank"
              class="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110 social-link"
              :aria-label="social.name"
            >
              <i :class="social.icon + ' text-xl'"></i>
            </a>
          </div>
        </div>

        <!-- Popular Packages -->
        <div>
          <h3 class="text-lg font-bold mb-6 text-blue-400">Popular Packages</h3>
          <ul class="space-y-3">
            <li v-for="pkg in popularPackages" :key="pkg.name">
              <a 
                :href="pkg.link" 
                class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <i class="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                {{ pkg.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <!-- <div>
          <h3 class="text-lg font-bold mb-6 text-blue-400">Layanan Kami</h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.name">
              <a 
                :href="service.link" 
                class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <i class="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                {{ service.name }}
              </a>
            </li>
          </ul>
        </div> -->

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-bold mb-6 text-blue-400">Contact Info</h3>
          <ul class="space-y-4">
            <li v-for="contact in contactInfo" :key="contact.type" class="flex items-start space-x-3">
              <i :class="contact.icon + ' text-blue-400 mt-1'"></i>
              <div>
                <div class="text-gray-300 text-sm">{{ contact.label }}</div>
                <a 
                  v-if="contact.link" 
                  :href="contact.link" 
                  class="text-white hover:text-blue-400 transition-colors duration-300"
                  target="_blank"
                >
                  {{ contact.value }}
                </a>
                <span v-else class="text-white">{{ contact.value }}</span>
              </div>
            </li>
          </ul>

          <!-- Certifications -->
          <!-- <div class="mt-6 pt-6 border-t border-gray-700">
            <div class="text-sm text-gray-400 mb-2">Certified & Licensed</div>
            <div class="flex space-x-4">
              <div class="bg-gray-700 px-3 py-1 rounded text-xs text-white">
                Licensed Tour Operator
              </div>
            </div>
          </div> -->
        </div>
      </div>

      <!-- Newsletter Subscription -->
      <!-- <div class="border-t border-gray-700 mt-12 pt-8">
        <div class="text-center">
          <h3 class="text-xl font-bold mb-4">Dapatkan Update Terbaru</h3>
          <p class="text-gray-400 mb-6 max-w-md mx-auto">
            Berlangganan newsletter kami untuk mendapatkan penawaran spesial dan update destinasi wisata terbaru
          </p>
          
          <div class="flex max-w-md mx-auto">
            <input 
              v-model="newsletter.email"
              type="email" 
              placeholder="Masukkan email Anda"
              class="flex-1 px-4 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border-r border-gray-600"
            >
            <button 
              @click="subscribeNewsletter"
              class="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg transition-colors duration-300 font-semibold"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div> -->

      <!-- Bottom Footer -->
      <div class="border-t border-gray-700 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p class="text-gray-400 mb-4 md:mb-0">
            &copy; 2025 Pramana Putra Tour. All rights reserved.
          </p>
          
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
        
        <div class="text-center mt-4">
          <p class="text-gray-500 text-sm">
            Designed with <i class="fas fa-heart text-red-500 mx-1"></i> for amazing journeys
          </p>
        </div>
      </div>
    </div>
  </footer>
  </transition>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      newsletter: {
        email: ''
      },
      socialMedia: [
        {
          name: 'Facebook',
          icon: 'fab fa-facebook',
          url: 'https://facebook.com/pramanaputratour'
        },
        {
          name: 'Instagram',
          icon: 'fab fa-instagram',
          url: 'https://instagram.com/pramanaputratour'
        }
      ],
      popularPackages: [
        { name: 'Full Day Ubud Tour', link: '#packages' },
        { name: 'Kintamani Volcano Tour', link: '#packages' },
        { name: 'Tanah Lot Sunset', link: '#packages' },
        { name: 'Nusa Penida Day Trip', link: '#packages' }
      ],
      services: [
        { name: 'Airport Transfer', link: '#contact' },
        { name: 'Hotel Booking', link: '#contact' },
        { name: 'Car Rental', link: '#contact' },
        { name: 'Custom Tour', link: '#contact' },
      ],
      contactInfo: [
        {
          type: 'whatsapp',
          label: 'WhatsApp',
          value: '+62 881 0384 118 16',
          icon: 'fab fa-whatsapp',
          link: 'https://wa.me/62881038411816'
        },
        {
          type: 'email',
          label: 'Email',
          value: 'info@pramanaputratour.com',
          icon: 'fas fa-envelope',
          link: 'mailto:info@pramanaputratour.com'
        },
        {
          type: 'address',
          label: 'Address',
          value: 'Jl. Raya Ubud No. 123, Gianyar, Bali 80571',
          icon: 'fas fa-map-marker-alt'
        }
      ]
    }
  },
  methods: {
    subscribeNewsletter() {
      if (!this.newsletter.email) {
        alert('Mohon masukkan email Anda')
        return
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(this.newsletter.email)) {
        alert('Format email tidak valid')
        return
      }
      
      // Simulate subscription
      alert('Terima kasih! Anda telah berlangganan newsletter kami.')
      this.newsletter.email = ''
    }
  }
}
</script>

<style scoped>
/* Fade-up appear animation */
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.fade-up-enter-active {
  transition: opacity 700ms ease, transform 700ms ease;
}
.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Social icon hover glow */
.social-link:hover i {
  filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.6));
}

/* Subtle heartbeat on the heart icon */
@keyframes soft-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}
.fa-heart {
  animation: soft-pulse 2.2s ease-in-out infinite;
}
</style>