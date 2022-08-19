import {css, cx} from '@emotion/css';

const Brewing = ({className}) => {
  return (
    <div
      className={cx(
        css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          > div.item {
            min-height: 8rem;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `,
        `gap-2 px-2 pb-2`,
        className
      )}
    >
      {[...Array(10).keys()].map((n, index) => {
        return <div key={index} className={'item border-2'}>{`item ${n}`}</div>;
      })}
    </div>
  );
};

export {Brewing};
