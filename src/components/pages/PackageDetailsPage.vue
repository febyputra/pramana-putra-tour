<template>
  <section class="container mx-auto px-4 py-20 font-inter">
    <div v-if="packageData" class="max-w-4xl mx-auto">
      <!-- Back Button -->
      <button
        @click="goBack"
        class="mb-8 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
      >
        <font-awesome-icon icon="arrow-left" class="mr-2" />
        Back
      </button>

      <!-- Package Image -->
      <div class="relative mb-8 reveal">
        <img
          :src="packageData.image"
          :alt="packageData.title"
          class="w-full h-96 object-cover rounded-xl shadow-lg"
          @error="handleImageError"
        >
        <div v-if="packageData.duration" class="absolute top-4 right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
          <font-awesome-icon icon="clock" class="mr-1" />
          {{ packageData.duration }}
        </div>
        <div v-if="packageData.rating" class="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          <font-awesome-icon icon="star" class="text-yellow-400 mr-1" />
          {{ packageData.rating }}
        </div>
      </div>

      <!-- Package Details -->
      <div class="bg-white rounded-xl shadow-lg p-8 reveal">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">{{ packageData.title }}</h1>
        <p class="text-xl text-gray-600 mb-6">{{ packageData.description }}</p>

        <!-- Price -->
        <div class="flex items-center justify-between mb-6">
          <div class="text-3xl font-bold text-blue-600">{{ packageData.price }}</div>
          <div class="text-sm text-gray-500">per person</div>
        </div>

        <!-- Features -->
        <div v-if="packageData.features?.length" class="mb-8">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Package Feature</h3>
          <ul class="grid md:grid-cols-2 gap-2">
            <li
              v-for="feature in packageData.features"
              :key="feature"
              class="flex items-center text-gray-600"
            >
              <font-awesome-icon icon="check" class="text-green-500 mr-2" />
              {{ feature }}
            </li>
          </ul>
        </div>

        <!-- Highlights -->
        <div v-if="packageData.highlights?.length" class="mb-8">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Highlights</h3>
          <ul class="space-y-2">
            <li
              v-for="highlight in packageData.highlights"
              :key="highlight"
              class="flex items-center text-gray-600"
            >
              <font-awesome-icon icon="map-marker-alt" class="text-blue-500 mr-2" />
              {{ highlight }}
            </li>
          </ul>
        </div>

        <!-- WhatsApp CTA Button -->
        <div class="text-center">
          <button
            @click="openWhatsApp"
            class="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 transform hover:scale-105"
          >
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="mr-2" />
            Chat via WhatsApp untuk Booking
          </button>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-else class="text-center py-20">
      <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
      <p class="mt-4 text-gray-600">Loading package details...</p>
    </div>
  </section>
</template>

<script>
import { packages } from '../../data/packages';

export default {
  name: 'PackageDetailsPage',
  data() {
    return {
      packageData: null,
      fallbackImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDQwMCAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjU2IiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI4IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0E0QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZSBBdmFpbGFibGU8L3RleHQ+Cjwvc3ZnPg=='
    }
  },
  mounted() {
    this.loadPackage();
    // Animate on view with robust fallback and nextTick to ensure DOM is ready
    this.$nextTick(() => {
      const revealElements = this.$el.querySelectorAll('.reveal');
      if (!revealElements || revealElements.length === 0) return;

      if ('IntersectionObserver' in window) {
        const onIntersect = (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
              observer.unobserve(entry.target);
            }
          });
        };

        const observer = new IntersectionObserver(onIntersect, {
          root: null,
          rootMargin: '0px',
          threshold: 0.15
        });
        revealElements.forEach(el => observer.observe(el));

        // Force-show elements that are already in view on load
        revealElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
          if (rect.top < viewportHeight * 0.85 && rect.bottom > 0) {
            el.classList.add('reveal-visible');
          }
        });
      } else {
        // Fallback: show immediately if IntersectionObserver is unavailable
        revealElements.forEach(el => el.classList.add('reveal-visible'));
      }
    });
  },
  methods: {
    loadPackage() {
      const id = parseInt(this.$route.params.id);
      this.packageData = packages.find(pkg => pkg.id === id);
      if (!this.packageData) {
        this.$router.push({ name: 'TourPackages' });
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    openWhatsApp() {
      const phoneNumber = '62881038411816';
      const message = encodeURIComponent(`Halo, saya tertarik dengan paket: ${this.packageData?.title} (Harga: ${this.packageData?.price}). Apakah tersedia?`);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    },
    handleImageError(event) {
      event.target.src = this.fallbackImage;
    }
  }
}
</script>

<style scoped>
/* Reveal on scroll */
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
