const baseURL = "https://api-goatamilan.cyclic.app";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Best Goa trip packagesBest Goa to Tamil Nadu Travel Guide: Explore the Best Routes with Goa Tamilan - goatamilan",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Best Goa to Tamil Nadu Travel Guide: Explore the Best Routes with Goa Tamilan - goatamilan",
        },
      ],
      script: [
        {
          src: "https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/title.png" },
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
  modules: ["@nuxt-alt/http", "@element-plus/nuxt", "@zadigetvoltaire/nuxt-gtm"],
  gtm: {
    id: "GTM-N637QHZF",
  },
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
