import * as React from 'react'
import SaroliEmail, { Props } from '../index'

const customProps: Partial<Props> = {
  userName: 'Veronika Polášková',
  userImage: 'profile-polaskova.webp',
  userRole: 'Privátní finanční specialista',
  userCompany: 'Saroli & Partneři s.r.o.',
  userEmail: 'polaskova@saroli.cz',
  userPhone: '+420 724 378 301',
  userWebsite: 'sarolipartneri.cz',
  logo: 'saroli',
}

const SaroliEmailCustom: React.FC<Props> = (props) => {
  return <SaroliEmail {...customProps} {...props} />
}

export default SaroliEmailCustom
