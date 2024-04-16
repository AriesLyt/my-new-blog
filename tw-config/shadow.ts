const shadowColor = {
  base: '#00000045',
  dark: {
    base: '#ffffff45'
  }
}

const shadow = {
  base: `0px 0.5px 4px ${shadowColor.base}`,
  baseActive: `0.5px 1px 7px ${shadowColor.base}`,
  darkBase: `0px 0.5px 5px 1px ${shadowColor.dark.base}`,
  darkBaseActive: `0.5px 1px 15px 1px ${shadowColor.dark.base}`
}

export { shadow, shadowColor }
