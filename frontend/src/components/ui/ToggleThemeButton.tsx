import { useThemeContext } from "../../context/ThemeContext"

type Props = {}

const ToggleThemeButton = (props: Props) => {

    const {ToggleDarkMode , darkMode } = useThemeContext() ;

  return (
    <div>
        <button className="border border-gray-500 cursor-pointer" onClick={ToggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
    </div>
  )
}

export default ToggleThemeButton