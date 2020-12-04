import React from "react"

const Toggle = ({ checked, onChange }) => (
  <div className="toggle-control">
    <input
      className="switch-input"
      type="checkbox"
      aria-label="dark mode toggle"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" className="switch-label" />
  </div>
)

export default Toggle
