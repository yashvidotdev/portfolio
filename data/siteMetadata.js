const siteMetadata = {
  title: 'Yashvi Shah',
  author: 'Yashvi Shah',
  headerTitle: 'Coffee. Think. Create',
  description: 'My personal website where I share my thoughts and work',
  snippets: 'Reuseable code snippets collected by Yashvi',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://yashvi.dev',
  siteRepo: 'https://github.com/yashvidotdev/portfolio',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'yashu.shah28@gmail.com',
  github: 'https://github.com/yashvidotdev',
  twitter: 'https://twitter.com/yashvidotdev',
  linkedin: 'https://www.linkedin.com/in/yashvidotdev',
  website: 'https://yashvi.dev/',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'yashvidotdev',
  },
}

module.exports = siteMetadata
