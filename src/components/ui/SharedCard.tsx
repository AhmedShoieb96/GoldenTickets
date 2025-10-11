import Image from 'next/image'

function SharedCard({
  image,
  title,
  day,
  month,
  location,
  price,
}: {
  image: string
  title: string
  day: string
  month: string
  location: string
  price: string
}) {
  return (
    <div className='relative flex-shrink-0  w-[340px] sm:w-[406px] h-[451px] border-[#D9AC4F] border-[1px] rounded-[30px]  overflow-hidden '>
      <Image
        src={image ?? '/image.png'}
        alt='heart'
        width={200}
        height={200}
        className=' absolute top-0 left-0 object-cover h-[306px]  w-[406px]'
      />
      <div className='absolute top-[50%] left-[43%]  w-[70.33px] h-[70.72px]   border-t-3 border-l-2 border-white rounded-xl rotate-30 z-10'></div>
      <div
        className='absolute z-20 shadow-lg top-[50%] left-[43%] w-[66.33px] h-[66.72px]     text-white  text-center   rotate-7 bg-[linear-gradient(320.74deg,_#28305F_-2.7%,_#D9AC4F_94.41%)] rounded-xl    opacity-100  
flex flex-col items-center justify-center '
      >
        <span className='text-[20px] font-bold'>{day}</span>
        <span className='text-[8px] '>{month}</span>
      </div>
      <div className='absolute top-[50%] left-[43%] w-[70.33px] h-[70.72px]    border-b-3 border-r-3 border-white rounded-xl  rotate-30 z-30 '></div>
      <div className='absolute bottom-0 w-full h-[145px]  bg-opacity-80 rounded-b-[30px] z-10 p-4  flex flex-col items-right justify-center'>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        <p className='inline-flex items-center gap-1 justify-end text-sm mb-1'>
          {location}
          <Image
            src='/icons/location.svg'
            alt='calendar'
            width={10}
            height={10}
          />
        </p>
        <p className='inline-flex items-center gap-1 justify-end text-sm mb-1'>
          <Image
            src='/images/reyal.png'
            alt='calendar'
            width={15}
            height={15}
          />
          <span className='font-bold'>{price}</span>يبدأ من ريال
          <Image
            src='/icons/pricetag.svg'
            alt='calendar'
            width={10}
            height={10}
          />
        </p>
      </div>
    </div>
  )
}

export default SharedCard
