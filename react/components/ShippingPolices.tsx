import React, { FC, useState, useEffect } from 'react'
import { SelectableCard } from 'vtex.styleguide'

interface Props {
  checkStatus: (
    step: 'stepOne' | 'stepTwo' | 'stepThree',
    status: boolean
  ) => void
}

const ShippingPolices: FC<Props> = ({ checkStatus }) => {
  const [selectedShippingPolice, setSelectedShippingPolice] = useState('')

  const handlePaymentSelection = (paymentMethod: string) => {
    setSelectedShippingPolice(paymentMethod)
  }

  useEffect(() => {
    if (selectedShippingPolice) {
      checkStatus('stepTwo', true)
    }
  }, [checkStatus, selectedShippingPolice])

  return (
    <div className="pa5 flex justify-center">
      <div className="mh3">
        <SelectableCard
          hasGroupRigth
          noPadding
          selected={selectedShippingPolice === 'one'}
          onClick={() => handlePaymentSelection('one')}
        >
          <div className="pa7">
            <div className="f3 tc">Card 1</div>
          </div>
        </SelectableCard>
      </div>
      <div className="mh3">
        <SelectableCard
          hasGroupleft
          hasGroupRigth
          noPadding
          selected={selectedShippingPolice === 'two'}
          onClick={() => handlePaymentSelection('two')}
        >
          <div className="pa7">
            <div className="f3 tc">Card 2</div>
          </div>
        </SelectableCard>
      </div>
      <div className="mh3">
        <SelectableCard
          hasGroupleft
          noPadding
          selected={selectedShippingPolice === 'three'}
          onClick={() => handlePaymentSelection('three')}
        >
          <div className="pa7">
            <div className="f3 tc">Card 3</div>
          </div>
        </SelectableCard>
      </div>
    </div>
  )
}

export default ShippingPolices
