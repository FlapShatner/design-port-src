import Glide from '@glidejs/glide'

new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  gap: 27,
  peek: 420,
  breakpoints: {
    1280: {
      perView: 2,
      peek: 50,
    },
  },
}).mount()
