// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Mango Documentation',
    tagline: 'Ready-to-deploy full stack AI inferencing server offering unprecedented performance and flexibility.',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://sdk.docs.mangoboost.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'MangoBoost, Inc.', // Usually your GitHub org/user name.
    projectName: 'Mango Documentation', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    // Default docs instance for inference
                    path: 'docs_sdk',
                    routeBasePath: '',
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                blog: false,
                pages: {
                    // Enable pages for homepage
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    plugins: [
        // [
        //     '@docusaurus/plugin-content-docs',
        //     {
        //         id: 'sdk',
        //         path: 'docs_sdk',
        //         routeBasePath: 'sdk',
        //         sidebarPath: require.resolve('./sidebars.js'),
        //     },
        // ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/MangoBoost_Logo.png',
            navbar: {
                title: 'SDK',
                logo: {
                    alt: 'MangoBoost Logo',
                    src: 'img/MangoBoost_Logo.png',
                },
                items: [
                    // {
                    //     to: '/docs_sdk',
                    //     label: 'SDK',
                    //     position: 'left',
                    // }
                ],
            },

            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [                         
                            // {
                            //     to: '/sdk',
                            //     label: 'SDK',
                            //     position: 'left',
                            // },                      
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'LinkedIn',
                                href: 'https://www.linkedin.com/company/mangoboost/',
                            },
                            {
                                label: 'X',
                                href: 'https://x.com/mangoboost_inc',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Datacenter Infrastructure Acceleration',
                                href: 'https://www.mangoboost.io',
                            },
                            {
                                label: 'Need Help? Contact Support',
                                href: 'https://www.mangoboost.io/contact',
                            },
                            {
                                label: 'Question? Contact Sales',
                                href: 'https://www.mangoboost.io/contact',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} MangoBoost, Inc.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;