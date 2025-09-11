<template>
  <section id="packages" class="bg-gray-100 font-inter py-20">
    <div class="container mx-auto px-4">
      <div 
        ref="sectionHeader"
        class="text-center mb-16 reveal-on-scroll"
        :class="{ 'animate-fade-in-up': isVisible }"
      >
        <h2 class="text-4xl font-bold text-gray-800 mb-4 text-center">Our Packages</h2>
        <div class="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto text-center">Choose a tour package according to your preference and budget</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <PackageCard 
          v-for="(pkg, index) in limitedPackages" 
          :key="pkg.id" 
          :package="pkg" 
          :index="index" 
          :is-visible="isVisible"
          @select="handlePackageSelected" 
        />
      </div>
      <div 
        ref="ctaButton"
        class="text-center mt-12"
        :class="{ 'animate-fade-in-up': isVisible }"
      >
        <button
          @click="viewMorePackages"
          class="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg"
        >
          View More Packages
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { packages } from '../../data/packages'
import PackageCard from '../ui/PackageCard.vue';

export default {
  name: 'PackagesSection',
  components: {
    PackageCard
  },
  data() {
    return {
      packages,
      isVisible: false
    }
  },
  computed: {
    limitedPackages() {
      return this.packages.slice(0, 4);
    }
  },
  mounted() {
    this.setupIntersectionObserver();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    setupIntersectionObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isVisible = true;
              // Disconnect observer after first trigger to prevent re-triggering
              this.observer.disconnect();
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      // Observe the section header
      if (this.$refs.sectionHeader) {
        this.observer.observe(this.$refs.sectionHeader);
      }
    },
    handlePackageSelected(pkg) {
      this.$router.push({ name: 'TourPackages' });
    },
    viewMorePackages() {
      this.$router.push({ name: 'TourPackages' });
    }
  }
}
</script>

<style scoped>
/* Fade in up animation */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Initial state for elements that will be animated */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
}

/* Staggered animation for cards will be handled in PackageCard component */
</style>