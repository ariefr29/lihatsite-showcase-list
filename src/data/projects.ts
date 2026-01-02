/**
 * ============================================
 * PROJECTS DATA - KELOLA SEMUA PROJECT DI SINI
 * ============================================
 */

export interface Project {
    title: string;
    category: string;
    image: string;
    link?: string;
}

export const projects: Project[] = [
    {
        title: "E-Commerce Engine",
        category: "Development",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
        link: "#",
    },
    {
        title: "Headless CMS Solutions",
        category: "Architecture",
        image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800",
        link: "#",
    },
    {
        title: "Analytics Dashboard Core",
        category: "UI/UX Dev",
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
        link: "#",
    },
    {
        title: "Custom API Architecture",
        category: "Integration",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
        link: "#",
    },
    {
        title: "Optimized Web Experience",
        category: "Performance",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
        link: "#",
    },
    {
        title: "Scalable SaaS Prototype",
        category: "Web App",
        image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&fit=crop&q=80&w=800",
        link: "#",
    },
];
