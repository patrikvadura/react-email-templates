import {
  Body,
  Container,
  Column,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface SaroliEmailProps {
  userName?: string
  userImage?: string
  userRole?: string
  userCompany?: string
  userEmail?: string
  userPhone?: string
  userWebsite?: string
  logo?: string
}

const baseUrl = process.env.CDN_URL ? `https://${process.env.CDN_URL}` : ''

export const SaroliEmail = ({
  userName,
  userImage,
  userRole,
  userCompany,
  userEmail,
  userPhone,
  userWebsite,
  logo,
}: SaroliEmailProps) => {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#1A1A44',
              },
            },
          },
        }}
      >
        <Head>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />

          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
              format: 'woff2',
            }}
            fontWeight={800}
            fontStyle="semibold"
          />
        </Head>

        <Body className="bg-white font-sans px-2">
          <Container>
            <Section>
              <Row className="pb-2 px-0 sm:px-0">
                <Column className="pl-0 sm:px-0">
                  <Text className="text-[#262626] text-[13px] font-light leading-[1.625]">
                    S přáním hezkého dne,
                  </Text>
                  <Hr className="border-[1px] border-[#E8E7E4] my-[26px] mx-0 w-full" />
                </Column>
              </Row>
            </Section>

            <Section>
              <Row>
                <Column className="w-2/12 sm:w-2/12 flex items-center pl-0 text-black font-light">
                  <Img src={userImage} width="70" height="70" alt="Saroli" />
                </Column>

                <Column className="w-10/12 sm:w-10/12 pl-0">
                  <Link href="https://saroli.cz" className="no-underline">
                    <Img src={logo} width="80" alt="Patrik Indra" />
                  </Link>

                  <Heading className="pt-3 my-0 text-brand text-[13px] font-normal leading-[14px]">
                    <strong className="font-semibold">{userName}</strong> | {userRole} |
                    {userCompany}
                  </Heading>

                  <Text className="my-2 text-[#808080] text-[13px] font-light leading-[14px]">
                    {userPhone} | {userEmail} | {userWebsite}
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

SaroliEmail.PreviewProps = {
  userName: 'Patrik Indra',
  userImage: `${baseUrl}/static/saroli/profile/profile-indra.png`,
  userRole: 'Manažer, Partner',
  userCompany: 'Saroli Forte s.r.o. | Saroli & Partneři s.r.o.',
  userEmail: 'indra@saroli.cz',
  userPhone: '+420 775 265 640',
  userWebsite: 'indrapatrik.cz | sarolipartneri.cz',
  logo: `${baseUrl}/static/saroli/saroli_logo_default.png`,
} as SaroliEmailProps

export default SaroliEmail
