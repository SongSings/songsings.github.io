
export default {
    // 如果您的网站要在子目录 中提供服务，那么您https://example.com/subdir/必须'/subdir/'在.basedocs/.vitepress/config.js
    //
    // 示例：如果您使用 Github（或 GitLab）页面并部署到user.github.io/repo/，则将您的设置base为/repo/.
    base: '/',

    title: 'doc', // 所有文档的浏览器标签title
    description: 'songsings的网站', // 会渲染成<meta>标签，SEO用

    themeConfig: {

        siteTitle: 'xx的网站',
        logo: '/logo.jpg',

        // 导航链接
        nav: [
            // This link gets active state when the user is
            // on `/config/` path.
            { text: 'Guide', link: '/guide', activeMatch: '/config/'},
            { text: '菜单1', link: '/menu1/', activeMatch: '/menu1/' },
            {
                text: 'Dropdown Menu',
                items: [
                    { text: 'Item A', link: '/item-1' },
                    { text: 'Item B', link: '/item-2' },
                    { text: 'Item C', link: '/item-3' }
                ]
            },
            {
                text: 'Dropdown Menu2',
                items: [
                    {
                        // Title for the section.
                        text: 'Section A Title',
                        items: [
                            { text: 'Section A Item A', link: '...' },
                            { text: 'Section B Item B', link: '...' }
                        ]
                    }
                ]
            },
        ],

        // 侧边栏
        sidebar: [
            {
                text: 'Guide',
                items: [
                    // /introduction.md
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Getting Started', link: '/getting-started' },
                    // This shows `/guide/index.md` page.
                    { text: 'Index', link: '/guide/' },
                    { text: 'One', link: '/guide/one' }, // /guide/one.md
                ]
            },
            {
                text: 'Section Title A',
                items: [
                    { text: 'Item A', link: '/item-a' },
                    { text: 'Item B', link: '/item-b' },
                ]
            },
            {
                text: 'Section Title B',
                // 控制折叠的侧边栏组
                collapsible: true,
                // 设置是否默认折叠
                collapsed: false,
                items: [
                    { text: 'Item C', link: '/item-c' },
                    { text: 'Item D', link: '/item-d' },
                ]
            },
            {
                text: 'Section Title C',
                // 控制折叠的侧边栏组
                collapsible: true,
                // 设置是否默认折叠
                collapsed: true,
                items: [
                    { text: 'Item E', link: '/item-e' },
                    { text: 'Item F', link: '/item-f' },
                ]
            }
        ],

        // 编辑链接
        editLink: {
            pattern: 'https://github.com/songsing.github.io/edit/master/docs/:path',
            //text: 'Edit this page on GitHub' //指定文字
        },

        // 编辑时间 todo

        markdown: {
            lineNumbers: true
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/songsings' },
            // { icon: 'twitter', link: '...' },
            // { icon: 'discord', link: '...' }
        ],


        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present xx'
        },
    }
}