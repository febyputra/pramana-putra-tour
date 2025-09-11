<template>
  <div class="font-inter">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24 overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Bali Landscape" 
          class="w-full h-full object-cover opacity-30"
        >
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up reveal">
            About Pramana Putra Tour
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-200 reveal" style="transition-delay: 120ms;">
            Your trusted partner for unforgettable Bali adventures since 2013
          </p>
          <div class="w-24 h-1 bg-white mx-auto animate-fade-in-up animation-delay-400 reveal" style="transition-delay: 240ms;"></div>
        </div>
      </div>
    </section>

    <!-- Company Story Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative reveal" style="transition-delay: 100ms;">
            <img 
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Bali Temple" 
              class="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            >
            <div class="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
              <div class="text-center">
                <div class="text-4xl font-bold">10+</div>
                <div class="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 class="text-4xl font-bold text-gray-800 mb-6 reveal">Our Story</h2>
            <div class="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p class="reveal" style="transition-delay: 80ms;">
                Founded in 2013, Pramana Putra Tour began as a small family business with a simple mission: 
                to share the incredible beauty and rich culture of Bali with travelers from around the world. 
                What started as a passion project has grown into one of Bali's most trusted tour operators.
              </p>
              <p class="reveal" style="transition-delay: 160ms;">
                Our founder, Made Pramana, grew up in the heart of Bali and has an intimate knowledge of the 
                island's hidden gems, cultural traditions, and natural wonders. This deep connection to the 
                land and its people is what sets us apart from other tour companies.
              </p>
              <p class="reveal" style="transition-delay: 240ms;">
                Over the years, we've had the privilege of serving thousands of guests from over 50 countries, 
                each leaving with memories that last a lifetime. Our commitment to authentic experiences, 
                personalized service, and sustainable tourism practices has earned us recognition as a 
                leading tour operator in Bali.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4 reveal">Why Choose Pramana Putra Tour?</h2>
          <div class="w-24 h-1 bg-blue-600 mx-auto mb-8 reveal" style="transition-delay: 120ms;"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto reveal" style="transition-delay: 200ms;">
            We're not just a tour company – we're your gateway to experiencing Bali like a local
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(feature, index) in features" :key="index" 
               class="text-center group hover:transform hover:scale-105 transition-all duration-300 reveal"
               :style="{ transitionDelay: (index * 120) + 'ms' }">
            <div class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors duration-300">
              <font-awesome-icon :icon="feature.icon" class="text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">{{ feature.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-20 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 reveal">Our Achievements</h2>
          <div class="w-24 h-1 bg-white mx-auto mb-8 reveal" style="transition-delay: 120ms;"></div>
          <p class="text-xl opacity-90 max-w-3xl mx-auto reveal" style="transition-delay: 200ms;">
            Numbers that speak for our commitment to excellence
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(stat, index) in statistics" :key="index" class="text-center reveal" :style="{ transitionDelay: (index * 120) + 'ms' }">
            <div class="text-5xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-lg opacity-90">{{ stat.label }}</div>
            <p class="text-sm opacity-75 mt-2">{{ stat.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6 reveal">Ready to Explore Bali with Us?</h2>
        <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto reveal" style="transition-delay: 120ms;">
          Join thousands of satisfied travelers who have discovered the magic of Bali through our expertly crafted tours
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/tour-packages" 
            class="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center reveal"
            style="transition-delay: 200ms;"
          >
            <font-awesome-icon :icon="['fas', 'map-marked-alt']" class="mr-2" />
            View Our Packages
          </router-link>
          <a 
            href="https://wa.me/62881038411816" 
            target="_blank"
            class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-flex items-center justify-center reveal"
            style="transition-delay: 280ms;"
          >
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="mr-2" />
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      features: [
        {
          icon: ['fas', 'star'],
          title: 'Experience',
          description: 'More than 10 years serving travelers with the best satisfaction and unforgettable experience'
        },
        {
          icon: ['fas', 'users'],
          title: 'Professional Guide',
          description: 'A team of experienced guides who are multilingual and knowledgeable about Bali.'
        },
        {
          icon: ['fas', 'car'],
          title: 'Comfortable Transportation',
          description: 'Well-maintained and comfortable vehicle with air conditioning for a pleasant journey'
        },
        {
          icon: ['fas', 'shield-alt'],
          title: 'Trusted & Secure',
          description: 'Reliable service with travel insurance and security guarantee for all guests'
        }
      ],
            statistics: [
        {
          value: '5000+',
          label: 'Happy Customers',
          description: 'Satisfied travelers from around the world'
        },
        {
          value: '50+',
          label: 'Tour Packages',
          description: 'Diverse experiences for every traveler'
        },
        {
          value: '4.9/5',
          label: 'Average Rating',
          description: 'Based on customer reviews'
        },
        {
          value: '10+',
          label: 'Years Experience',
          description: 'Serving travelers since 2013'
        }
      ]
    }
  },
  mounted() {
    // Scroll to top when component is mounted
    window.scrollTo(0, 0)

    // Reveal on scroll animations
    const root = this.$el
    const elements = root.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

    elements.forEach(el => observer.observe(el))
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

.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 600ms ease, transform 600ms ease;
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>