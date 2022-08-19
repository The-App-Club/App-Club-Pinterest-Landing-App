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

import eyeCatchImage1 from '../../assets/dinner-for-one-of-wood-fired-pizza-paired-with-cold-beer.jpg';
import eyeCatchImage2 from '../../assets/fine-food-dining-in-style.jpg';
import eyeCatchImage3 from '../../assets/dinner-party.jpg';
import eyeCatchImage4 from '../../assets/restaurant-breakfast.jpg';
import {Form} from '../../components/Form';

const HomePage = ({pageName, notifier}) => {
  return (
    <Layout pageName={pageName} notifier={notifier}>
      <section
        className={cx(
          `max-w-7xl mx-auto w-full relative pt-12`,
          css`
            max-width: 100%;
            min-height: 100vh;
            height: 100%;
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
          pagination={{clickable: true}}
          // scrollbar={{draggable: true}}
          onSwiper={(swiper) => {
            console.log(`mount`);
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
          <SwiperSlide
            className={cx(
              css`
                @media (max-width: 1100px) {
                  flex-direction: column;
                  > .left {
                    order: 2;
                  }
                  > .right {
                    order: 1;
                  }
                }
              `,
              `flex justify-center items-center gap-10`
            )}
          >
            <div className="left">
              <img
                src={eyeCatchImage1}
                alt={'eyeCatchImage1'}
                className={css`
                  width: 450px;
                  @media (max-width: 768px) {
                    width: 320px;
                  }
                  display: block;
                `}
              />
            </div>
            <div className={`right`}>
              <h2 className="text-2xl flex items-center justify-center">
                What's Today Dinner?
              </h2>
              <p className="text-lg flex items-center justify-center">
                Let's bebop search!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className={cx(
              css`
                @media (max-width: 1100px) {
                  flex-direction: column;
                  > .left {
                    order: 1;
                  }
                  > .right {
                    order: 2;
                  }
                }
              `,
              `flex justify-center items-center gap-10`
            )}
          >
            <div className="left">
              <h2 className="text-2xl flex items-center justify-center">
                What's Tomorrow Dinner?
              </h2>
              <p className="text-lg flex items-center justify-center">
                Let's bebop search!
              </p>
            </div>
            <div className={`right`}>
              <img
                src={eyeCatchImage2}
                alt={'eyeCatchImage2'}
                className={css`
                  width: 250px;
                  @media (max-width: 768px) {
                    width: 180px;
                  }
                  display: block;
                `}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide
            className={cx(
              css`
                @media (max-width: 1100px) {
                  flex-direction: column;
                  > .left {
                    order: 2;
                  }
                  > .right {
                    order: 1;
                  }
                }
              `,
              `flex justify-center items-center gap-10`
            )}
          >
            <div className="left px-2">
              <Form />
            </div>
            <div className={`right`}>
              <h2 className="text-2xl">Now Create Account!</h2>
              <img
                src={eyeCatchImage3}
                alt={'eyeCatchImage3'}
                className={css`
                  width: 450px;
                  @media (max-width: 768px) {
                    display: none;
                  }
                  display: block;
                `}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Footer />
          </SwiperSlide>
        </Swiper>
      </section>
    </Layout>
  );
};

export {HomePage};
