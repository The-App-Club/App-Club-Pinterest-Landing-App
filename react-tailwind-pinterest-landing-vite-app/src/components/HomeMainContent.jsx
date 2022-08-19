import {Scrollbars} from 'rc-scrollbars';
import thaiFoodTakeout from '../assets/thai-food-takeout.jpg';
import redAndGreenGooseberriesAgainstWhite from '../assets/red-and-green-gooseberries-against-white.jpg';
import smallOrangePumpkinWithGreenLeavesBehind from '../assets/small-orange-pumpkin-with-green-leaves-behind.jpg';
import {Brewing} from './Brewing';
import {PickUp} from './PickUp';
import {css, cx} from '@emotion/css';
import {useDebouncedCallback} from 'use-debounce';
import {useEffect} from 'react';
import {useState} from 'react';

const HomeMainContent = () => {
  const [div4, setDiv4] = useState('div4');
  const [div5, setDiv5] = useState('div5');
  const [div6, setDiv6] = useState('div6');

  const handleResize = useDebouncedCallback((e) => {
    if (window.matchMedia('(max-width: 1250px)').matches) {
      setDiv4('');
      setDiv5('');
      setDiv6('');
    } else {
      setDiv4('div4');
      setDiv5('div5');
      setDiv6('div6');
    }
  }, 600);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={cx(
        css`
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          grid-template-rows: repeat(4, auto);
          overflow: hidden;
          width: 100%;
          > div {
            overflow: hidden;
          }
          .div1 {
            grid-area: 1 / 1 / 3 / 6;
            max-height: 20rem;
            @media (min-height: 800px) {
              max-height: 32rem;
            }
          }
          .div2 {
            grid-area: 3 / 1 / 5 / 4;
            max-height: 16rem;
          }
          .div3 {
            grid-area: 3 / 4 / 5 / 6;
            max-height: 16rem;
          }
          .div4 {
            grid-area: 1 / 6 / 2 / 11;
          }
          .div5 {
            grid-area: 2 / 6 / 5 / 9;
          }
          .div6 {
            grid-area: 2 / 9 / 5 / 11;
          }
          @media (max-width: 1250px) {
            display: flex;
            flex-direction: column;
            .div1,
            .div2,
            .div3 {
              display: none;
            }
          }
          .sp {
            display: none;
            @media (max-width: 1250px) {
              display: flex;
              flex-direction: column;
            }
          }
        `,
        'gap-2'
      )}
    >
      <div className="sp">
        <div
          className={cx(
            css`
              max-height: 18rem;
            `,
            'border-2 hover:cursor-pointer overflow-hidden'
          )}
        >
          <img
            src={thaiFoodTakeout}
            alt="thaiFoodTakeout"
            className={css`
              width: 100%;
              height: 100%;
              display: block;
              object-fit: cover;
              object-position: center center;
              :hover {
                transform: scale(1.2);
                transition: transform 0.6s ease;
              }
            `}
          />
        </div>
        <div
          className={cx(
            css`
              max-height: 12rem;
            `,
            'flex items-stretch'
          )}
        >
          <div
            className={cx(
              css`
                flex-basis: 60%;
              `,
              'border-2 hover:cursor-pointer overflow-hidden'
            )}
          >
            <img
              src={smallOrangePumpkinWithGreenLeavesBehind}
              alt="smallOrangePumpkinWithGreenLeavesBehind"
              className={css`
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
                object-position: center center;
                :hover {
                  transform: scale(1.2);
                  transition: transform 0.6s ease;
                }
              `}
            />
          </div>
          <div
            className={cx(
              css`
                flex-basis: 40%;
              `,
              `border-2 hover:cursor-pointer overflow-hidden`
            )}
          >
            <img
              src={redAndGreenGooseberriesAgainstWhite}
              alt="redAndGreenGooseberriesAgainstWhite"
              className={css`
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
                object-position: center center;
                :hover {
                  transform: scale(1.2);
                  transition: transform 0.6s ease;
                }
              `}
            />
          </div>
        </div>
      </div>
      <div className="div1 border-2 hover:cursor-pointer">
        <img
          src={thaiFoodTakeout}
          alt="thaiFoodTakeout"
          className={css`
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            object-position: center center;
            :hover {
              transform: scale(1.2);
              transition: transform 0.6s ease;
            }
          `}
        />
      </div>
      <div className="div2 border-2 hover:cursor-pointer">
        <img
          src={smallOrangePumpkinWithGreenLeavesBehind}
          alt="smallOrangePumpkinWithGreenLeavesBehind"
          className={css`
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            object-position: center center;
            :hover {
              transform: scale(1.2);
              transition: transform 0.6s ease;
            }
          `}
        />
      </div>
      <div className={`div3 border-2 hover:cursor-pointer`}>
        <img
          src={redAndGreenGooseberriesAgainstWhite}
          alt="redAndGreenGooseberriesAgainstWhite"
          className={css`
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            object-position: center center;
            :hover {
              transform: scale(1.2);
              transition: transform 0.6s ease;
            }
          `}
        />
      </div>
      <div className={`div4 border-2 relative p-2`}>
        <div className="w-full flex items-center justify-between pb-2">
          <h2 className="text-xl">What's Lastest News</h2>
          <button
            type="button"
            className="px-6 py-2 bg-white hover:bg-gray-100 text-black border-2 rounded-lg"
          >
            See All
          </button>
        </div>
        <p className="">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <div className={`div5 border-2`}>
        <div className="w-full flex items-center justify-between pr-3 py-2">
          <h2 className="text-lg px-4 py-2">What’s Brewing</h2>
          <button
            type="button"
            className="px-4 py-2 bg-white hover:bg-gray-100 text-black border-2 rounded-lg"
          >
            See All
          </button>
        </div>
        <Brewing
          className={css`
            display: none;
            @media (max-width: 1250px) {
              display: grid;
            }
          `}
        />
        <Scrollbars
          className={cx(
            css`
              width: 100%;
              height: 100%;
              display: block;
              @media (max-width: 1250px) {
                display: none;
              }
            `,
            `overflow-hidden overflow-y-auto`
          )}
        >
          <Brewing className={'px-3 pb-20'} />
        </Scrollbars>
      </div>
      <div className={`div6 border-2`}>
        <div className="w-full flex items-center justify-between pr-3 py-2">
          <h2 className="text-lg px-4 py-2">Pick Up</h2>
          <button
            type="button"
            className="px-4 py-2 bg-white hover:bg-gray-100 text-black border-2 rounded-lg"
          >
            See All
          </button>
        </div>

        <PickUp
          className={cx(
            css`
              display: none;
              @media (max-width: 1250px) {
                display: grid;
              }
            `,
            `gap-2 px-2 pb-2`
          )}
        />
        <Scrollbars
          className={cx(
            css`
              width: 100%;
              height: 100%;
              display: block;
              @media (max-width: 1250px) {
                display: none;
              }
            `,
            `overflow-hidden overflow-y-auto`
          )}
        >
          <PickUp className={`gap-2 px-3 pb-20`} />
        </Scrollbars>
      </div>
    </div>
  );
};

export {HomeMainContent};
