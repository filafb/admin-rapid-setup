import React, { FC, useState } from 'react'
import { SelectableCard } from 'vtex.styleguide'

const PaymentProvider: FC = () => {
  const [selectedPayment, setSelectedPayment] = useState('')

  const handlePaymentSelection = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod)
  }

  return (
    <div className="pa5 flex justify-center">
      <SelectableCard
        hasGroupRigth
        noPadding
        selected={selectedPayment === 'one'}
        onClick={() => handlePaymentSelection('one')}
      >
        <div className="pa7">
          <div className="f3 tc">Card 1</div>
        </div>
      </SelectableCard>
      <SelectableCard
        hasGroupleft
        hasGroupRigth
        noPadding
        selected={selectedPayment === 'two'}
        onClick={() => handlePaymentSelection('two')}
      >
        <div className="pa7">
          <div className="f3 tc">Card 2</div>
        </div>
      </SelectableCard>
      <SelectableCard
        hasGroupleft
        noPadding
        selected={selectedPayment === 'three'}
        onClick={() => handlePaymentSelection('three')}
      >
        <div className="pa7">
          <div className="f3 tc">Card 3</div>
        </div>
      </SelectableCard>
    </div>
  )
}

export default PaymentProvider
