<template>
<nav :class="['fixed w-full z-50 transition-all duration-300 font-inter', (isHome && !scrolled) ? 'bg-black/20 backdrop-blur-sm shadow-none' : 'bg-white shadow-lg']">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center space-x-2">
          <font-awesome-icon 
            :icon="['fas', 'mountain']" 
            class="text-2xl text-blue-600 transition-colors duration-300"
          />
          <router-link 
            :to="{ name: 'Home' }"
            :class="['text-xl font-bold transition-colors duration-300 font-inter select-none navbar-text brand-text', (isHome && !scrolled) ? 'text-white drop-shadow-lg' : 'text-gray-800']"
          >
            Pramana Putra Tour
          </router-link>
        </div>

        <div class="hidden md:flex space-x-8">
          <a 
            v-for="item in menuItems" 
            :key="item.id" 
            :href="item.href" 
            :class="['relative desktop-menu-item transition-all duration-300 font-medium hover:scale-105 hover:-translate-y-0.5 color-transition hover:text-blue-600', (isHome && !scrolled) ? 'text-white' : 'text-gray-700']" 
            @click.prevent="navigateTo(item)"
          >
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 hover:w-full"></span>
          </a>
        </div>

          <button 
          class="md:hidden menu-toggle-btn relative p-2 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
          :class="[
            mobileMenuOpen ? 'open' : '',
            (isHome && !scrolled) ? 'text-white' : 'text-gray-800'
          ]"
          @click="toggleMobileMenu"
        >
          <div class="hamburger">
            <span class="hamburger-line" :class="{'rotate-45 translate-y-2': mobileMenuOpen}"></span>
            <span class="hamburger-line" :class="{'opacity-0': mobileMenuOpen}"></span>
            <span class="hamburger-line" :class="{'-rotate-45 -translate-y-2': mobileMenuOpen}"></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu with Spring Animation -->
      <div 
        class="md:hidden overflow-hidden transition-all duration-500 ease-out"
        :class="[
          mobileMenuOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        ]"
      >
        <div class="py-4 mobile-menu-backdrop rounded-lg shadow-lg mt-2">
<a 
            v-for="(item, index) in menuItems" 
            :key="item.id" 
            :href="item.href" 
            :class="['mobile-menu-item block py-3 px-4 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 transform hover:translate-x-2 hover:scale-105 border-l-4 border-transparent hover:border-blue-600 color-transition font-inter', 'text-gray-800']"
            :style="`animation-delay: ${index * 80}ms`"
            @click.prevent="navigateTo(item)"
          >
            <span class="flex items-center">
              <span class="w-2 h-2 bg-blue-600 rounded-full mr-3 transform scale-0 transition-transform duration-300 hover:scale-100"></span>
              {{ item.name }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      scrolled: false,
      mobileMenuOpen: false,
      activeSection: 'home',
      menuItems: [
        {
          id: 'home',
          name: 'Home',
          href: '#home'
        },
        {
          id: 'about',
          name: 'About',
          href: '#about'
        },
        {
          id: 'packages',
          name: 'Tour Packages',
          href: '#packages'
        },
        {
          id: 'gallery',
          name: 'Gallery',
          href: '#gallery'
        },
        {
          id: 'contact',
          name: 'Contact',
          href: '#contact'
        }
      ]
    }
  },
  computed: {
    isHome() {
      return this.$route.name === 'Home';
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50
    },
    setActive(section) {
      this.activeSection = section
    },
    navigateTo(item) {
      this.setActive(item.id);
      this.closeMobileMenu();
      if (item.id === 'home') {
        this.$router.push({ name: 'Home' });
      } else if (item.id === 'about') {
        this.$router.push({ name: 'About' });
      } else if (item.id === 'packages') {
        this.$router.push({ name: 'TourPackages' });
      } else if (item.id === 'contact') {
        this.$router.push({ name: 'Contact' });
      } else if (item.id === 'gallery') {
        this.$router.push({ name: 'Gallery' });
      } else {
        // For other menu items, scroll to section by id
        const el = document.getElementById(item.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
      
      // Add spring bounce effect
      if (this.mobileMenuOpen) {
        this.$nextTick(() => {
          const menu = document.querySelector('.mobile-menu-backdrop')
          if (menu) {
            menu.style.animation = 'springIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
          }
        })
      }
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
/* Spring Animation Keyframes */
@keyframes springIn {
  0% {
    transform: scale(0.3) translateY(-20px);
    opacity: 0;
  }
  50% {
    transform: scale(1.05) translateY(0);
    opacity: 0.8;
  }
  70% {
    transform: scale(0.98) translateY(0);
    opacity: 0.9;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

@keyframes bounceIn {
  0% {
    transform: translateX(-20px) scale(0.8);
    opacity: 0;
  }
  60% {
    transform: translateX(5px) scale(1.1);
    opacity: 0.8;
  }
  80% {
    transform: translateX(-2px) scale(1.05);
    opacity: 0.9;
  }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}

/* Mobile menu items staggered animation */
.mobile-menu-item {
  animation: bounceIn 0.3s ease-out forwards;
  animation-fill-mode: both;
  opacity: 0;
}

/* Hamburger menu styling */
.hamburger {
  width: 24px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  border-radius: 2px;
  transform-origin: center;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Hover effects for desktop menu */
.desktop-menu-item {
  position: relative;
  overflow: hidden;
}

.desktop-menu-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.6s ease-in-out;
}

.desktop-menu-item:hover::before {
  left: 100%;
}

/* Backdrop blur enhancement for mobile menu */
.mobile-menu-backdrop {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Button press feedback */
.menu-toggle-btn {
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.menu-toggle-btn:active {
  transform: scale(0.95);
}

/* Smooth color transitions */
.color-transition {
  transition: color 0.3s ease, background-color 0.3s ease;
}

/* Ensure text visibility */
.navbar-text {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Logo and brand text styling */
.brand-text {
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.2;
}
</style>
