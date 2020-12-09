import React from "react"
import useDarkMode from "use-dark-mode"
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri'

import Toggle from "./Toggle"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <div className="dark-mode-toggle">
      <button type="button" aria-label="light mode" onClick={darkMode.disable}>
        <RiSunFill className="sun-icon" />
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" aria-label="dark mode" onClick={darkMode.enable}>
        <RiMoonClearFill className="moon-icon" />
      </button>
    </div>
  )
}

export default DarkModeToggle
