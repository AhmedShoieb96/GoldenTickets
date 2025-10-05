import Image from 'next/image'
function ViewMoreBTN({ path }: { path: string }) {
  return (
    <section>
      <div className='container  mx-auto  text-right'>
        <div className='lg:w-[85%] mx-auto border-[1px] border-[#D9AC4F] rounded-[30px] w-full h-[65px] flex items-center justify-center '>
          <a
            href={`${path}`}
            type='button'
            className=' text-[#D9AC4F] text-[20px] font-bold underline flex items-center gap-[4.36px]  bg-transparent mx-auto lg:mx-0'
          >
            <Image
              src='/icons/arrowLeftTop.svg'
              alt='arrow'
              width={20}
              height={20}
            />
            عرض المزيد
          </a>
        </div>
      </div>
    </section>
  )
}

export default ViewMoreBTN
