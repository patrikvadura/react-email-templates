import * as React from 'react'
import SaroliEmail, { Props } from '../default'

const customProps: Partial<Props> = {
  userName: 'Hynek Kůdela',
  userImage: 'profile-kudela.webp',
  userRole: 'Finanční poradce',
  userCompany: 'Saroli & Partneři s.r.o.',
  userEmail: 'kudela@saroli.cz',
  userPhone: '+420 603 471 452',
  userWebsite: 'sarolipartneri.cz',
  logo: 'saroli',
}

const SaroliEmailCustom: React.FC<Props> = props => {
  return <SaroliEmail {...customProps} {...props} />
}

export default SaroliEmailCustom
