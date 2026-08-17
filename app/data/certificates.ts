export interface Certificates {
    name:string;
    org: string;
    link:string;
    icon:string;
    date:string;
}

export const certificates: Certificates[] = [
    {
        name: "Data Science Essentials With Python",
        org: "CISCO",
        link: "https://www.credly.com/badges/04ad918c-90cc-4398-9327-ab01df855f30/linked_in_profile",
        icon: "https://api.iconify.design/thesvg-color:cisco-dark.svg",
        date: "July 2026"
    }, 
    {
        name: "DataCamp CPE Certificate - Introduction to SQL",
        org: "DataCamp",
        link: "https://www.datacamp.com/skill-verification/SQLI0028501064121",
        icon: "https://api.iconify.design/thesvg-color:datacamp.svg",
        date: "Nov 2025"
    },
     {
        name: "DataCamp CPE Certificate - Intermediate SQL",
        org: "DataCamp",
        link: "https://www.datacamp.com/skill-verification/ISQL0017587145898",
        icon: "https://api.iconify.design/thesvg-color:datacamp.svg",
        date: "Nov 2025"
    },
     {
        name: "JavaScript Algorithms and Data Structures",
        org: "freeCodeCamp",
        link: "https://freecodecamp.org/certification/fcc1e330a61-59de-4a4a-bdbf-ef2b5a0265f1/javascript-algorithms-and-data-structures-v8",
        icon: "https://api.iconify.design/thesvg-color:freecodecamp.svg",
        date: "Mar 2025"
    }
]