import * as React from 'react'
import SaroliEmail, { Props } from '../default'

const customProps: Partial<Props> = {
  userName: 'Marta Pecková',
  userImage: 'profile-peckova.webp',
  userRole: 'Finanční specialista',
  userCompany: 'Saroli & Partneři s.r.o.',
  userEmail: 'peckova@saroli.cz',
  userPhone: '+420 776 666 852',
  userWebsite: 'sarolipartneri.cz',
  logo: 'saroli',
}

const SaroliEmailCustom: React.FC<Props> = props => {
  return <SaroliEmail {...customProps} {...props} />
}

export default SaroliEmailCustom
