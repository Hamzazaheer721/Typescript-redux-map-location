export const size: any = {
  xs: 0,
  sm: 360,
  md: 640,
  lg: 968,
  xl: 1200
}

export const device = {
  tiny: `(min-width: ${size.xs}px) and (max-width: ${
    size.sm - 1
  }px)`,
  mobile: `(min-width: ${size.sm}px) and (max-width: ${
    size.md - 1
  }px)`,
  tablet: `(min-width: ${size.md}px) and (max-width: ${
    size.lg - 1
  }px)`,
  laptop: `(min-width: ${size.lg}px) and (max-width: ${
    size.xl - 1
  }px)`,
  desktop: `(min-width: ${size.xl}px)`
}
