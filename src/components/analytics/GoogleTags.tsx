import Script from "next/script";

const ADS_ID = "AW-18214494799";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GTAG_LOADER_ID = GA_ID || ADS_ID;

export default function GoogleTags() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_LOADER_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tags" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ADS_ID}');
          ${
            GA_ID
              ? `gtag('config', '${GA_ID}', { page_path: window.location.pathname });`
              : ""
          }
        `}
      </Script>
    </>
  );
}
