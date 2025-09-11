<template>
  <section id="#about" class="py-20 font-inter">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-4 text-center reveal">About Pramana Putra Tour</h2>
        <div class="w-24 h-1 bg-blue-600 mx-auto mb-8 reveal" style="transition-delay: 100ms;"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto text-center reveal" style="transition-delay: 200ms;">We are a trusted tour agent in Bali with more than 10 years of experience serving domestic and international tourism.</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="relative reveal" style="transition-delay: 150ms;">
          <img src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Bali Tourism" class="rounded-lg shadow-2xl transition-transform duration-300">
          <div class="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg reveal" style="transition-delay: 300ms;">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600">10+</div>
              <div class="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-3xl font-bold text-gray-800 mb-6 reveal" style="transition-delay: 100ms;">Why Pramana Putra Tour?</h3>
          <div class="space-y-6">
            <div v-for="(feature, index) in features" :key="index" class="flex items-start space-x-4 group reveal" :style="{ transitionDelay: (index * 120) + 'ms' }">
              <div class="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 transition-colors duration-300">
                <font-awesome-icon :icon="feature.icon" />
              </div>
              <div>
                <h4 class="text-xl font-semibold text-gray-800 mb-2">{{ feature.title }}</h4>
                <p class="text-gray-600">{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
            <div v-for="(stat, sIdx) in stats" :key="stat.label" class="text-center reveal" :style="{ transitionDelay: (sIdx * 120) + 'ms' }">
              <div class="text-2xl font-bold text-blue-600">{{ stat.value }}</div>
              <div class="text-sm text-gray-600">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  mounted() {
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
  },
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
      stats: [
        {
          value: '5000+',
          label: 'Happy Customers'
        },
        {
          value: '50+',
          label: 'Tour Packages'
        },
        {
          value: '4.9',
          label: 'Rating'
        }
      ]
    }
  }
}
</script>

<style scoped>
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