type CheckboxProps = {
  id: string
  label: string
  checked: boolean
}

type CheckboxGroupProps = {
  options: CheckboxProps[]
  setOptions: (options: CheckboxProps[]) => void
}

export const CheckboxGroup = ({ options, setOptions }: CheckboxGroupProps) => {
  const handleCheckboxChange = (id: string) => {
    const updatedOptions = options.map((option) => {
      if (option.id === id) {
        return {
          ...option,
          checked: !option.checked,
        }
      }

      return option
    })

    setOptions(updatedOptions)
  }

  return (
    <>
      {options.map((option) => (
        <label
          key={option.id}
          className="flex cursor-pointer items-baseline space-x-1.5"
        >
          <input
            type="checkbox"
            className="form-checkbox h-3.5 w-3.5"
            checked={option.checked}
            onChange={() => handleCheckboxChange(option.id)}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </>
  )
}
