import { devOnly } from '@/utils/devOnly';

/**
 * Page to list each components if necessary; Only reachable in development mode.
 *
 * _You can delete this file if you will not using it._
 */
const Components = () => {
  return <div>Hey</div>;
};

export default Components;

export const getServerSideProps = devOnly;
