import {css, cx} from '@emotion/css';
import {Link} from 'react-router-dom';
import {default as Layout} from '../../layouts/default';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Keyboard,
} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

import img1 from '../../assets/dinner-for-one-of-wood-fired-pizza-paired-with-cold-beer.jpg';
import img2 from '../../assets/dinner-party.jpg';
import img3 from '../../assets/restaurant-breakfast.jpg';
import {Footer} from '../../components/Footer';

// SwiperCore.use([Mousewheel,Keyboard]);

const HomePage = ({pageName, notifier}) => {
  return (
    <Layout pageName={pageName} notifier={notifier}>
      <section
        className={cx(
          `max-w-7xl mx-auto w-full relative pt-12 px-2`,
          css`
            max-width: 100%;
            min-height: 100vh;
            height: 100%;
          `
        )}
      >
        {/* <h2 className="text-3xl flex items-center justify-center">HomePage</h2> */}
        <Swiper
          // install Swiper modules
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Mousewheel,
            Keyboard,
          ]}
          spaceBetween={50}
          slidesPerView={1}
          direction={'vertical'}
          // navigation
          speed={600}
          mousewheel={true}
          keyboard={true}
          pagination={{clickable: true}}
          scrollbar={{draggable: true}}
          onSwiper={(swiper) => {
            console.log(swiper);
          }}
          onSlideChange={() => {
            console.log('slide change');
          }}
          onReachEnd={(e) => {
            console.log(`end`);
          }}
          className={cx(
            css`
              width: 100%;
              height: 100%;
              .swiper-wrapper {
                width: 100%;
                height: calc(100vh - 3rem);
                .swiper-slide {
                }
              }
            `,
            ``
          )}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Footer />
          </SwiperSlide>
        </Swiper>
      </section>
    </Layout>
  );
};

export {HomePage};
