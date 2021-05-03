import { light } from './light'

const { colors, fontSize } = light

export type ColorsType = keyof typeof colors
export type FontSizeType = keyof typeof fontSize

export * from './light'
