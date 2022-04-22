import Vue from "vue";
import {
  Swiper as SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
} from "swiper/swiper.esm";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
SwiperClass.use([Pagination, Mousewheel, Autoplay]);
Vue.use(getAwesomeSwiper(SwiperClass));
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);
import "swiper/swiper-bundle.css";
