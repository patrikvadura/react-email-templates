import * as React from 'react'
import SaroliEmail, { Props } from '../default'

const customProps: Partial<Props> = {
  userName: 'František Geist',
  userImage: 'profile-geist.webp',
  userRole: 'Finanční specialista',
  userCompany: 'Saroli Sport s.r.o.',
  userEmail: 'geist@saroli.cz',
  userPhone: '+420 737 957 291',
  userWebsite: 'sarolisport.cz',
  logo: 'sport',
}

const SaroliEmailCustom: React.FC<Props> = props => {
  return <SaroliEmail {...customProps} {...props} />
}

export default SaroliEmailCustom
