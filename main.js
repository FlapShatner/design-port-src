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
    1028: {
      perView: 1,
      peek: 175,
    },
    688: {
      perView: 1,
      peek: 37,
    },
  },
}).mount()
