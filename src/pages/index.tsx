import type { NextPage } from 'next';
import Head from 'next/head';

import HomeLayout from 'src/modules/home/HomeLayout';

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Build Your Professional Resume Easily and Fast</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Syed Anas Tanweer" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Build Your Professional Resume Easily" />
        <meta property="og:site_name" content="Build Your Professional Resume Easily" />
        <meta property="og:url" content="https://eresume-builder.vercel.app/" />
        <meta
          name="description"
          content="Create your professional resume with E-Resume, a simple, fast, and effective resume builder."
        />
        <meta
          property="og:description"
          content="Create your professional resume with E-Resume, a simple, fast, and effective resume builder."
        />
        <meta property="og:image" content="/icons/resume-icon.png" />

        {/* Twitter Meta */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="E-Resume" />
        <meta name="twitter:creator" content="@eresume" />
        <meta name="twitter:title" content="E-Resume: Build Your Professional Resume Easily" />
        <meta name="twitter:description" content="Create your professional resume with E-Resume, a simple, fast, and effective resume builder." />
        <meta name="twitter:image" content="/icons/resume-icon.png" /> */}

        {/* Robots Meta */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow, max-snippet:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1" />

        <meta name="keywords" content="eresume, resumebuilder, cv, resume, resumecreator" />

        {/* Favicon and Canonical */}
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
        <link rel="canonical" href="https://eresume-builder.vercel.app/" />
      </Head>

      <HomeLayout />
    </div>
  );
};

export default HomePage;
