import React from 'react'
import RecentUpdates from './RecentUpdates'
import MarqueeSection from './MarqueeSection'

const UpdatesNClients = () => {
  return (
    <>
    <div data-scroll data-scroll-section data-scroll-speed="0.1"  className='mt-[-0.09rem] sm:mt-[-0.04rem] w-auto rounded-xl'>
      <RecentUpdates />
      <MarqueeSection />
    </div>
    </>
  )
}

export default UpdatesNClients