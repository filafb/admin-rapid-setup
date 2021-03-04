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
        <PageHeader title={<FormattedMessage id="admin-rapid-setup.title" />} />
      }
    >
      <PageBlock title="1 - Country & Language" variation="full">
        <CountryAndLanguage />
      </PageBlock>
      <PageBlock title="2 - Warehouses" variation="full">
        <Warehouses />
      </PageBlock>
      <PageBlock title="3 - Payment Provider" variation="full">
        <PaymentProvider />
      </PageBlock>
    </Layout>
  )
}

export default AdminExample
