export const Responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4
  },

  ipad: {
    breakpoint: { max: 768, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 320 },
    items: 3
  },
  xsmobile: {
    breakpoint: { max: 320, min: 0 },
    items: 3
  }
}
