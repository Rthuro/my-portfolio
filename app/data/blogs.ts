interface Blog {
    title: string;
    id: string;
    description: string;
    date: string;
    tags: string[];
    image: string;
    link?: string;
    isFeatured: boolean;
    text: React.ReactNode;
}

export const blogs : Blog[] = [
    {
        title: 'Web Analytics using Vercel',
        id: 'web-analytics',
        description: 'How to add analytics on your website using Vercel.',
        date: 'August 31, 2026',
        tags: ['Analytics', 'Vercel', 'Next.js', "React"],
        image: 'https://res.cloudinary.com/rdnkuxzj/image/upload/v1788228268/Instagram_post_-_1_2.png',
        link: 'https://www.tiktok.com/@ruth.codes/photo/7680143551908384020',
        isFeatured: true,
        text: ""     
    },
    {
        title: 'Web Gems',
        id: 'web-gems',
        description: 'List of websites i found helpful as an aspiring designer and developer👩🏻‍💻.',
        date: 'August 15, 2026',
        tags: ['websites', 'collection', 'resources'],
        image: 'https://res.cloudinary.com/rdnkuxzj/image/upload/v1786978500/5c04b31b-2469-408d-9018-7920f0994ff5.png',
        link: 'https://web-gems.netlify.app/',
        isFeatured: true,
        text: ""     
    }, 
]