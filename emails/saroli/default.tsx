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
import { Fragment } from 'react'
import 'dotenv/config'

export interface Props {
  userName?: string
  userImage?: string
  userRole?: string
  userCompany?: string
  userEmail?: string
  userPhone?: string
  userWebsite?: string
  logo?: string
}

const baseUrl = process.env.CDN_URL ? `${process.env.CDN_URL}` : ''

export const SaroliEmail = ({
  userName,
  userImage,
  userRole,
  userCompany,
  userEmail,
  userPhone,
  userWebsite,
  logo,
}: Props) => {
  const profileImage = `${baseUrl}/static/saroli/profile/${userImage}`

  const logoVariants = {
    saroli: `${baseUrl}/static/saroli/saroli_logo_default.png`,
    forte: `${baseUrl}/static/saroli/saroli_logo_forte.png`,
    partners: `${baseUrl}/static/saroli/saroli_logo_partneri.png`,
    sport: `${baseUrl}/static/saroli/saroli_logo_sport.png`,
  }

  const domains = {
    saroli: 'https://saroli.cz',
    forte: 'https://saroliforte.cz',
    partners: 'https://sarolipartneri.cz',
    sport: 'https://sarolisport.cz',
  }

  const logoVariant = logoVariants[logo] || logoVariants.saroli
  const domain = domains[logo]

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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          {/*@ts-ignore*/}
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Hind:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <Font
            fontFamily="Hind"
            fallbackFontFamily="Verdana"
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Fragment>
          <Body className="bg-white font-sans px-2">
            <Container className="w-full sm:w-[600px]">
              <Section>
                <Row className="pb-2 px-0 sm:px-0">
                  <Column className="pl-0 sm:px-0">
                    <Text className="text-[#262626] text-[13px] font-[400] leading-[1.625]">
                      S přáním hezkého dne
                    </Text>
                    <Hr className="border-[1px] border-[#E8E7E4] my-[26px] mx-0 w-full" />
                  </Column>
                </Row>
              </Section>

              <Section>
                <Row>
                  <Column className="w-3/12 sm:w-2/12 flex items-center pl-0 text-black font-light">
                    <Img src={profileImage} width="70" height="70" alt="Saroli" />
                  </Column>

                  <Column className="w-9/12 sm:w-10/12 pl-0">
                    <Link href={domain} className="no-underline">
                      <Img src={logoVariant} width="80" alt="Patrik Indra" />
                    </Link>

                    <Heading className="pt-3 my-0 text-brand text-[13px] font-[400] leading-[15px]">
                      <strong className="font-[700]">{userName}</strong> | {userRole} |{' '}
                      {userCompany}
                    </Heading>

                    <Text className="my-2 text-[#808080] text-[13px] font-[400] leading-[15px]">
                      {userPhone} | {userEmail} | {userWebsite}
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Container>
          </Body>
        </Fragment>
      </Tailwind>
    </Html>
  )
}

SaroliEmail.PreviewProps = {
  userName: 'Patrik Indra',
  userImage: 'profile-indra.webp',
  userRole: 'Manažer, Partner',
  userCompany: 'Saroli Forte s.r.o. | Saroli & Partneři s.r.o.',
  userEmail: 'indra@saroli.cz',
  userPhone: '+420 775 265 640',
  userWebsite: 'indrapatrik.cz | sarolipartneri.cz',
  logo: 'saroli',
} as Props

export default SaroliEmail
