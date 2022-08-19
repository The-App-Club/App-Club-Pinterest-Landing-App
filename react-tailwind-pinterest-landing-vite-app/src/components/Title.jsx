import {AnimatePresence} from 'framer-motion';
import {css} from '@emotion/css';
import {Layout} from '../layouts/popup';

const Title = ({tik, text}) => {
  return (
    <div
      className={css`
        width: 100%;
        min-height: 4rem;
        @media (max-width: 768px) {
          min-height: 3rem;
        }
      `}
    >
      {
        <AnimatePresence>
          {tik && (
            <Layout>
              <h2 className="text-3xl font-bold p-4">{text}</h2>
            </Layout>
          )}
        </AnimatePresence>
      }
    </div>
  );
};

export {Title};
