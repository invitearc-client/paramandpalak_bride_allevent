"use client";

export default function Events() {
  return (
    <div
      id="itinerary"
      className="flex scroll-mt-6 flex-col justify-center mt-10 lg:mt-40 items-center"
    >
      <p className="md:text-2xl text-[16px] text-[#BC610A] font-cormorant-garamond">
        Three days of celebration
      </p>
      <h2
        className="text-[#BC610A] font-cormorant-garamond text-center
            md:text-5xl text-[30px] lg:text-[80px] leading-tight mt-2 font-semibold"
      >
        Wedding Events
      </h2>

      <h2 className="text-white bg-[#BC610A] font-cormorant-garamond text-[20px] md:text-xl lg:text-[30px] mt-5 border px-6 py-2 rounded-xl">
        Sunday, 29th November 2026
      </h2>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[350px] md:min-h-[600px] px-16 md:px-17 py-5 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/haldi_v.png')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:mt-30 mt-10">
          <h2 className="text-[#BC610A] font-cormorant-garamond text-[30px] md:text-3xl lg:text-[40px] leading-tight font-semibold">
            Haldi
          </h2>

          <p className="text-[#BC610A] font-cormorant-garamond text-base md:text-lg mt-3">
            11:00 am onwards
          </p>
        </div>
      </div>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[350px] md:min-h-[600px] px-11 md:px-17 py-5 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/tilak.webp')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:mt-30 mt-10">
          <h2 className="text-[#BC610A] font-cormorant-garamond text-[30px] md:text-3xl lg:text-[40px] leading-tight font-semibold">
            Tilak &<br /> Engagement
          </h2>

          <p className="text-[#BC610A] font-cormorant-garamond text-base md:text-lg mt-3">
            6:00 pm onwards
          </p>
        </div>
      </div>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[350px] md:min-h-[600px] px-7 md:px-17 py-5 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/samela.webp')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:mt-30 mt-8">
          <h2 className="text-[#BC610A] font-cormorant-garamond text-[26px] md:text-3xl lg:text-[40px] leading-tight font-semibold">
           Bhajan Jamming <br />& Reception
          </h2>

          <p className="text-[#BC610A] font-cormorant-garamond text-base md:text-lg mt-3">
            7:00 pm onwards
          </p>
        </div>
      </div>

      <div className="flex items-center w-full mt-16 mb-13">
        <div className="flex-1">
          <div className="border-t-2 border-[#BC610A]" />
          <div className="border-t border-[#BC610A] mt-1" />
        </div>

        <span className="mx-4 text-[#BC610A] text-lg">✦</span>

        <div className="flex-1">
          <div className="border-t-2 border-[#BC610A]" />
          <div className="border-t border-[#BC610A] mt-1" />
        </div>
      </div>

      <h2 className="font-cormorant-garamond text-[18px] md:text-xl lg:text-[30px] border px-8 py-2 rounded-xl text-white bg-[#BC610A]">
        Monday, 30th November 2026
      </h2>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[350px] md:min-h-[600px] px-15 md:px-17 py-5 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/carnival.webp')] bg-cover bg-center bg-no-repeat"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:mt-30 mt-3">
          <h2 className="text-[#BC610A] font-cormorant-garamond text-[30px] md:text-3xl lg:text-[40px] leading-tight font-semibold">
            Carnival
          </h2>

          <p className="text-[#BC610A] font-cormorant-garamond text-base md:text-lg mt-1">
            11:00 am onwards
          </p>

          <h2 className="text-[#BC610A] font-cormorant-garamond text-[30px] md:text-3xl lg:text-[40px] leading-tight font-semibold mt-3">
            Sajjangoth
          </h2>

          <p className="text-[#BC610A] font-cormorant-garamond text-base md:text-lg mt-1">
            1:00 pm onwards
          </p>
        </div>
      </div>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[350px] md:min-h-[600px] px-10 md:px-17 py-5 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/sangeet_event_n.webp')] bg-cover bg-center bg-no-repeat"></div>

        <div className="relative z-10 flex flex-col md:mt-30 mt-13">
          <h2 className="text-white font-cormorant-garamond text-[30px] md:text-3xl lg:text-[40px] leading-tight font-semibold">
            Mayra
          </h2>

          <p className="text-white font-cormorant-garamond text-base md:text-lg mt-1">
            2:00 pm onwards
          </p>

          <h2 className="text-white font-cormorant-garamond text-[30px] md:text-3xl lg:text-[40px] leading-tight font-semibold mt-3">
            Sangeet Night
          </h2>

          <p className="text-white font-cormorant-garamond text-base md:text-lg mt-1">
            6:00 pm onwards
          </p>
        </div>
      </div>

      <div className="flex items-center w-full mt-16 mb-13">
        <div className="flex-1">
          <div className="border-t-2 border-[#BC610A]" />
          <div className="border-t border-[#BC610A] mt-1" />
        </div>

        <span className="mx-4 text-[#BC610A] text-lg">✦</span>

        <div className="flex-1">
          <div className="border-t-2 border-[#BC610A]" />
          <div className="border-t border-[#BC610A] mt-1" />
        </div>
      </div>

      <h2 className="font-cormorant-garamond text-[20px] md:text-xl lg:text-[30px] border px-6 py-2 rounded-xl text-white bg-[#BC610A]">
        Tuesday, 1st December 2026
      </h2>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[350px] md:min-h-[600px] px-6.5 md:px-17 py-5 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/samela.webp')] bg-cover bg-center bg-no-repeat"></div>

        <div className="relative z-10 flex flex-col md:mt-30 mt-6">
          <h2 className="text-[#BC610A] font-cormorant-garamond text-[28px] md:text-3xl lg:text-[40px] leading-tight font-semibold">
            Samela & Nikasi
          </h2>

          <p className="text-[#BC610A] font-cormorant-garamond text-base md:text-lg mt-1">
            10:00 am onwards
          </p>

          <h2 className="text-[#BC610A] font-cormorant-garamond text-[28px] md:text-3xl lg:text-[40px] leading-7 font-semibold mt-3">
            Varmala
          </h2>

          <p className="text-[#BC610A] font-cormorant-garamond text-base md:text-lg mt-1">
            12:00 pm onwards
          </p>
        </div>
      </div>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl min-h-[350px] md:min-h-[600px] px-18 md:px-17 py-5 md:mt-20 mt-8">
        <div className="absolute inset-0 bg-[url('/assets/reception.webp')] bg-cover bg-center bg-no-repeat"></div>

        <div className="relative z-10 flex flex-col md:mt-30 mt-10">
          {/* <h2 className="text-[#702D42] font-cormorant-garamond text-[28px] md:text-3xl lg:text-[40px] leading-tight font-semibold">
            Reception
          </h2>

          <p className="text-[#702D42] font-cormorant-garamond text-base md:text-lg mt-1">
            1:00 pm onwards
          </p> */}

          <h2 className="text-[#702D42] font-cormorant-garamond text-[28px] md:text-3xl lg:text-[40px] leading-7 font-semibold mt-3">
            Phere
          </h2>

          <p className="text-[#702D42] font-cormorant-garamond text-base md:text-lg mt-1">
            4:00 pm onwards
          </p>
        </div>
      </div>

     
 <div className="relative flex flex-col text-center overflow-hidden rounded-2xl px-11 py-0 md:px-19 lg:px-13 md:mt-20 mt-12">
        <div className="relative z-10 flex flex-col">
          <div className="mt-8 flex flex-col items-center text-center md:mt-10">
            <img
              src="/assets/bride.webp"
              alt="Wedding Logo"
              className="w-[80px] sm:w-[150px] md:w-[200px]"
            />
          </div>
          <h2 className="text-[#702B36] font-cormorant-garamond text-[28px] md:text-3xl lg:text-[50px] font-semibold">
            Bride's Side
          </h2>
          <p className="text-[#702B36]  font-cormorant-garamond text-[16px] md:text-base mt-2 font-bold">
            Manish Kumarji, Omprakashji Sanghi, Ganeshpeth, Nagpur
          </p>

          <p className="text-[#702B36]  font-cormorant-garamond text-[16px] md:text-base mt-2">
            Megha Plastics, Gandhi Gate, Mahal, Nagpur
          </p>

          <p className="text-[#702B36]  font-cormorant-garamond text-[16px] md:text-base mt-2">
            Dosai South Indian Kitchen, Ganeshpeth, Nagpur
          </p>
        </div>
      </div>

      <div className="relative flex flex-col text-center overflow-hidden rounded-2xl px-11 py-0 md:px-19 lg:px-13 md:mt-20 mt-8">
        <div className="relative z-10 flex flex-col md:mt-45 mt-10">
          <div className="mt-8 flex flex-col items-center text-center md:mt-10">
            <img
              src="/assets/groom.webp"
              alt="Wedding Logo"
              className="w-[80px] sm:w-[150px] md:w-[200px]"
            />
          </div>
          <h2 className="text-[#702B36] font-cormorant-garamond text-[28px] md:text-3xl lg:text-[50px] font-semibold mt-2">
            Groom's Side
          </h2>
          <p className="text-[#702B36]  font-cormorant-garamond text-[16px] md:text-base mt-2 font-semibold">
            Bhai Sureshkumar Rameshwardasji Lohiya
          </p>

          <p className="text-[#702B36]  font-cormorant-garamond text-sm md:text-base mt-2">
            <span className="text-[15px] md:text-base lg:text-xl  font-cormorant-garamond font-semibold">
              Deepak R. Lohia Pvt. Ltd.
            </span>
          </p>

          <p className="text-[#702B36]  font-cormorant-garamond text-[14px] md:text-base">
            (Engineers & Contractors)
          </p>

          <p className="text-[#702B36]  font-cormorant-garamond text-sm md:text-base mt-2">
            <span className="text-[15px] md:text-base lg:text-xl  font-cormorant-garamond font-semibold">
              Gondia Residence:
            </span>
          </p>

          <p className="text-[#702B36]  font-cormorant-garamond text-[14px] md:text-base">
            Amrut Kunj, Sarafa Line, Gondia – 441601
          </p>

          <p className="text-[#702B36]  font-cormorant-garamond text-sm md:text-base mt-2">
            <span className="text-[15px] md:text-base lg:text-xl  font-cormorant-garamond font-semibold">
              Nagpur Residence:
            </span>
          </p>

          <p className="text-[#702B36]  font-cormorant-garamond text-[14px] md:text-base">
            38/39, Arsh, Gawande Layout, Pratap Nagar, Nagpur, Maharashtra.
          </p>
        </div>
      </div>

      
    </div>
  );
}