<template>
  <div class="font-inter">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24 overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1566987827971-f2c40e748a54?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Himalayan Mountain Landscape with Temple"
          class="w-full h-full object-cover opacity-40"
        >
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Tour Packages
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-200">
            Discover amazing adventures and create unforgettable memories with our carefully crafted tour packages
          </p>
          <div class="w-24 h-1 bg-white mx-auto animate-fade-in-up animation-delay-400"></div>
        </div>
      </div>
      
      <!-- Floating Icons -->
      <div class="absolute top-20 left-10 animate-float">
        <font-awesome-icon icon="mountain" class="text-white text-4xl opacity-20" />
      </div>
      <div class="absolute bottom-20 right-10 animate-float" style="animation-delay: -2s;">
        <font-awesome-icon icon="camera" class="text-white text-3xl opacity-20" />
      </div>
    </section>

    <!-- Packages Section -->
    <section class="container mx-auto px-4 py-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Choose Your Package</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          From cultural explorations to thrilling adventures, find the perfect package that matches your travel dreams
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <PackageCard 
          v-for="(pkg, i) in packages" 
          :key="pkg.id" 
          :package="pkg" 
          :index="i"
          :isVisible="true"
          @select="handlePackageSelected" 
        />
      </div>
    </section>

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>

<script>
import { packages } from '../../data/packages';
import PackageCard from '../ui/PackageCard.vue';
import CTASection from '../sections/CTASection.vue';

export default {
  name: 'TourPackagesPage',
  components: {
    PackageCard,
    CTASection
  },
  data() {
    return {
      packages
    }
  },
  methods: {
    handlePackageSelected(pkg) {
      this.$router.push({ name: 'PackageDetails', params: { id: pkg.id } });
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

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}
</style>
