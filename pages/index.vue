<template>
  <div class="relative z-0 bg-slate-50" style="font-family: Mulish, sans-serif">
    <!-- Floating Button -->
    <div
      class="fixed bottom-0 z-50 w-full px-6 py-3 backdrop-blur-2xl lg:hidden"
    >
      <button
        @click="toggleRegistrationForm"
        class="px-5 py-2 md:px-6 md:py-3 rounded-xl bg-[#073289] w-full flex justify-center"
      >
        <div class="text-lg font-semibold text-white md:text-2xl">Book Now</div>
      </button>
    </div>
    <!-- Hero -->

    <div class="flex justify-center w-full py-4 pl-4 bg-white md:hidden">
      <img
        src="/public/title.png"
        alt=""
        class="w-[120px] sm:w-280 sm:h-10 lg:w-[190px] xl:w-[280px]"
      />
    </div>

    <div class="pb-5 xl:px-0 lg:pb-20">
      <div
        class="relative flex justify-center w-full mx-auto h-[318px] md:h-[430px] lg:h-[500px] xl:h-[700px] bg-red-300"
      >
        <div
          class="bg-gray-900 absolute h-[318px] md:h-[430px] lg:h-[500px] xl:h-[700px] w-full"
        ></div>
        <video autoplay loop muted class="z-0 object-cover w-full opacity-60">
          <source src="/hero.mp4" type="video/webm" />
        </video>

        <div
          class="absolute hidden text-lg font-bold text-white md:block top-5 left-5 md:top-6 md:left-8 md:text-xl lg:text-2xl xl:text-4xl"
        >
          <img
            src="/public/title.png"
            alt=""
            class="w-[120px] sm:w-280 sm:h-10 lg:w-[190px] xl:w-[280px]"
          />
        </div>
        <div
          class="absolute inset-0 z-10 flex items-center justify-center text-white"
        >
          <div
            class="hidden md:block xl:text-6xl md:text-3xl text-2xl lg:text-5xl text-white font-bold leading-9 lg:leading-[40px] xl:leading-[60px] md:flex md:justify-center"
          >
            Let's travel & create memories together
          </div>
        </div>

        <div
          class="absolute z-10 flex items-center justify-center hidden text-white md:block bottom-4 md:bottom-10"
        >
          <button
            @click="toggleRegistrationForm"
            class="px-5 py-2 md:px-6 md:py-3 rounded-xl bg-[#073289]"
          >
            <div
              class="text-sm font-semibold text-white md:text-lg lg:text-xl xl:text-2xl"
            >
              Book Now
            </div>
          </button>
        </div>
      </div>
    </div>
    <!-- Button -->
    <div class="hidden lg:block lg:px-10 xl:max-w-[1300px] xl:mx-auto">
      <div
        class="flex justify-between items-center p-4 border border-gray-200 rounded-lg shadow-lg bg-gradient-to-r to-[#809bd3] from-white"
      >
        <h1 class="text-2xl text-[#073289] font-semibold">
          Let's travel & create memories together
        </h1>
        <button
          @click="toggleRegistrationForm"
          class="px-5 py-2 md:px-6 md:py-3 rounded-xl bg-[#073289]"
        >
          <div
            class="text-base font-semibold text-white md:text-lg lg:text-xl xl:text-2xl"
          >
            Book Now
          </div>
        </button>
      </div>
    </div>
    <!-- mobile section only -->
    <div class="px-4 mt-2 md:hidden">
      <div
        class="text-[26px] lg:text-5xl text-[#073289] font-bold leading-9 flex justify-center items-center"
      >
        Let's travel & create memories together
      </div>
      <p class="pt-5 text-[#6c788a] text-base">
        Find amazing trips, learn about new cultures, and make lasting memories
        with our tours.
      </p>
    </div>
    <!-- Section 2 -->

    <div
      class="px-5 py-5 md:px-10 lg:py-12 xl:px-0 xl:max-w-[1200px] xl:mx-auto"
    >
      <div
        class="xl:text-5xl text-2xl sm:text-3xl lg:text-4xl text-[#073289] font-bold leading-9 lg:leading-[40px] xl:leading-[60px] flex justify-center"
      >
        Day Wise Itinerary
      </div>

      <div class="w-full mt-5 md:mt-10">
        <div class="grid gap-5 lg:grid-cols-3">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="grid gap-2 p-4 bg-white border-2 shadow-lg border-slate-200 rounded-xl md:gap-3 shadow-[#073289]/40"
          >
            <div
              class="swiper mySwiper w-[280px] h-[310px] sm:w-[510px] md:w-[700px] object-cover md:h-[410px] lg:w-[270px] lg:h-[270px] xl:w-[330px] xl:h-[370px]"
            >
              <div class="cursor-pointer swiper-wrapper">
                <div
                  v-for="(image, imageIndex) in card.images"
                  :key="imageIndex"
                  class="swiper-slide"
                >
                  <img
                    :src="image.url"
                    alt=";ldf"
                    class="rounded-md mx-auto lg:h-[240px] xl:h-[330px]"
                  />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>

            <div class="grid gap-0 md:gap-0">
              <div
                class="text-[#073289] text-base font-bold leading-5 md:text-lg md:text-font-extrabold text-center py-2 xl:text-2xl"
              >
                {{ card.day }}
              </div>
              <div
                class="text-xs font-normal leading-5 md:text-sm xl:text-lg xl:leading-6"
              >
                {{ card.details }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- section 3 -->
    <div
      class="px-5 py-10 md:px-10 xl:px-0 xl:max-w-[1200px] md:mx-auto md:max-w-[688px] lg:max-w-[1300px]"
    >
      <div
        class="text-2xl sm:text-3xl lg:hidden text-[#073289] font-bold leading-9 flex justify-center"
      >
        Tour Inclusion
      </div>
      <div
        class="flex flex-col gap-5 mt-5 lg:flex-row lg:gap-10 lg:items-center md:mt-8 md:max-w-[688px] lg:max-w-[1300px]"
      >
        <div
          class="justify-center w-full lg:flex lg: lg:items-start lg:gap-5 xl:gap-10"
        >
          <div
            class="mx-auto rounded-xl w-[320px] sm:w-[600px] md:w-[650px] lg:w-[1050px] xl:w-[900px] object-cover lg:pt-3 xl:pt-6"
          >
            <img src="/myimage/tour.jpg" alt=" " class="rounded-xl" />
          </div>

          <div class="grid gap-2 md:gap-3 lg:gap-4">
            <div
              class="hidden lg:flex lg:black xl:text-5xl text-3xl lg:text-4xl text-[#073289] font-bold leading-9 lg:leading-[40px] xl:leading-[60px] justify-start"
            >
              Tour Inclusion
            </div>
            <div class="grid gap-1 mt-3 md:gap-2 lg:gap-3">
              <div
                class="text-base font-bold leading-6 md:text-lg xl:text-2xl xl:leading-7"
              >
                Simplify your travels with our comprehensive tour packages
              </div>
              <div
                class="text-xs text-[#6c788a] font-normal leading-6 md:text-sm xl:text-lg xl:leading-7"
              >
                Dive into diverse cultures and stunning landscapes with ease on
                our unforgettable adventures.
              </div>
            </div>

            <div class="flex flex-wrap gap-3 mt-2 lg:mt-3 md:gap-4">
              <div
                v-for="(transport, index) in transports"
                :key="index"
                class="px-5 py-1 rounded-lg bg-slate-100 md:py-1.5 md:px-6 xl:px-7 xl:py-2"
              >
                <div
                  class="text-base font-semibold leading-6 text-[#073289] md:text-lg xl:text-2xl xl:leading-7 flex gap-2 items-center"
                >
                  <img :src="transport.logo" alt="" class="w-9" />
                  {{ transport.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Button -->
    <div class="hidden lg:block lg:px-10 xl:max-w-[1300px] xl:mx-auto">
      <div
        class="flex justify-between items-center p-4 border border-gray-200 rounded-lg shadow-lg bg-gradient-to-r to-[#809bd3] from-white"
      >
        <h1 class="text-2xl text-[#073289] font-semibold">
          Let's travel & create memories together
        </h1>
        <button
          @click="toggleRegistrationForm"
          class="px-5 py-2 md:px-6 md:py-3 rounded-xl bg-[#073289]"
        >
          <div
            class="text-base font-semibold text-white md:text-lg lg:text-xl xl:text-2xl"
          >
            Book Now
          </div>
        </button>
      </div>
    </div>

    <!-- section 4 -->
    <div
      class="px-5 py-10 md:px-10 lg:py-16 xl:px-0 xl:max-w-[1200px] xl:mx-auto"
    >
      <div
        class="xl:text-5xl text-2xl sm:text-3xl lg:text-4xl text-[#073289] font-bold leading-9 lg:leading-[40px] xl:leading-[60px] flex justify-center"
      >
        Our Happy Customers
      </div>

      <div class="mt-5 md:mt-10">
        <div class="flex gap-5 overflow-hidden">
          <div class="flex gap-5 slide-track">
            <div
              v-for="(customer, index) in customers"
              :key="index"
              class="w-[300px] h-[200px] lg:w-[350px] lg:h-[250px] xl:w-[450px] xl:h-[300px] grid gap-2 p-4 bg-white border-2 shadow-lg border-slate-200 rounded-xl md:gap-3"
            >
              <img
                :src="customer.image"
                alt=""
                class="object-cover w-full h-full mx-auto rounded-lg"
              />
            </div>
          </div>
          <div class="flex gap-5 slide-track">
            <div
              v-for="(customer, index) in customers"
              :key="index"
              class="w-[300px] h-[200px] lg:w-[350px] lg:h-[250px] xl:w-[450px] xl:h-[300px] grid gap-2 p-4 bg-white border-2 shadow-lg border-slate-200 rounded-xl md:gap-3"
            >
              <img
                :src="customer.image"
                alt=""
                class="object-cover w-full h-full mx-auto rounded-lg"
              />
            </div>
          </div>
          <div class="flex gap-5 slide-track">
            <div
              v-for="(customer, index) in customers"
              :key="index"
              class="w-[300px] h-[200px] lg:w-[350px] lg:h-[250px] xl:w-[450px] xl:h-[300px] grid gap-2 p-4 bg-white border-2 shadow-lg border-slate-200 rounded-xl md:gap-3"
            >
              <img
                :src="customer.image"
                alt=""
                class="object-cover w-full h-full mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 5 -->
    <div
      class="px-5 py-10 md:px-10 lg:py-12 xl:px-0 xl:max-w-[1200px] md:mx-auto md:max-w-[688px] lg:max-w-full"
    >
      <div
        class="lg:hidden xl:text-5xl text-2xl sm:text-3xl lg:text-4xl text-[#073289] font-bold leading-9 lg:leading-[40px] xl:leading-[60px] flex justify-center"
      >
        About
      </div>
      <div
        class="flex flex-col gap-5 mt-5 lg:flex-row-reverse lg:items-center lg:gap-8 xl:gap-10 md:mt-10"
      >
        <img
          src="/myimage/about.jpg"
          alt=""
          class="w-full h-[300px] rounded-lg lg:h-[300px] lg:w-[440px] xl:w-[600px] xl:h-[350px]"
        />

        <div class="grid gap-3 md:gap-4 lg:gap-5">
          <div
            class="hidden lg:block xl:text-5xl text-3xl lg:text-4xl text-[#073289] font-bold leading-9 lg:leading-[40px] xl:leading-[60px] flex justify-start"
          >
            About
          </div>
          <div
            class="text-sm font-normal leading-6 md:text-lg xl:text-2xl xl:leading-7"
          >
            Tourista-TravelNeeds Pvt Ltd is committed to providing top-notch
            customer satisfaction and remarkable tour experiences. As one of the
            leading destination management companies in Tamil Nadu, we
            specialize in creating unforgettable vacations and honeymoon trips.
            From planning exclusive getaways to arranging transportation and
            accommodations, etc., let us make your travel dreams come true!
          </div>
          <div class="grid gap-2 md:gap-3 lg:gap-4">
            <div
              v-for="(detail, index) in aboutDetails"
              :key="index"
              class="px-3 lg:px-4 xl:px-5 py-1 rounded-lg bg-slate-100 md:py-1.5 xl:py-2 w-fit"
            >
              <div
                class="text-base font-bold leading-6 md:text-lg xl:text-2xl xl:leading-7"
              >
                <span
                  class="text-[#006088] text-base font-bold md:text-lg xl:text-2xl pr-2"
                  >{{ detail.data }}</span
                >
                {{ detail.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Button -->
    <div class="hidden lg:block lg:px-10 xl:max-w-[1300px] xl:mx-auto">
      <div
        class="flex justify-between items-center p-4 border border-gray-200 rounded-lg shadow-lg bg-gradient-to-r to-[#809bd3] from-white"
      >
        <h1 class="text-2xl text-[#073289] font-semibold">
          Let's travel & create memories together
        </h1>
        <button
          @click="toggleRegistrationForm"
          class="px-5 py-2 md:px-6 md:py-3 rounded-xl bg-[#073289]"
        >
          <div
            class="text-base font-semibold text-white md:text-lg lg:text-xl xl:text-2xl"
          >
            Book Now
          </div>
        </button>
      </div>
    </div>

    <!-- review section -->

    <div
      class="px-5 py-10 md:px-10 lg:py-16 xl:px-0 xl:max-w-[1200px] md:mx-auto md:max-w-[688px] lg:max-w-full"
    >
      <div class="grid gap-5 lg:flex lg:gap-8 xl:gap-10">
        <div class="lg:w-[50%]">
          <div class="flex gap-3">
            <div class="relative">
              <!-- <div class="absolute bottom-0 right-0">
                <img
                  src="/public/rocket.svg"
                  alt=""
                  class="w-[60px] xl:w-[90px]"
                />
              </div> -->
              <div
                class="xl:text-5xl text-2xl sm:text-3xl lg:text-4xl md:w-[450px] text-black font-bold leading-10 lg:leading-[40px] xl:leading-[60px] flex justify-center md:mx-auto"
              >
                Our Valuable Client Say About Us
              </div>
            </div>
          </div>

          <!-- Map visible only small screen -->
          <div class="lg:w-[50%] lg:hidden">
            <div class="relative">
              <img src="/public/api-re.png" alt="" class="p-5 rounded-lg" />
              <div class="absolute inset-0 z-10 flex font-bold">
                <div v-for="item in reviews" :key="item">
                  <img
                    :src="item.image"
                    class="w-8 md:w-10 lg:w-12 rounded-full cursor-pointer animate-[wiggle_1s_ease-in-out_infinite]"
                    :style="{
                      position: 'absolute',
                      top: `${item.top + 30 + topWidth}px`,
                      left: `${item.left + 110 + leftWidth}px`,
                    }"
                    @click="selectFeedback(item.id)"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Map visible only small screen End -->

          <img src="/public/quotes.svg" alt="" class="w-20 mt-10" />
          <div v-for="review in reviews" :key="review">
            <div
              v-if="review.id === selectFeedbackId"
              class="mt-3 text-[#6c788a] text-sm font-normal leading-6 md:text-lg xl:text-2xl xl:leading-7 md:mt-5"
            >
              {{ review.content }}
            </div>
            <p
              v-if="review.id === selectFeedbackId"
              class="mt-5 text-xl font-bold text-[#073289]"
            >
              {{ review.name }}
            </p>
          </div>
          <div class="flex items-center gap-2 mt-3">
            <img src="/public/g.png" alt="" class="w-4 h-4" />
            <div v-for="n in 5" :key="n" class="w-3">
              <img src="/public/star.svg" alt="" />
            </div>
          </div>
        </div>
        <!-- Map visible only large screen  -->
        <div class="lg:w-[50%] hidden lg:block">
          <div class="relative">
            <img src="/public/api-re.png" alt="" class="p-5 rounded-lg" />
            <div class="absolute inset-0 z-10">
              <div v-for="item in reviews" :key="item">
                <img
                  :src="item.image"
                  class="object-cover w-4 h-4 rounded-full cursor-pointer lg:w-10 lg:h-10"
                  :style="{
                    position: 'absolute',
                    top: `${item.top + 30 + topWidth}px`,
                    left: `${item.left + 110 + leftWidth}px`,
                  }"
                  @click="selectFeedback(item.id)"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Map visible only large screen  -->
      </div>
    </div>

    <!-- Faq  -->
    <div
      class="px-5 py-10 md:px-10 lg:py-16 xl:px-0 xl:max-w-[1200px] xl:mx-auto"
    >
      <div
        class="grid gap-6 px-4 pt-10 pb-6 bg-white rounded-lg box cuttingcorner lg:px-5 xl:px-6 lg:rounded-2xl"
      >
        <div
          class="text-lg font-bold leading-7 text-black md:text-xl lg:text-3xl lg:leading-8"
        >
          FAQs:
        </div>

        <div class="grid gap-5">
          <div
            v-for="(feedback, index) in feedbacks"
            :key="index"
            class="items-center p-4 bg-slate-100 rounded-2xl grid gap-[6px] lg:gap-3 lg:p-5 cursor-pointer"
            @click="toggleVisibility(feedback)"
          >
            <div class="flex justify-between gap-[6px] cursor-pointer">
              <div
                class="flex-wrap text-base font-bold leading-6 lg:text-lg lg:leading-6 xl:text-2xl xl:leading-7"
              >
                {{ feedback.content }}
              </div>

              <img
                :src="feedback.icon"
                alt="Toggle Icon"
                class="w-6 h-6 transition-transform"
                :class="{ 'rotate-45': !feedback.hidden }"
              />
            </div>
            <div
              v-if="!feedback.hidden"
              class="text-sm font-medium leading-5 text-slate-700 lg:text-lg lg:leading-6 xl:text-xl xl:leading-7"
            >
              {{ feedback.visibleContent }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="showRegistrationForm"
      class="fixed inset-0 flex flex-col items-center justify-center w-full backdrop-blur-sm bg-[#000000]/75 font-inter z-[99] overflow-hidden"
    >
      <div
        class="flex flex-col items-center justify-center w-full px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <div
          class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div class="flex justify-between">
              <h1
                class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
              >
                Register Your Trip
              </h1>
              <p
                class="font-bold text-gray-900 cursor-pointer"
                @click="closeForm()"
              >
                X
              </p>
            </div>
            <div class="space-y-4 md:space-y-6">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Your Name</label
                >
                <input
                  v-model="user.name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none"
                  placeholder="Name"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Mobile Number</label
                >
                <input
                  v-model="user.number"
                  type="number"
                  placeholder="Mobile No"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none"
                  required
                />
              </div>

              <div class="block">
                <span class="block mb-2 text-sm font-medium text-gray-900"
                  >Choose the Date</span
                >
                <el-date-picker
                  v-model="user.date"
                  type="datetime"
                  placeholder="Pick a day"
                  :disabled-date="disabledDate"
                  format="YYYY/MM/DD hh:mm:ss"
                  :size="large"
                  style="width: 100%; height: 45px !important"
                />
              </div>

              <button
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                @click="register()"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
    },
  ],
});
</script>
<script>
export default {
  data() {
    return {
      user: {
        name: "",
        number: "",
        date: "",
      },
      showRegistrationForm: false,
      selectFeedbackId: 1,
      cards: [
        {
          day: "Day 1",
          details:
            "North Goa Tour on bikes! We'll visit cool places like Aguda Fort, Condolim Beach, Siqurium, and Calungute Beach. It's going to be a super fun day!",
          images: [
            {
              url: "/day1/1.jpg",
            },
            {
              url: "/day1/2.jpg",
            },
            {
              url: "/day1/3.jpg",
            },
            {
              url: "/day1/4.jpg",
            },
          ],
        },
        {
          day: "Day 2",
          details:
            "Anjuna Special Tour, with two-wheeler fun! Explore Anjuna Beach, Vagator Beach, Chapora Fort, and Baga Beach. Get ready for another amazing day! ",
          images: [
            {
              url: "/day2/1.jpg",
            },
            {
              url: "/day2/2.jpg",
            },
            {
              url: "/day2/3.jpg",
            },
            {
              url: "/day2/4.jpg",
            },
          ],
        },
        {
          day: "Day 3",
          details:
            "South Goa's charms on our two-wheeler tour! Visit Old Goa Church, Mangeshi Temple, Miramur, Dona Paula, and enjoy shopping in Panjim. It's going to be an unforgettable day!",
          images: [
            {
              url: "/day3/1.jpg",
            },
            {
              url: "/day3/2.jpg",
            },
            {
              url: "/day3/3.jpg",
            },
            {
              url: "/day3/4.jpg",
            },
          ],
        },
      ],
      feedbacks: [
        {
          icon: "https://hubble.cdn.chittiapp.com/cdn_uploads/eea11d50-d87a-11ee-889c-7bbca2e5b58b_Add.svg",
          content: "Is this package available for a single person?",
          visibleContent:
            "Unfortunately, this package is not available for a single person.",
          hidden: true,
        },
        {
          icon: "https://hubble.cdn.chittiapp.com/cdn_uploads/eea11d50-d87a-11ee-889c-7bbca2e5b58b_Add.svg",
          content: "In Goa, is South Indian food available?",
          visibleContent: "Yes, South Indian food is available in Goa.",
          hidden: true,
        },
        {
          icon: "https://hubble.cdn.chittiapp.com/cdn_uploads/eea11d50-d87a-11ee-889c-7bbca2e5b58b_Add.svg",
          content: "Are these group tours?",
          visibleContent: "No, these are individual tours for family & friends",
          hidden: true,
        },
        {
          icon: "https://hubble.cdn.chittiapp.com/cdn_uploads/eea11d50-d87a-11ee-889c-7bbca2e5b58b_Add.svg",
          content: "What if I need assistance during my trip?",
          visibleContent:
            "If you need assistance during your trip, our executive is available 24/7",
          hidden: true,
        },
        {
          icon: "https://hubble.cdn.chittiapp.com/cdn_uploads/eea11d50-d87a-11ee-889c-7bbca2e5b58b_Add.svg",
          content: "Is goa safe for family tourists?",
          visibleContent: "Yes, Goa is safe for family tourists.",
          hidden: true,
        },
      ],
      customers: [
        {
          image: "/guest/1.svg",
        },
        {
          image: "/guest/2.svg",
        },
        {
          image: "/guest/3.svg",
        },
        {
          image: "/guest/4.svg",
        },
        {
          image: "/guest/5.svg",
        },
        {
          image: "/guest/6.svg",
        },
        {
          image: "/guest/7.svg",
        },
        {
          image: "/guest/8.svg",
        },
        {
          image: "/guest/9.svg",
        },
      ],
      transports: [
        { name: "Train", logo: "logo/1.svg" },
        { name: "Ac Room", logo: "logo/3.svg" },
        { name: "Food", logo: "logo/2.svg" },
        { name: "Bike", logo: "logo/5.svg" },
        { name: "Tamil Speaking Coordinator", logo: "logo/4.svg" },
        { name: "24/7 Support", logo: "logo/6.svg" },
      ],
      reviews: [
        {
          id: 1,
          image: "users/1.jpg",
          content:
            "We booked our Goa package through Tourista travel needs for our friends hangout’s I am extremely satisfied with their service they gave breakfast and dinner both were hygienic and safety at each and every point they have guided as to explore Goa .the booker Mr Chikkanthar and the coordinator Mr Amir we’re really friendly to help to utilise the package facility given by Tourista travelneeds.they booked neat and clean hotel with privacy. we had a good experience with Tourista travelneeds team. Thankyou for your service",
          name: "Sathish Shruthi",
          top: 290,
          left: 100,
        },
        {
          id: 2,
          image: "users/2.jpg",
          content:
            "Enjoyed alot & had very good experience.. thanks to Tourista TravelNeeds..",
          name: "Sandhya Manohar",
          top: 80,
          left: 140,
        },
        {
          id: 3,
          image: "users/8.jpg",
          content:
            "Really we thanks to TRAVEL NEEDS Team to arrange this wonderful trip events in GOA. All travel guides nicely cooperate with our teams and they arranged well like foods and accommodations all good and travel needs team support and guide very well.We really splc thanks to Ameer for guide our teams and spend more times with me and our teams. Travel packages also very cheap and best compare to all other travel events. I really suggest that pls make plan to book ur slot in Travel needs for any vacation. They will guide and arrange to make urself enjoy and comfortable and peaceful trips. GOOD LUCK TRAVEL NEEDS teams.Thanks u.",
          name: "S.mohammed Niyas",
          top: 150,
          left: 110,
        },
        {
          id: 4,
          image: "users/4.jpg",
          content:
            "Highly recommended..! Finally our GOA Dream came true. We are Enjoyed. Excellent Service & Excellent Care Happily Thanks to Amir, Rizvi Bro & Tourista-TravelNeeds",
          name: "Mohamed Suhail",
          top: 30,
          left: 200,
        },
        {
          id: 5,
          image: "users/5.jpg",
          content:
            "We are enjoyed. Water games (banana, Water driving, 3 members flotting, 25kilometer boat travel and come to return the land was very thierling and Life long memorable moments. Another day was dudsagar waterfall very nice place i was diving and friends are very enjoyed. Boat travel,dance and beach walking are very superb.I think it's working good, one and only the guide amir oraganisatior .Amir was really working good. I told about North Indian food was very nice. Totaly 5 days tour was telling no words.Thank you, thankyou very much.",
          name: "chandrakumaran r",
          top: 150,
          left: 200,
        },
        {
          image: "users/7.jpg",
          content:
            "Recommendable. Recently went to Thailand for our Honeymoon Trip with Tourista-Travelneeds. We are very much satisfied with their service from Departure to Arrival at affordableprice. Surely recommendable without any second thoughts. Thanks to Rizvi Bro and Jayaraj.",
          name: "Rajes kumar",
          top: 220,
          left: 140,
        },
      ],
      aboutDetails: [
        {
          data: "8+",
          content: "Years of Experience",
        },
        {
          data: "10,000+",
          content: "Happy Travellers",
        },
        {
          data: "Stress-free trips,",
          content: "meticulously planned for your enjoyment!",
        },
      ],
    };
  },

  computed: {
    topWidth() {
      const currentWidth = window.innerWidth;
      if (currentWidth < 500) {
        return -30;
      } else return 0;
    },
    leftWidth() {
      const currentWidth = window.innerWidth;
      if (currentWidth < 500) {
        return -110;
      } else return 0;
    },
  },

  mounted() {
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },

  methods: {
    register() {
      console.log(this.user.number.length);
      console.log(this.user, "log the user details ");
      // if (!this.user.name || !this.date || this.user.number.length != 10)
      //   return true;
      $http
        .$post("/register", {
          body: this.user,
        })
        .then((response) => {
          console.log(response);
          this.user = {};
        })
        .catch((error) => {
          console.log(error);
        });
      this.showRegistrationForm = false;
      this.$router.push("/thankyou");
    },
    selectFeedback(id) {
      console.log(id);
      this.selectFeedbackId = id;
    },
    toggleRegistrationForm() {
      this.showRegistrationForm = !this.showRegistrationForm;
      this.user = {};
    },
    closeForm() {
      this.showRegistrationForm = false;
    },

    toggleVisibility(feedback) {
      if (!feedback.hidden) {
        feedback.hidden = true;
      } else {
        this.feedbacks.forEach((item) => {
          item.hidden = true;
        });
        feedback.hidden = false;
      }
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap");

.slide-track {
  animation: slide-scroll 50s linear infinite;
}
.transition-transform {
  transition-property: transform;
  transition-duration: 0.4s;
  transition-timing-function: ease;
}

@keyframes slide-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
.rotated {
  transform: rotate(7deg);
}
.reverse-rotated {
  transform: rotate(-7deg);
}
.border-hover:hover {
  border-color: rgb(243 244 246);
  transition: border-color 0.1s;
}
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
</style>
<style>
.el-picker-panel__body {
  background-color: white;
}
.el-input__wrapper {
  color: #f9fafb !important;
  background-color: #f9fafb;
  border-radius: 10px;
  box-shadow: #374151;
}
.el-input__inner {
  color: black;
}
</style>
