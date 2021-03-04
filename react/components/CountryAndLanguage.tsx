import React, { FC, useState } from 'react'
import { Dropdown } from 'vtex.styleguide'

import { regionOptions, languageOptions, currencyOptions, timezoneOptions } from '../fixture'

const CountryAndLanguage: FC = () => {

  const [selectedRegion, setselectedRegion] = useState<string>('')
  const [selectedLanguage, setselectedLanguage] = useState<string>('')
  const [selectedTimezone, setselectedTimezone] = useState<string>('')
  const [selectedCurrency, setselectedCurrency] = useState<string>('')

  const handleChangeRegion = (_: any, value: string) => {
    setselectedRegion(value)
  }

  const handleChangeLanguage = (_: any, value: string) => {
    setselectedLanguage(value)
  }

  const handleChangeTimezone = (_: any, value: any) => {
    setselectedTimezone(value)
  }

  const handleChangeCurrency = (_: any, value: string) => {
    setselectedCurrency(value)
  }

  return (
      <div>
        <Dropdown
          options={regionOptions}
          value={selectedRegion}
          onChange={handleChangeRegion}
          placeholder="Select your region"
        />

        <Dropdown
          options={languageOptions}
          value={selectedLanguage}
          onChange={handleChangeLanguage}
          placeholder="Select your language"
        />

        <Dropdown
          options={timezoneOptions}
          value={selectedTimezone}
          onChange={handleChangeTimezone}
          placeholder="Select your Time Zone"
        />

        <Dropdown
          options={currencyOptions}
          value={selectedCurrency}
          onChange={handleChangeCurrency}
          placeholder="Select your Currency"
        />
      </div>
  )
}

export default CountryAndLanguage
