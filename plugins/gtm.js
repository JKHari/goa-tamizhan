// plugins/gtm.js

export default defineNuxtPlugin(nuxtApp => {
    if (process.client) {
        // Directly embedding GTM ID in the script
        const headScript = document.createElement('script');
        headScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id=GTM-W4Z68VB6'+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-W4Z68VB6');`;
        document.head.appendChild(headScript);

        // Directly embedding GTM ID in the noscript tag
        nuxtApp.vueApp.mixin({
            mounted() {
                const noscript = document.createElement('noscript');
                const iframe = document.createElement('iframe');
                iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-W4Z68VB6";
                iframe.height = "0";
                iframe.width = "0";
                iframe.style = "display:none;visibility:hidden";
                noscript.appendChild(iframe);
                document.body.insertBefore(noscript, document.body.firstChild);
            }
        });
    }
});
