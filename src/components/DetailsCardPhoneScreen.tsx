import { Card } from '@/lib/interface'
import Image from 'next/image'
import Location from './Location'

function DetailsCardPhoneScreen({ match }: { match: Card }) {
  return (
    <section>
      <div className=' container mx-auto px-4   text-center block lg:hidden '>
        <div className='flex justify-center items-center flex-col mt-[48px] mx-auto w-[90%] '>
          <div className=' text-right flex flex-col  justify-center items-end w-full '>
            <h2 className='text-[28px] font-bold text-[#28305F] mb-[12px]'>
              {match.title}
            </h2>
            <p className='text-[16px] font-medium text-[#000000CC] w-full mb-[32px]'>
              {match.description}
            </p>
            <p className='text-[16px] font-medium text-[#D9AC4F]  h-[14px]  flex items-center gap-[12px]  justify-end mb-[16px]'>
              {' '}
              {match.location}
              <Image
                className='w-[11px] h-[15.4px]'
                src='/icons/location.svg'
                alt='location'
                width={20}
                height={20}
              />{' '}
            </p>
            <p className='flex flex-row-reverse items-center gap-[12px] text-[16px] font-medium text-[#D9AC4F] mb-[16px]'>
              <Image
                className='w-[16.57px] h-[17.91px]'
                src='/icons/calendar.png'
                alt='phone'
                width={20}
                height={20}
              />
              {match.dayName} {match.day} {match.month}
            </p>
            <p className='flex flex-row-reverse items-center gap-[12px] text-[16px] font-medium text-[#D9AC4F] mb-[16px]'>
              <Image
                className='w-[17px] h-[17px]'
                src='/icons/hour.png'
                alt='phone'
                width={20}
                height={20}
              />
              الساعة{match.time}
            </p>
            <h2 className='text-[18px] font-extrabold text-[#28305F] mb-[7px]'>
              الشروط الأحكام
            </h2>
            <p className='text-[14px] font-medium  text-[#00000099] w-[w-full] mb-[5px]'>
              بشراء هذه التذكره فانت توافق على جميع الشروط والاحكام والقيود
              الخاصه بالفاعليه التى يضعها المنظم قبل او اثناء الفعاليه وهي{' '}
            </p>
            <p className='text-[12px] font-medium text-[#2F375FCC]  h-[24px]  flex flex-row-reverse items-center gap-[4.74px]  justify-end mb-[31px]'>
              عرض المزيد{' '}
              <Image
                className='w-[10px] h-[5px] '
                src='/icons/down.svg'
                alt='down'
                width={20}
                height={20}
              />{' '}
            </p>
            <div className='w-full h-[240px] mb-[80px]'>
              <div className='flex flex-row-reverse justify-between items-center gap-[12px] mb-[14px] '>
                <h3 className='text-[16px] font-bold text-[#000000CC] '>
                  موقع المباراة
                </h3>
                <a
                  className='text-[13px] font-medium text-[#00000080] underline '
                  href=''
                >
                  انتقل الي الموقع{' '}
                </a>
              </div>
              <div className='w-full'>
                <Location />{' '}
              </div>
            </div>
          </div>
          <div>
            <div className='text-right w-full border border-[#2F375F14] rounded-[14px] py-[16px] px-[9px] mt-[25px] '>
              <p className='flex flex-row-reverse  items-start gap-[8px] justify-end text-[12px] font-medium text-[#00000076] w-full h-[38px] mb-3'>
                <Image
                  className='w-[12px] h-[12px] mt-[5px]'
                  src='/images/check.png'
                  alt='phone'
                  width={20}
                  height={20}
                />
                نحن هنا لخدمتك! إذا واجهت أي مشكلة في الدفع أو في تفاصيل
                التذكرة، فريق الدعم متاح على مدار الساعة لمساعدتك
              </p>
              <p className='flex flex-row-reverse items-start gap-[8px] text-[12px] font-medium text-[#00000076] w-full h-[38px]'>
                <Image
                  className='w-[12px] h-[12px] mt-[5px]'
                  src='/images/check.png'
                  alt='phone'
                  width={20}
                  height={20}
                />
                نضمن استرداد الأموال في حال إلغاء الحدث، لتشعر بالراحة في كل
                خطوة.
              </p>
              <p className='flex flex-row-reverse items-start gap-[8px]  text-[12px] font-medium text-[#00000076] w-full h-[38px]'>
                <Image
                  className='w-[12px] h-[12px] mt-[5px]'
                  src='/images/check.png'
                  alt='phone'
                  width={20}
                  height={20}
                />
                عملية الشراء خالية من المخاطر، وسياسة الإلغاء لدينا تتيح لك
                خيارات مرنة تضمن لك أفضل تجربة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailsCardPhoneScreen
