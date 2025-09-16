<template>
  <div v-if="isLoading" class="bg-white rounded-xl shadow-lg p-6 animate-pulse">
    <!-- Loading skeleton -->
    <div class="h-64 bg-gray-200 rounded-t-xl mb-4"></div>
    <div class="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div class="h-4 bg-gray-200 rounded w-full mb-4"></div>
    <div class="space-y-2">
      <div class="h-4 bg-gray-200 rounded w-1/2"></div>
      <div class="h-4 bg-gray-200 rounded w-2/3"></div>
    </div>
  </div>

  <div v-else class="bg-white rounded-xl shadow-lg overflow-hidden hover-scale group cursor-pointer">
    <!-- Image Section -->
    <div class="relative overflow-hidden">
      <img 
        :src="packageData.image" 
        :alt="packageData.title" 
        class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        @error="handleImageError"
      >
      <div v-if="packageData.promo" class="absolute top-3 right-3 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-md">
        PROMO
      </div>
      <div v-if="packageData.duration" class="absolute top-3 left-3 bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-2 shadow-md">
        <font-awesome-icon :icon="['fas', 'clock']" />
        <span>{{ packageData.duration }}</span>
      </div>
    </div>
    
    <!-- Content Section -->
    <div class="p-6">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-lg font-extrabold text-gray-900">{{ packageData.title }}</h3>
        <div class="flex items-center text-yellow-400 font-semibold space-x-1">
          <font-awesome-icon :icon="['fas', 'star']" />
          <span>{{ packageData.rating }}</span>
        </div>
      </div>
      <div class="flex items-center text-gray-600 text-sm mb-3 space-x-1">
        <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
        <span>{{ packageData.location }}</span>
      </div>
      <p class="text-gray-700 text-sm mb-4 line-clamp-2">{{ packageData.description }}</p>
      
      <!-- Features -->
      <div class="flex space-x-2 mb-4 text-sm">
        <div v-if="packageData.hotelRating" class="flex items-center space-x-1 bg-blue-100 text-blue-700 rounded px-2 py-1 shadow-sm">
          <font-awesome-icon :icon="['fas', 'hotel']" />
          <span>Hotel {{ packageData.hotelRating }}</span>
        </div>
        <div v-if="packageData.breakfastIncluded" class="flex items-center space-x-1 bg-green-100 text-green-700 rounded px-2 py-1 shadow-sm">
          <font-awesome-icon :icon="['fas', 'utensils']" />
          <span>Breakfast</span>
        </div>
        <div v-if="packageData.airportTransferIncluded" class="flex items-center space-x-1 bg-purple-100 text-purple-700 rounded px-2 py-1 shadow-sm">
          <font-awesome-icon :icon="['fas', 'shuttle-van']" />
          <span>Airport Transfer</span>
        </div>
      </div>

      <!-- Price -->
      <div class="flex items-center justify-between mb-4">
        <div>
          <span v-if="packageData.originalPrice" class="text-sm text-gray-400 line-through mr-2">{{ packageData.originalPrice }}</span>
          <span class="text-2xl font-extrabold text-blue-700">{{ packageData.discountedPrice || packageData.price }}</span>
        </div>
        <div class="text-sm text-gray-600">/orang</div>
      </div>
      
      <!-- Action Buttons -->
      <div class="space-y-2">
        <button
          @click="viewDetails"
          class="w-full bg-gray-600 text-white py-2 rounded-full font-semibold shadow-lg cursor-pointer hover:bg-gray-700 transition-colors"
        >
          View Details
        </button>
        <button
          @click="selectPackage"
          class="w-full bg-blue-700 text-white py-3 rounded-full font-semibold shadow-lg cursor-pointer hover:bg-blue-800 transition-colors"
        >
          Pesan Sekarang
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PackageCard',
  props: {
    package: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: false,
      default: 0
    }
  },
  
  data() {
    return {
      isLoading: true,
      fallbackImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDQwMCAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjU2IiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI4IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0E0QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZSBBdmFpbGFibGU8L3RleHQ+Cjwvc3ZnPg==',
      packageData: {
        title: 'Untitled Package',
        description: 'No description available',
        price: 'Contact for Price',
        duration: 'N/A',
        rating: '0',
        image: this.fallbackImage,
        features: [],
        location: '',
        promo: false,
        hotelRating: '',
        breakfastIncluded: false,
        airportTransferIncluded: false,
        originalPrice: '',
        discountedPrice: ''
      }
    }
  },

  watch: {
    package: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          this.packageData = newValue
          this.isLoading = false
        }
      }
    }
  },

  methods: {
    selectPackage() {
      // Open WhatsApp with package-specific message
      const message = encodeURIComponent(`Halo! Saya tertarik dengan paket tour "${this.package.title}" (${this.package.duration}) dengan harga ${this.package.price}. Bisa tolong berikan informasi lebih lanjut?`)
      const phoneNumber = '62881038411816'
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
      window.open(whatsappUrl, '_blank')
    },

    viewDetails() {
      this.$router.push({ name: 'PackageDetails', params: { id: this.package.id } })
    },

    handleImageError(event) {
      event.target.src = this.fallbackImage
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

.hover-scale:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease-in-out;
}

/* New animation for fade-in and slide-up */
@keyframes fadeSlideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-slide-up {
  animation-name: fadeSlideUp;
  animation-duration: 0.6s;
  animation-fill-mode: both;
  animation-timing-function: ease-out;
}

</style>

/* Staggered animation delay using inline style */
