import { TeamItem, Showcase } from 'components/common';

import team from 'data/team.json';

const Spotlight = () => {
  return (
    <div className='mt-24'>
      <h2 className='text-3xl font-semibold'>Members Spotlight</h2>
      <div className='mt-4 border-l-4 border-rose-300 pl-4 text-gray-500'>
        View 3 random members of the club at every refresh!
      </div>
      <Showcase Component={TeamItem} items={team} max={3} linkToAll='/about' />
    </div>
  );
};

export default Spotlight;
