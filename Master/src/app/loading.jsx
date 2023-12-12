export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return   <>
    {/* Preloader Start*/}
    <div className='preloader'>
      <div className='swapping-squares-spinner'>
        <div className='square' />
        <div className='square' />
        <div className='square' />
        <div className='square' />
      </div>
    </div>
    {/* Preloader End */}
  </>
  }