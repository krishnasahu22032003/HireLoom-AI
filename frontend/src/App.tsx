import ToggleThemeButton from "./components/ui/ToggleThemeButton"

function App() {

  return (
    <>
     <div className="dark:bg-amber-400 bg-green-300 min-h-screen">
      Hello world
      <ToggleThemeButton/>
     </div>
    </>
  )
}

export default App
