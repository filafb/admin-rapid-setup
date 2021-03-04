import React, { FC, useState, useEffect } from 'react'
import { SelectableCard } from 'vtex.styleguide'

interface Props {
  checkStatus: (
    step: 'stepOne' | 'stepTwo' | 'stepThree',
    status: boolean
  ) => void
}

const PaymentProvider: FC<Props> = ({ checkStatus }) => {
  const [selectedPayment, setSelectedPayment] = useState('')

  const handlePaymentSelection = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod)
  }

  useEffect(() => {
    if (selectedPayment) {
      checkStatus('stepThree', true)
    }
  }, [selectedPayment])

  return (
    <div className="pa5 flex justify-center">
      <div className="mh3">
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
      </div>
      <div className="mh3">
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
      </div>
      <div className="mh3">
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
    </div>
  )
}

export default PaymentProvider
