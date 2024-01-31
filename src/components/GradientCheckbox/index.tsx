import { useState } from 'react'

const GradientCheckbox = () => {
  const [isChecked, setIsChecked] = useState(true)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <label className="inline-block relative w-8 h-8 bg-gradient-to-br from-red-500 to-blue-500 rounded-full mr-2 cursor-pointer">
      <input
        type="checkbox"
        className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span
        className="checkmark absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full"
        style={{ display: isChecked ? 'block' : 'none' }}
      ></span>
    </label>
  )
}

export default GradientCheckbox
