declare module 'swiper' {
  import Swiper from 'swiper';

  export default Swiper;

  export interface NavigationOptions {
    nextEl: string | HTMLElement;
    prevEl: string | HTMLElement;
  }

  export interface PaginationOptions {
    el: string | HTMLElement;
    clickable?: boolean;
  }
}
