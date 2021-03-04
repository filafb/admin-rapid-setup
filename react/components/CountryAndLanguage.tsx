import React, { FC, useState } from 'react'
import { Dropdown } from 'vtex.styleguide'


const regionOptions = [
  { value: 'europe', label: 'Europe' },
  { value: 'northAmerica', label: 'North America' },
  { value: 'southAmerica', label: 'South America' },
  { value: 'asia', label: 'Asia' },
  { value: 'Africa', label: 'Africa' }
]


const CountryAndLanguage: FC = () => {

  const [selectedRegion, setselectedRegion] = useState<string>('')

  const handleChange = (_: any, value: string) => {
    setselectedRegion(value)
  }

  return (
    <div>
      <Dropdown
        options={regionOptions}
        value={selectedRegion}
        onChange={handleChange}
        placeholder="Select your region"
      />
    </div>
  )
}

export default CountryAndLanguage
