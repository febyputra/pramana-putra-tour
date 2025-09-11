<template>
  <div>
    <HeroSection />
    <PackagesSection />
    <AboutSection />
    <TestimonialsSection />
    <CTASection />
  </div>
</template>

<script>
import HeroSection from '../sections/HeroSection.vue';
import PackagesSection from '../sections/PackagesSection.vue';
import AboutSection from '../sections/AboutSection.vue';
import TestimonialsSection from '../sections/TestimonialsSection.vue';
import CTASection from '../sections/CTASection.vue';

export default {
  name: 'Home',
  components: {
    HeroSection,
    PackagesSection,
    AboutSection,
    TestimonialsSection,
    CTASection
  }
}
</script>
