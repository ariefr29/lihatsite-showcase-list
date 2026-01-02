/**
 * ============================================
 * SITE DATA MANAGEMENT - EDIT KONTEN DI SINI
 * ============================================
 * 
 * 📁 STRUKTUR DATA:
 * - site.ts      → Konfigurasi umum (navbar, hero, footer, SEO)
 * - projects.ts  → Daftar semua project
 */

// Re-export projects dari file terpisah
export { projects, type Project } from './projects';

// ============================================
// SITE METADATA & SEO
// ============================================
export const siteConfig = {
    title: "Lihat.site - Web Developer Showcase",
    description: "Kumpulan website / aplikasi web yang telah saya implementasikan sebagai solusi dari sebuah masalah yang nyata.",
    language: "id",
    author: "Your Name",
    url: "https://lihat.site",
};

// ============================================
// NAVBAR
// ============================================
export const navbarConfig = {
    logo: {
        text: "lihat",
        accent: ".",
        suffix: "site",
    },
    cta: {
        text: "BUAT WEBSITE",
        link: "#contact",
    },
};

// ============================================
// HERO SECTION
// ============================================
export const heroConfig = {
    badge: "Digital Developer Archive",
    title: {
        line1: "Showcase",
        line2: "Web",
        highlighted: "Project",
    },
    description: "Kumpulan website / aplikasi web yang telah saya implementasikan sebagai solusi dari sebuah masalah yang nyata.",
    backgroundImage: "/Asset-bg-wave.webp",
};

// ============================================
// FOOTER
// ============================================
export const footerConfig = {
    copyright: "© 2024 LIHAT.SITE — DEVELOPER SHOWCASE",
    socialLinks: [
        { label: "GITHUB", href: "https://github.com/yourusername" },
        { label: "LINKEDIN", href: "https://linkedin.com/in/yourusername" },
        { label: "RESUME", href: "/resume.pdf" },
    ],
};

// ============================================
// THEME COLORS (untuk referensi)
// ============================================
export const themeColors = {
    bgMain: "#060606",
    textPrimary: "#ffffff",
    textSecondary: "#dadada",
    accent: "#75f991",
};
