const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-gray-200/60 bg-gradient-to-b from-white via-gray-50/70 to-blue-50/40 dark:border-white/10 dark:from-gray-950 dark:via-gray-950 dark:to-indigo-950/20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-4 lg:px-8">
        <p className="flex items-center gap-1.5 text-[11px] font-medium tracking-tight text-gray-400 dark:text-gray-500">
          Made with
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-3.5 w-3.5 text-indigo-500"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
          </svg>
          <span className="text-gray-500 dark:text-gray-400">by Love</span>
          <span className="mx-1 text-gray-300 dark:text-gray-700">·</span>
          <span>© {new Date().getFullYear()} All rights reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;