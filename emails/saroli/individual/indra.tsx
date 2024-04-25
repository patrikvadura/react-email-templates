import * as React from 'react'
import SaroliEmail, { Props } from '../default'

const customProps: Partial<Props> = {
  userName: 'Patrik Indra',
  userImage: 'profile-indra.webp',
  userRole: 'Manažer, Partner',
  userCompany: 'Saroli Forte s.r.o. | Saroli & Partneři s.r.o.',
  userEmail: 'indra@saroli.cz',
  userPhone: '+420 775 265 640',
  userWebsite: 'indrapatrik.cz | sarolipartneri.cz',
  logo: 'saroli',
}

const SaroliEmailCustom: React.FC<Props> = props => {
  return <SaroliEmail {...customProps} {...props} />
}

export default SaroliEmailCustom
