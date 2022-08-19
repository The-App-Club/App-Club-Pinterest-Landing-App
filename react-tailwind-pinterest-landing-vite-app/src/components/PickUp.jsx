import {css, cx} from '@emotion/css';

const PickUp = ({className}) => {
  return (
    <div
      className={cx(
        css`
          display: grid;
          grid-template-columns: repeat(1, 1fr);

          > div.item {
            min-height: 8rem;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `,
        className
      )}
    >
      {[...Array(11).keys()].map((n, index) => {
        return <div key={index} className={'item border-2'}>{`item ${n}`}</div>;
      })}
    </div>
  );
};

export {PickUp};
