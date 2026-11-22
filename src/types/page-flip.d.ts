declare module 'page-flip' {
  export interface FlipSettings {
    width: number
    height: number
    size?: 'fixed' | 'stretch'
    minWidth?: number
    maxWidth?: number
    minHeight?: number
    maxHeight?: number
    showCover?: boolean
    usePortrait?: boolean
    flippingTime?: number
    drawShadow?: boolean
    mobileScrollSupport?: boolean
  }
  export class PageFlip {
    constructor(el: HTMLElement, settings: FlipSettings)
    loadFromHTML(items: NodeListOf<HTMLElement> | HTMLElement[]): void
    flipNext(corner?: 'top' | 'bottom'): void
    flipPrev(corner?: 'top' | 'bottom'): void
    getCurrentPageIndex(): number
    on(event: 'flip' | 'init' | 'changeState', cb: (e: { data: number | string }) => void): PageFlip
    update(): void
    destroy(): void
  }
}
