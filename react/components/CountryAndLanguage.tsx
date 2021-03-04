import React, { FC, useState, useEffect } from 'react'
import { Dropdown } from 'vtex.styleguide'

import {
  regionOptions,
  languageOptions,
  currencyOptions,
  timezoneOptions,
} from '../fixture'

interface Props {
  checkStatus: (
    step: 'stepOne' | 'stepTwo' | 'stepThree',
    status: boolean
  ) => void
}

const CountryAndLanguage: FC<Props> = ({ checkStatus }) => {
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

  useEffect(() => {
    if (
      selectedRegion &&
      selectedLanguage &&
      selectedTimezone &&
      selectedCurrency
    ) {
      checkStatus('stepOne', true)
    }
  }, [selectedRegion, selectedLanguage, selectedTimezone, selectedCurrency])

  return (
    <div className="flex w-100 flex-column items-center">
      <div className="mb5" style={{ width: '420px' }}>
        <Dropdown
          options={regionOptions}
          value={selectedRegion}
          onChange={handleChangeRegion}
          placeholder="Select your region"
        />
      </div>
      <div className="mb5" style={{ width: '420px' }}>
        <Dropdown
          options={languageOptions}
          value={selectedLanguage}
          onChange={handleChangeLanguage}
          placeholder="Select your language"
        />
      </div>
      <div className="mb5" style={{ width: '420px' }}>
        <Dropdown
          options={timezoneOptions}
          value={selectedTimezone}
          onChange={handleChangeTimezone}
          placeholder="Select your Time Zone"
        />
      </div>
      <div style={{ width: '420px' }}>
        <Dropdown
          options={currencyOptions}
          value={selectedCurrency}
          onChange={handleChangeCurrency}
          placeholder="Select your Currency"
        />
      </div>
    </div>
  )
}

export default CountryAndLanguage
