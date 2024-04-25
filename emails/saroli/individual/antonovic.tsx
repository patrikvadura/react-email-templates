import * as React from 'react'
import SaroliEmail, { Props } from '../default'

const customProps: Partial<Props> = {
  userName: 'Radim Antonovič',
  userImage: 'profile-antonovic.webp',
  userRole: 'CEO',
  userCompany: 'Saroli Capital s.r.o. | Saroli Forte s.r.o.',
  userEmail: 'antonovic@saroli.cz',
  userPhone: '+420 773 494 909',
  userWebsite: 'saroliforte.cz | saroli.cz',
  logo: 'saroli',
}

const SaroliEmailCustom: React.FC<Props> = props => {
  return <SaroliEmail {...customProps} {...props} />
}

export default SaroliEmailCustom
