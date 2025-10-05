import Image from 'next/image'
function Partenars() {
  return (
    <section className='mb-[108px] sm:px-[10px]'>
      <div className='container mx-auto   text-center rounded-[10px] mb-[53px]'>
        <h1 className=' text-[32px] xl:text-[40px] font-bold  '>
          شركاء النجاح
        </h1>
      </div>
      <div className='relative overflow-hidden '>
        <div className=' flex w-full  animate-scroll-continuous  justify-center items-center gap-5    mb-10 '>
          <div className='flex-shrink-0 h-[128px] py-[30px] px-[25px] bg-[#ffffff] rounded-[10px]  flex justify-center items-center '>
            <Image
              className='w-[237px] h-[68px] '
              src='/images/mcit.png'
              alt='appGallery'
              width={100}
              height={100}
            />
          </div>
          <div className=' flex-shrink-0 h-[128px] py-[30px] px-[25px] bg-[#ffffff] rounded-[10px]  flex justify-center items-center '>
            <Image
              className='w-[204px] h-[68px] '
              src='/images/ministry.png'
              alt='appGallery'
              width={100}
              height={100}
            />
          </div>
          <div className=' flex-shrink-0 h-[128px] py-[30px] px-[25px] bg-[#ffffff] rounded-[10px]  flex justify-center items-center '>
            <Image
              className='w-[276px] h-[68px]'
              src='/images/city.png'
              alt='city'
              width={100}
              height={100}
            />
          </div>
          <div className=' flex-shrink-0 h-[128px] py-[30px] px-[25px] bg-[#ffffff] rounded-[10px]  flex justify-center items-center '>
            <Image
              className='w-[396px] h-[68px]'
              src='/images/general.png'
              alt='general'
              width={100}
              height={100}
            />
          </div>
          <div className='flex-shrink-0 h-[128px] py-[30px] px-[25px] bg-[#ffffff] rounded-[10px]  flex justify-center items-center '>
            <Image
              className='w-[237px] h-[68px] '
              src='/images/mcit.png'
              alt='appGallery'
              width={100}
              height={100}
            />
          </div>
          <div className=' flex-shrink-0 h-[128px] py-[30px] px-[25px] bg-[#ffffff] rounded-[10px]  flex justify-center items-center '>
            <Image
              className='w-[204px] h-[68px] '
              src='/images/ministry.png'
              alt='appGallery'
              width={100}
              height={100}
            />
          </div>
          <div className=' flex-shrink-0 h-[128px] py-[30px] px-[25px] bg-[#ffffff] rounded-[10px]  flex justify-center items-center '>
            <Image
              className='w-[276px] h-[68px]'
              src='/images/city.png'
              alt='city'
              width={100}
              height={100}
            />
          </div>
          <div className=' flex-shrink-0 h-[128px] py-[30px] px-[25px] bg-[#ffffff] rounded-[10px]  flex justify-center items-center '>
            <Image
              className='w-[396px] h-[68px]'
              src='/images/general.png'
              alt='general'
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partenars
