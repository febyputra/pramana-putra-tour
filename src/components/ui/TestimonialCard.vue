<template>
  <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 h-full">
    <!-- Quote Icon -->
    <div class="mb-4">
      <font-awesome-icon :icon="['fas', 'quote-left']" class="text-blue-600 text-2xl" />
    </div>
    
    <!-- Rating Stars -->
    <div class="flex items-center mb-4">
      <div class="flex space-x-1">
        <font-awesome-icon 
          v-for="star in 5" 
          :key="star"
          :icon="['fas', 'star']" 
          :class="star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'"
        />
      </div>
      <span class="ml-2 text-sm text-gray-600">({{ testimonial.rating }}.0)</span>
    </div>
    
    <!-- Comment -->
    <p class="text-gray-700 mb-6 leading-relaxed">
      "{{ testimonial.comment }}"
    </p>
    
    <!-- Tour Info -->
    <div class="mb-4 p-3 bg-blue-50 rounded-lg">
      <p class="text-sm font-medium text-blue-800">{{ testimonial.tour }}</p>
      <p class="text-xs text-blue-600">{{ testimonial.date }}</p>
    </div>
    
    <!-- Customer Info -->
    <div class="flex items-center">
      <img 
        :src="testimonial.avatar" 
        :alt="testimonial.name"
        class="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div>
        <h4 class="font-semibold text-gray-800">{{ testimonial.name }}</h4>
        <p class="text-sm text-gray-600 flex items-center">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="mr-1 text-xs" />
          {{ testimonial.location }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    testimonial: {
      type: Object,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>