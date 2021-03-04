import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, PageBlock, PageHeader } from 'vtex.styleguide'
// import BusinessAndProducts from './components/BusinessAndProducts'
import CountryAndLanguage from './components/CountryAndLanguage'
import PaymentProvider from './components/PaymentProvider'
import Warehouses from './components/Warehouses'

import './styles.global.css'

const AdminExample: FC = () => {
  return (
    <Layout
      pageHeader={
        <PageHeader
          title={<FormattedMessage id="admin-rapid-setup.title" />}
        />
      }
    >
      <PageBlock variation="full">
        <CountryAndLanguage />
        {/* <BusinessAndProducts /> */}
        <Warehouses />
        <PaymentProvider />
      </PageBlock>
    </Layout>
  )
}

export default AdminExample
