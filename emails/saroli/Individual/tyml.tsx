import * as React from 'react'
import SaroliEmail, { Props } from '../index'

const customProps: Partial<Props> = {
  userName: 'Michal Tyml',
  userImage: 'profile-tyml.webp',
  userRole: 'Finanční poradce',
  userCompany: 'Saroli & Partneři s.r.o.',
  userEmail: 'tyml@saroli.cz',
  userPhone: '+420 737 404 017',
  userWebsite: 'sarolipartneri.cz',
  logo: 'saroli',
}

const SaroliEmailCustom: React.FC<Props> = (props) => {
  return <SaroliEmail {...customProps} {...props} />
}

export default SaroliEmailCustom
