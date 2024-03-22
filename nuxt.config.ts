const baseURL = "https://goatamilan.cyclic.app";

export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js",
        },
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
    },
  },
  ssr: false,
  devtools: { enabled: false },
  css: [
    "~/assets/css/main.css",
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  serverDir: "nuxt-server",
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  modules: ["@nuxt-alt/http", "@element-plus/nuxt"],
  http: {
    baseURL,
    credentials: "omit",
    browserBaseURL: baseURL,
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["iconify-icon"].includes(tag),
    },
  },
});
