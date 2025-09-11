<template>
  <section class="py-20 bg-gray-50 font-inter">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div 
        class="text-center mb-16 transition-all duration-700 ease-out"
        :class="headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        ref="headerEl"
      >
        <h2 class="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
        <div class="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our satisfied customers have to say about their amazing experiences with Pramana Putra Tour.
        </p>
      </div>

      <!-- Statistics -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div 
          v-for="(stat, i) in stats" 
          :key="stat.label" 
          class="text-center transition-all duration-700 ease-out"
          :class="visibleStats.has(i) ? 'opacity-100 translate-x-0' : ['opacity-0', statHiddenClass(i)]"
          :style="{ transitionDelay: (i * 100) + 'ms' }"
          ref="statEls"
        >
          <div class="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="text-3xl font-bold text-blue-600 mb-2">{{ stat.value }}</div>
            <div class="text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div 
          v-for="(testimonial, i) in displayedTestimonials" 
          :key="testimonial.id"
          class="transition-all duration-700 ease-out"
          :class="visibleCards.has(i) ? 'opacity-100 translate-x-0' : ['opacity-0', cardHiddenClass(i)]"
          :style="{ transitionDelay: (i * 120) + 'ms' }"
          ref="cardEls"
        >
          <TestimonialCard 
            :testimonial="testimonial"
            :visible="true"
          />
        </div>
      </div>

      <!-- Show More/Less Button -->
      <div class="text-center">
        <button 
          @click="toggleShowAll"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center space-x-2"
        >
          <span>{{ showAll ? 'Show Less' : 'Show More Reviews' }}</span>
          <font-awesome-icon 
            :icon="['fas', showAll ? 'chevron-up' : 'chevron-down']" 
            class="text-sm"
          />
        </button>
      </div>

      <!-- Call to Action -->
      <!-- <div class="mt-16 text-center bg-white rounded-xl p-8 shadow-lg">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">Ready to Create Your Own Amazing Experience?</h3>
        <p class="text-gray-600 mb-6">Join thousands of satisfied customers and book your dream tour today!</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/packages" 
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2"
          >
            <font-awesome-icon :icon="['fas', 'map-marked-alt']" />
            <span>Browse Tours</span>
          </router-link>
          <router-link 
            to="/contact" 
            class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2"
          >
            <font-awesome-icon :icon="['fas', 'phone']" />
            <span>Contact Us</span>
          </router-link>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
import TestimonialCard from '../ui/TestimonialCard.vue';
import { testimonials } from '../../data/testimonials.js';

export default {
  name: 'TestimonialsSection',
  components: {
    TestimonialCard
  },
  data() {
    return {
      testimonials: testimonials,
      showAll: false,
      headerVisible: false,
      visibleStats: new Set(),
      visibleCards: new Set(),
      stats: [
        {
          value: '5000+',
          label: 'Happy Customers'
        },
        {
          value: '4.9/5',
          label: 'Average Rating'
        },
        {
          value: '50+',
          label: 'Tour Packages'
        },
        {
          value: '10+',
          label: 'Years Experience'
        }
      ]
    }
  },
  computed: {
    displayedTestimonials() {
      return this.showAll ? this.testimonials : this.testimonials.slice(0, 3);
    }
  },
  methods: {
    toggleShowAll() {
      this.showAll = !this.showAll;
      
      // Smooth scroll to testimonials section when showing more
      if (this.showAll) {
        this.$nextTick(() => {
          const element = this.$el.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          // Re-observe cards after DOM updates
          this.observeCards();
        });
      }
    },
    statHiddenClass(index) {
      // Ensure Tailwind sees both possible classes
      return index % 2 === 0 ? '-translate-x-6' : 'translate-x-6';
    },
    cardHiddenClass(index) {
      // Slightly larger distance for cards
      return index % 2 === 0 ? '-translate-x-8' : 'translate-x-8';
    },
    createObserver(callback) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          callback(entry, observer);
        });
      }, { threshold: 0.15 });
      return observer;
    },
    observeHeader() {
      if (!this.$refs.headerEl) return;
      const observer = this.createObserver((entry, obs) => {
        if (entry.isIntersecting) {
          this.headerVisible = true;
          obs.unobserve(entry.target);
        }
      });
      observer.observe(this.$refs.headerEl);
    },
    observeStats() {
      const statNodes = this.$refs.statEls || [];
      const observer = this.createObserver((entry, obs) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index')) || Array.from(statNodes).indexOf(entry.target);
          this.visibleStats.add(index);
          this.$forceUpdate();
          obs.unobserve(entry.target);
        }
      });
      (Array.isArray(statNodes) ? statNodes : [statNodes]).forEach((el, i) => {
        if (el) {
          el.setAttribute('data-index', String(i));
          observer.observe(el);
        }
      });
    },
    observeCards() {
      const cardNodes = this.$refs.cardEls || [];
      const observer = this.createObserver((entry, obs) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index')) || Array.from(cardNodes).indexOf(entry.target);
          this.visibleCards.add(index);
          this.$forceUpdate();
          obs.unobserve(entry.target);
        }
      });
      (Array.isArray(cardNodes) ? cardNodes : [cardNodes]).forEach((el, i) => {
        if (el) {
          el.setAttribute('data-index', String(i));
          observer.observe(el);
        }
      });
    }
  },
  mounted() {
    this.observeHeader();
    this.observeStats();
    this.observeCards();
  }
}
</script>