import React, { FC, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import {
  Layout,
  PageBlock,
  PageHeader,
  FloatingActionBar,
} from 'vtex.styleguide'

// import BusinessAndProducts from './components/BusinessAndProducts'
import CountryAndLanguage from './components/CountryAndLanguage'
import PaymentProvider from './components/PaymentProvider'
import Warehouses from './components/Warehouses'

import './styles.global.css'

const initialState = {
  stepOne: true,
  stepTwo: true,
  stepThree: false,
}

const RapidSetup: FC = () => {
  const [steps, setSteps] = useState(initialState)

  const completeSteps = (
    step: 'stepOne' | 'stepTwo' | 'stepThree',
    status: boolean
  ) => {
    setSteps({ ...steps, [step]: status })
  }

  return (
    <Layout
      pageHeader={
        <PageHeader title={<FormattedMessage id="admin-rapid-setup.title" />} />
      }
    >
      <PageBlock title="1 - Country & Language" variation="full">
        <CountryAndLanguage checkStatus={completeSteps} />
      </PageBlock>
      {steps.stepOne ? (
        <PageBlock title="2 - Warehouses" variation="full">
          <Warehouses />
        </PageBlock>
      ) : null}
      {steps.stepTwo ? (
        <PageBlock title="3 - Payment Provider" variation="full">
          <PaymentProvider checkStatus={completeSteps} />
        </PageBlock>
      ) : null}
      {steps.stepThree ? (
        <FloatingActionBar
          save={{
            label: 'Create first order',
            onClick: () =>
              // eslint-disable-next-line no-restricted-globals
              open(
                'https://rapidsetup.myvtex.com/checkout/cart/add/?sku=1&qty=1&seller=1&sc=1'
              ),
          }}
          cancel={{
            label: 'cancel',
          }}
        />
      ) : null}
    </Layout>
  )
}

export default RapidSetup
