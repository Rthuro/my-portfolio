interface Blog {
    title: string;
    description: string;
    date: string;
    tags: string[];
    image: string;
    link: string;
    isFeatured: boolean;
    text: React.ReactNode;
}

export const Blogs : Blog[] = [
    {
        title: 'Web Gems',
        description: 'List of websites i found helpful as an aspiring designer and developer👩🏻‍💻.',
        date: 'August 15, 2025',
        tags: ['websites', 'collection', 'resources'],
        image: 'https://res.cloudinary.com/rdnkuxzj/image/upload/v1786978500/5c04b31b-2469-408d-9018-7920f0994ff5.png',
        link: 'https://web-gems.netlify.app/',
        isFeatured: true,
        text: ""     
    }
]