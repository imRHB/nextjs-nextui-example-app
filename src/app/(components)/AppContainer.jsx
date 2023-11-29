export default function AppContainer({ children }) {
    return (
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-32 min-h-[70vh] text-zinc-700 dark:text-zinc-300 select-none">
            {children}
        </div>
    );
}
