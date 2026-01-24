export default function Footer() {
    return (
        <footer className="py-8 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 text-center text-stone-500 dark:text-stone-400 text-sm">
            <div className="container mx-auto px-4">
                <p>&copy; {new Date().getFullYear()} Alem Desta. All rights reserved.</p>
                <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion.</p>
            </div>
        </footer>
    );
}
