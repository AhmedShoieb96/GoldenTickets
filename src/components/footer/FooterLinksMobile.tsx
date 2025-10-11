import Image from 'next/image'
import { Button } from '../ui/button'

function FooterLinksMobile() {
  return (
    <div>
      <div className='container  mx-auto w-[100%] mb-[21px] px-[10px] block lg:hidden  '>
        <div
          className='bg-[#FFFFFF] mx-auto   h-[100%]   
                rounded-[20px] border-[1px] border-[#D9AC4F] shadow-sm shadow-[#D9AC4F]'
        >
          <div className='flex justify-between items-center flex-col-reverse  mx-auto'>
            <div className=' text-center   '>
              <p className='text-18px  mt-[24px] font-[500] mb-[16px]'>
                تطبيق <span className='text-primary'>قولدن تيكت</span> الجديد
              </p>
              <div className='flex  gap-[12px] justify-center items-end mb-[20px]'>
                <Image
                  src='/images/appstore.png'
                  alt='app'
                  width={110}
                  height={50}
                  className=' w-[25%] h-[33px]   '
                />
                <Image
                  src='/images/appGallery.png'
                  alt='app'
                  width={110}
                  height={50}
                  className=' w-[25%] h-[33px]   '
                />

                <Image
                  src='/images/googleplay.png'
                  alt='google'
                  width={110}
                  height={50}
                  className='w-[25%] h-[33px]   '
                />
              </div>
            </div>

            <div className='container mx-auto text-center !w-[298px] !h-[75.21px]  '>
              <h2
                className=' relative mx-auto text-[16px] font-bold w-[135px] mb-[14px] mt-[16px]
               after:content-[""] after:block before:w-[70px]  before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:right-0'
              >
                وسائل الدفع المتاحة
              </h2>
              <div className=' flex justify-center items-center gap-[3px] mt-6  flex-wrap '>
                <div className=''>
                  <Image
                    className='w-[48px] h-[20px]   '
                    src='/images/apple.png'
                    alt='apple'
                    width={150}
                    height={50}
                  />
                </div>
                <div className=''>
                  <Image
                    className='w-[60px]    '
                    src='/images/magdy.png'
                    alt='magdy'
                    width={150}
                    height={50}
                  />
                </div>
                <div className=''>
                  <Image
                    className='w-[55px]  '
                    src='/icons/tamara.svg'
                    alt='tamara'
                    width={150}
                    height={50}
                  />
                </div>
                <div className=''>
                  <Image
                    className='w-[50px]  '
                    src='/images/visa.png'
                    alt='visa'
                    width={150}
                    height={50}
                  />
                </div>
                <div className=''>
                  <Image
                    className='w-[36px] h-[24.46px]   '
                    src='/images/master.png'
                    alt='master'
                    width={150}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-row-reverse gap-[12px] text-right mt-[40px] '>
              <a
                className='h-[32px] text-[12px] underline font-[500] '
                href='#'
              >
                من نحن
              </a>
              <a className='h-[32px] text-[12px] underline font-[500]' href='#'>
                اتصل بنا
              </a>
              <a className='h-[32px] text-[12px] underline font-[500]' href='#'>
                الاسئلة المتكررة
              </a>
              <a className='h-[32px] text-[12px] underline font-[500]' href='#'>
                الشروط والأحكام
              </a>
            </div>
            <div className='flex flex-col justify-center items-center mx-auto mt-[47px]  gap-4 text-right '>
              <Image
                className='w-[255px] h-[89px]'
                src='/images/الشعار.png'
                alt='LOGO'
                width={150}
                height={50}
              />
              <div className='display flex  justify-start gap-4 '>
                <Button
                  variant='ghost'
                  size='default'
                  className='   cursor-pointer  w-[129px] h-[44px] border border-primary '
                >
                  <Image
                    src='/icons/vector.svg'
                    alt='worldicon'
                    width={20}
                    height={20}
                  />
                  <span className='text-primary'>بيع تذكرتك </span>
                </Button>

                <Button
                  variant='ghost'
                  size='default'
                  className=' text-primary  cursor-pointer  w-[129px] h-[44px] border border-primary '
                >
                  أضف فعالية
                </Button>
              </div>
              <div className='display flex  justify-start gap-[12px] '>
                <div className='!p-[7px] border  border-[#2F375F] rounded-[4px]'>
                  <Image
                    className='w-[24.46px] h-[24.46px]   '
                    src='/icons/x.png'
                    alt='X'
                    width={150}
                    height={50}
                  />
                </div>
                <div className='!p-[7px] border  border-[#2F375F] rounded-[4px]'>
                  <Image
                    className='w-[24.46px] h-[24.46px]   '
                    src='/icons/tiktok.png'
                    alt='tiktok'
                    width={150}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterLinksMobile
