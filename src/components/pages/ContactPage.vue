<template>
  <div class="font-inter">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24 overflow-hidden reveal">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1704253411849-099f8bff9e4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Bali Contact" 
          class="w-full h-full object-cover opacity-30"
        >
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Contact Us
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-200">
            Get in touch with us to plan your perfect Bali adventure
          </p>
          <div class="w-24 h-1 bg-white mx-auto animate-fade-in-up animation-delay-400"></div>
        </div>
      </div>
    </section>

    <!-- Contact Information Section -->
    <section class="py-20 bg-white reveal">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div class="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you plan the perfect Bali experience. Contact us through any of the following methods
          </p>
        </div>

        <div class="max-w-6xl mx-auto">
          <!-- Contact Information Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <!-- Address -->
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="text-2xl text-white" />
                </div>
                <h3 class="text-xl font-bold text-gray-800">Address</h3>
              </div>
              <p class="text-gray-600 leading-relaxed">
                Jl. Raya Ubud No. 123<br>
                Ubud, Gianyar<br>
                Bali 80571, Indonesia
              </p>
            </div>

            <!-- Phone & WhatsApp -->
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <font-awesome-icon :icon="['fas', 'phone']" class="text-2xl text-white" />
                </div>
                <h3 class="text-xl font-bold text-gray-800">Phone</h3>
              </div>
              <div class="space-y-3">
                <div>
                  <p class="text-sm text-gray-500 mb-1">Call us:</p>
                  <a href="tel:+62881038411816" class="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                    +62 881-0384-118-16
                  </a>
                </div>
                <div>
                  <p class="text-sm text-gray-500 mb-1">WhatsApp (24/7):</p>
                  <a
                    href="https://wa.me/62881038411816"
                    target="_blank"
                    class="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium inline-flex items-center"
                  >
                    <font-awesome-icon :icon="['fab', 'whatsapp']" class="mr-2 text-blue-500" />
                    +62 881-0384-118-16
                  </a>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <font-awesome-icon :icon="['fas', 'share-alt']" class="text-2xl text-white" />
                </div>
                <h3 class="text-xl font-bold text-gray-800">Social Media</h3>
              </div>
              <div class="space-y-4">
                <p class="text-sm text-gray-500 mb-4">Follow us on social media:</p>
                <div class="flex space-x-4">
                  <a
                    href="https://facebook.com/pramanapuratour"
                    target="_blank"
                    class="text-gray-700 hover:text-blue-600 transition-colors duration-300 inline-flex items-center"
                  >
                    <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-2xl text-blue-600 hover:text-blue-800" />
                  </a>
                  <a
                    href="https://instagram.com/feby-dian-pramana"
                    target="_blank"
                    class="text-gray-700 hover:text-pink-600 transition-colors duration-300 inline-flex items-center"
                  >
                    <font-awesome-icon :icon="['fab', 'instagram']" class="text-2xl text-pink-500 hover:text-pink-700" />
                  </a>
                </div>
                <p class="text-gray-600 text-sm">Connect with us for updates and travel inspiration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-gray-50 reveal">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Find Us</h2>
          <div class="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our office in the heart of Ubud, Bali
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.8267842159!2d115.26063731478!3d-8.508861893923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d6397e481ab%3A0x6ea5f99dd1398d8a!2sUbud%2C%20Gianyar%20Regency%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
              width="100%" 
              height="500" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-96 md:h-[500px]"
            ></iframe>
          </div>
          
          <div class="p-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div class="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="text-3xl mb-4 text-blue-200" />
                <h4 class="font-semibold mb-2">Location</h4>
                <p class="text-blue-100">Central Ubud, Easy to Find</p>
              </div>
              <div>
                <font-awesome-icon :icon="['fas', 'car']" class="text-3xl mb-4 text-blue-200" />
                <h4 class="font-semibold mb-2">Parking</h4>
                <p class="text-blue-100">Free Parking Available</p>
              </div>
              <div>
                <font-awesome-icon :icon="['fas', 'clock']" class="text-3xl mb-4 text-blue-200" />
                <h4 class="font-semibold mb-2">Open Daily</h4>
                <p class="text-blue-100">8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <div class="reveal">
      <CTASection />
    </div>

  </div>
</template>

<script>
import CTASection from '../sections/CTASection.vue';

export default {
  name: 'ContactPage',
  components: {
    CTASection
  },
  mounted() {
    // Scroll to top when component is mounted
    window.scrollTo(0, 0)

    // IntersectionObserver for reveal-on-scroll animations
    const revealElements = this.$el.querySelectorAll('.reveal')
    if (revealElements && revealElements.length > 0) {
      const onIntersect = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      }

      const observer = new IntersectionObserver(onIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
      })

      revealElements.forEach(el => observer.observe(el))
    }
  }
}
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

/* Hover effects */
.group:hover .group-hover\:bg-blue-700 {
  background-color: #1d4ed8;
}

.group:hover .group-hover\:bg-green-700 {
  background-color: #15803d;
}

.group:hover .group-hover\:bg-green-600 {
  background-color: #16a34a;
}

.group:hover .group-hover\:bg-red-700 {
  background-color: #b91c1c;
}

.group:hover .group-hover\:bg-purple-700 {
  background-color: #7c3aed;
}

/* Form focus styles */
input:focus, select:focus, textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}

/* Aspect ratio for map */
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.aspect-w-16 > iframe {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

/* Reveal on scroll utility */
.reveal {
  opacity: 0;
  transform: translateY(24px);
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 700ms ease, transform 700ms ease;
}
</style>
