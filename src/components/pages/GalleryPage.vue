<template>
  <div id="gallery" class="min-h-screen bg-gray-50 font-inter">
    <!-- Hero Section -->
    <section class="relative py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat hero-kenburns"
           style="background-image: url('https://images.unsplash.com/photo-1704253411612-e4deb715dcd8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dz');">
      </div>
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-indigo-700/80"></div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Gallery Pramana Putra Tour</h1>
        </div>
      </div>
    </section>

    <!-- Gallery Filter -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <!-- <div class="flex flex-wrap justify-center gap-2 mb-10">
          <button 
            v-for="(category, index) in categories" 
            :key="index" 
            @click="filterGallery(category.value)"
            :class="['px-4 py-2 rounded-full font-medium transition-all duration-300', 
                     activeFilter === category.value 
                     ? 'bg-blue-600 text-white shadow-lg' 
                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
          >
            {{ category.name }}
          </button>
        </div> -->

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="(image, index) in filteredImages" 
            :key="index"
            v-reveal
            class="group relative overflow-hidden rounded-xl shadow-md cursor-pointer transform transition-all duration-700 opacity-0 translate-y-6 hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
            @click="openLightbox(index)"
          >
            <img 
              :src="image.src" 
              :alt="image.title" 
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12" v-if="visibleImages < galleryImages.length">
          <button 
            @click="loadMore"
            class="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Muat Lebih Banyak
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTASection />

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div class="relative max-w-4xl w-full max-h-full">
        <button 
          @click="closeLightbox"
          class="absolute -top-12 right-0 text-white text-3xl z-10 hover:text-blue-400 transition-colors duration-200"
        >
          &times;
        </button>
        
        <div class="bg-white rounded-lg overflow-hidden">
          <img :src="currentImage.src" class="w-full h-auto max-h-[70vh] object-contain">
          <div class="p-4">
            <h3 class="text-xl font-bold text-gray-800">{{ currentImage.title }}</h3>
            <p class="text-gray-600">{{ currentImage.location }}</p>
            <p class="text-gray-500 mt-2">{{ currentImage.description }}</p>
          </div>
        </div>
        
        <button 
          v-if="currentIndex > 0"
          @click="prevImage"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          v-if="currentIndex < filteredImages.length - 1"
          @click="nextImage"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CTASection from '../sections/CTASection.vue';

// Import local images
import img1 from '../../assets/IMG-20250909-WA0003.jpg';
import img2 from '../../assets/IMG-20250909-WA0004.jpg';
import img3 from '../../assets/IMG-20250909-WA0005.jpg';
import img4 from '../../assets/IMG-20250909-WA0006.jpg';
import img5 from '../../assets/IMG-20250909-WA0007.jpg';
import img6 from '../../assets/IMG-20250909-WA0008.jpg';
import img7 from '../../assets/IMG-20250909-WA0009.jpg';
import img8 from '../../assets/IMG-20250909-WA0010.jpg';
import img9 from '../../assets/IMG-20250909-WA0011.jpg';
import img10 from '../../assets/IMG-20250909-WA0012.jpg';
import img11 from '../../assets/IMG-20250909-WA0013.jpg';
import img12 from '../../assets/IMG-20250909-WA0014.jpg';

export default {
  name: 'GalleryPage',
  directives: {
    reveal: {
      mounted(el) {
        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              el.classList.remove('opacity-0', 'translate-y-6');
              el.classList.add('opacity-100', 'translate-y-0');
              obs.unobserve(el);
            }
          });
        }, { threshold: 0.15 });
        observer.observe(el);
      }
    }
  },
  components: {
    CTASection
  },
  data() {
    return {
      activeFilter: 'all',
      lightboxOpen: false,
      currentIndex: 0,
      visibleImages: 12,
      categories: [
        { name: 'Semua', value: 'all' },
        { name: 'Wisata Alam', value: 'nature' },
        { name: 'Budaya', value: 'culture' },
        { name: 'Petualangan', value: 'adventure' },
        { name: 'Kuliner', value: 'culinary' }
      ],
      galleryImages: [
        {
          src: img1,
          title: 'Wisata Alam Indonesia',
          location: 'Indonesia',
          description: 'Keindahan alam Indonesia yang memukau dengan pemandangan yang menakjubkan.',
          category: 'nature'
        },
        {
          src: img2,
          title: 'Budaya Nusantara',
          location: 'Indonesia',
          description: 'Kekayaan budaya dan tradisi Indonesia yang beragam dan mempesona.',
          category: 'culture'
        },
        {
          src: img3,
          title: 'Petualangan Seru',
          location: 'Indonesia',
          description: 'Berbagai aktivitas petualangan yang menantang dan menyenangkan.',
          category: 'adventure'
        },
        {
          src: img4,
          title: 'Kuliner Nusantara',
          location: 'Indonesia',
          description: 'Cita rasa kuliner khas Indonesia yang lezat dan menggugah selera.',
          category: 'culinary'
        },
        {
          src: img5,
          title: 'Pantai Eksotis',
          location: 'Indonesia',
          description: 'Pantai-pantai indah dengan pasir putih dan air laut yang jernih.',
          category: 'nature'
        },
        {
          src: img6,
          title: 'Warisan Budaya',
          location: 'Indonesia',
          description: 'Situs-situs bersejarah dan warisan budaya yang membanggakan.',
          category: 'culture'
        },
        {
          src: img7,
          title: 'Olahraga Ekstrem',
          location: 'Indonesia',
          description: 'Berbagai olahraga ekstrem yang menguji adrenalin dan keberanian.',
          category: 'adventure'
        },
        {
          src: img8,
          title: 'Makanan Tradisional',
          location: 'Indonesia',
          description: 'Hidangan tradisional dengan resep turun temurun yang autentik.',
          category: 'culinary'
        },
        {
          src: img9,
          title: 'Gunung dan Pegunungan',
          location: 'Indonesia',
          description: 'Keindahan gunung dan pegunungan Indonesia yang menawan.',
          category: 'nature'
        },
        {
          src: img10,
          title: 'Seni dan Kerajinan',
          location: 'Indonesia',
          description: 'Seni dan kerajinan tangan khas Indonesia yang unik dan berkualitas.',
          category: 'culture'
        },
        {
          src: img11,
          title: 'Aktivitas Air',
          location: 'Indonesia',
          description: 'Berbagai aktivitas air yang menyenangkan dan menyegarkan.',
          category: 'adventure'
        },
        {
          src: img12,
          title: 'Jajanan Lokal',
          location: 'Indonesia',
          description: 'Jajanan dan camilan khas daerah yang nikmat dan terjangkau.',
          category: 'culinary'
        }
      ]
    }
  },
  computed: {
    filteredImages() {
      if (this.activeFilter === 'all') {
        return this.galleryImages.slice(0, this.visibleImages);
      }
      return this.galleryImages
        .filter(image => image.category === this.activeFilter)
        .slice(0, this.visibleImages);
    },
    currentImage() {
      return this.filteredImages[this.currentIndex] || {};
    }
  },
  methods: {
    filterGallery(category) {
      this.activeFilter = category;
      this.visibleImages = 12;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    openLightbox(index) {
      this.currentIndex = index;
      this.lightboxOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeLightbox() {
      this.lightboxOpen = false;
      document.body.style.overflow = 'auto';
    },
    nextImage() {
      if (this.currentIndex < this.filteredImages.length - 1) {
        this.currentIndex++;
      }
    },
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    loadMore() {
      this.visibleImages += 8;
    }
  }
}
</script>

<style scoped>
.gallery-item {
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.hero-kenburns {
  animation: heroZoom 18s ease-out infinite alternate;
  will-change: transform;
}

@keyframes heroZoom {
  0% {
    transform: scale(1) translateY(0);
  }
  100% {
    transform: scale(1.12) translateY(-2%);
  }
}

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
</style>