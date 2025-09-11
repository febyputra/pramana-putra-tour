<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />

    <FloatingWhatsapp />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import FloatingWhatsapp from './components/ui/FloatingWhatsapp.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    FloatingWhatsapp
  }
}
</script>
