import { Sun, Moon } from "lucide-react"
import { useThemeContext } from "../../context/ThemeContext"
import cn from "../../lib/utils"

type Props = {}

const ToggleThemeButton = (props: Props) => {
  const { ToggleDarkMode, darkMode } = useThemeContext()

  return (
    <button
      onClick={ToggleDarkMode}
      aria-label="Toggle theme"
      className={cn(
        "group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full cursor-pointer",
        "border border-gray-300 dark:border-gray-700",
        "bg-white dark:bg-gray-900",
        "transition-all duration-300 ease-out",
        "hover:border-gray-400 dark:hover:border-gray-500",
        "hover:shadow-[0_0_0_4px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_0_0_4px_rgba(255,255,255,0.06)]",
        "active:scale-90",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-500 focus-visible:ring-offset-transparent"
      )}
    >
      <span
        className={cn(
          "pointer-events-none absolute inset-0 scale-0 rounded-full opacity-0",
          "bg-amber-400/20 dark:bg-indigo-400/20",
          "transition-all duration-500 ease-out",
          "group-active:scale-150 group-active:opacity-100 group-active:duration-0"
        )}
      />
      <Sun
        className={cn(
          "absolute h-5 w-5 text-amber-500",
          "transition-all duration-500 ease-in-out",
          "group-hover:rotate-45",
          darkMode ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        )}
      />
      <Moon
        className={cn(
          "absolute h-5 w-5 text-indigo-400",
          "transition-all duration-500 ease-in-out",
          "group-hover:-rotate-12",
          darkMode ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
        )}
      />
    </button>
  )
}

export default ToggleThemeButton