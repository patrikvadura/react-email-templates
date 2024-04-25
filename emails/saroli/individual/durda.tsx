import * as React from 'react'
import SaroliEmail, { Props } from '../default'

const customProps: Partial<Props> = {
  userName: 'Lukáš Ďurďa',
  userImage: 'profile-durda.webp',
  userRole: 'Manažer, Partner',
  userCompany: 'Saroli Sport s.r.o.',
  userEmail: 'durda@saroli.cz',
  userPhone: '+420 602 380 003',
  userWebsite: 'sarolisport.cz',
  logo: 'sport',
}

const SaroliEmailCustom: React.FC<Props> = props => {
  return <SaroliEmail {...customProps} {...props} />
}

export default SaroliEmailCustom
