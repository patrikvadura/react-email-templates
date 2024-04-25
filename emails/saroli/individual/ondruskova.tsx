import * as React from 'react'
import SaroliEmail, { Props } from '../default'

const customProps: Partial<Props> = {
  userName: 'Zdislava Ondrůšková',
  userImage: 'profile-ondruskova.webp',
  userRole: 'Manažer',
  userCompany: 'Saroli & Partneři s.r.o.',
  userEmail: 'ondruskova@saroli.cz',
  userPhone: '+420 603 241 631',
  userWebsite: 'sarolipartneri.cz',
  logo: 'saroli',
}

const SaroliEmailCustom: React.FC<Props> = props => {
  return <SaroliEmail {...customProps} {...props} />
}

export default SaroliEmailCustom
