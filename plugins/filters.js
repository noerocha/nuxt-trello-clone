import Vue from 'vue';

Vue.filter('formatDate', (value) => {
    if(!value) return '';
    return new Date(value).toLocaleString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
})