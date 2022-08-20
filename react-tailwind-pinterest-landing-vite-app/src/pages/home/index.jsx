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
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

import {Footer} from '../../components/Footer';
import {Slider} from '../../components/Slider';
import {useState} from 'react';
import {Today} from '../../components/Today';
import {Tomorrow} from '../../components/Tomorrow';
import {CreateAccount} from '../../components/CreateAccount';
import {Form} from '../../components/Form';

const HomePage = ({pageName, notifier}) => {
  const [doFocus, setDoFocus] = useState(false);
  return (
    <Layout pageName={pageName} notifier={notifier}>
      <section
        className={cx(
          `max-w-7xl mx-auto w-full relative pt-12`,
          css`
            max-width: 100%;
            min-height: 100vh;
            height: 100%;
            overflow: hidden;
          `
        )}
      >
        <Swiper
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
          speed={700}
          mousewheel={true}
          keyboard={true}
          pagination={{clickable: false}}
          // scrollbar={{draggable: true}}
          onSwiper={(swiper) => {
            // console.log(`mount`);
          }}
          onSlideChange={(e) => {
            console.log('slide change', e.activeIndex);
            setDoFocus(e.activeIndex === 3);
          }}
          onReachEnd={(e) => {
            // console.log(`end`);
          }}
          className={cx(
            css`
              width: 100%;
              height: 100%;
              .swiper-wrapper {
                width: 100%;
                margin: 0 auto;
                height: calc(100vh - 3rem);
                .swiper-slide {
                  padding: 0 9rem;
                  @media (max-width: 768px) {
                    padding: 0 1rem;
                  }
                }
              }
            `,
            ``
          )}
        >
          <SwiperSlide>
            <Slider />
          </SwiperSlide>
          <SwiperSlide>
            <Today />
          </SwiperSlide>
          <SwiperSlide>
            <Tomorrow />
          </SwiperSlide>
          <SwiperSlide>
            <CreateAccount doFocus={doFocus} />
          </SwiperSlide>
          <SwiperSlide>
            <Footer />
          </SwiperSlide>
        </Swiper>
      </section>
    </Layout>
  );
};

export {HomePage};
