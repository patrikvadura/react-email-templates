import {
  Body,
  Column,
  Container,
  Font,
  Head,
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

interface EmailProps {
  userName?: string
  userPosition?: string
  userImage?: string
  infoPhone?: string
  infoEmail?: string
  infoWebsite?: string
  infoAddress?: string
  infoWebsiteEshop?: string
  infoWebsiteCatalogue?: string
  logoImage?: string
  infoAdvertisementImage?: string
  infoAdvertisementLink?: string
}

const baseUrl = process.env.CDN_URL ? `${process.env.CDN_URL}` : ''

export const SignatureEmail = ({
  userName = 'Mgr. Antonín ŠTĚRBA',
  userPosition = 'Ředitel společnosti',
  logoImage = `${baseUrl}/static/medicredit/logo.png`,
  userImage = `${baseUrl}/static/medicredit/profile/profile_300x300px_sterba.png`,
  infoPhone = '776 200 447',
  infoEmail = 'antonin@medicredit.cz',
  infoAddress = 'Družstevní II 1531, 687 25 Hluk, Česká republika',
  infoWebsite = 'medicredit.cz',
  infoWebsiteEshop = 'mediskont.cz',
  infoWebsiteCatalogue = 'medicredit.cz/novinka/katalog-pro-rok-2024',
  infoAdvertisementImage = `${baseUrl}/static/medicredit/banners/banner_600x90px_ochranne-napoje@2x.jpg`,
  infoAdvertisementLink = 'mediskont.cz/ochranne-napoje/',
}: EmailProps) => {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            fontFamily: {
              sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui'],
            },
            extend: {
              colors: {
                brand: {
                  primary: '#494F53',
                  accent: '#019AB2',
                },
              },
            },
          },
        }}
      >
        <Head></Head>
        <Fragment>
          <Body className="bg-white font-sans">
            <Container className="px-[10px] w-full sm:w-[600px]">
              <Text className="text-brand-primary text-[14px] leading-[20px]">
                S přáním hezkého dne
              </Text>

              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

              <Section>
                <Row>
                  <Column align="left">
                    <Img
                      className="rounded-full pr-2 md:pr-0"
                      src={userImage}
                      height="60"
                      alt="Medicredit"
                    />
                  </Column>

                  <Column>
                    <Img src={logoImage} height="16" alt={userName} />

                    <Text className="text-brand-primary text-[13px] leading-[16px] mt-3 mb-0 sm:mb-1">
                      <span className="font-[600]">{userName}</span>
                      <span className="px-1 hidden sm:inline">|</span>
                      <span className="hidden sm:inline">{userPosition}</span>
                    </Text>

                    <Text className="text-brand-primary text-[13px] leading-[17px] mt-0 mb-0">
                      <Link href={`tel: ${infoPhone};`} className="text-brand-primary">
                        {infoPhone}
                      </Link>
                      <span className="px-1">|</span>
                      <Link href={`mailto: ${infoEmail};`} className="text-brand-primary">
                        {infoEmail}
                      </Link>
                      <span className="px-1 hidden sm:inline">|</span>
                      <Link
                        href={`https://${infoWebsite}`}
                        className="text-brand-primary font-[600] block sm:inline"
                      >
                        {infoWebsite}
                      </Link>
                    </Text>
                  </Column>
                </Row>
              </Section>

              <Section className="bg-brand-accent mt-6 p-6">
                <Row>
                  <Column align="left">
                    <Text className="text-white text-[13px] leading-[16px] mt-0 pt-0">
                      <span className="font-[600]">MediCredit a.s.</span> | {infoAddress}
                    </Text>
                  </Column>
                </Row>

                <Hr className="border border-solid border-white opacity-30 mt-0 mb-4 sm:mt-2 sm:mb-4 mx-0 w-full" />

                <Row>
                  <Column align="left">
                    <Link
                      href={`https://${infoWebsite}`}
                      className="text-white text-[13px] leading-[16px] font-[600] block sm:inline"
                    >
                      <Img
                        src={`${baseUrl}/static/medicredit/icons/globe.png`}
                        height="16"
                        className="block sm:inline mr-3 align-middle -translate-y-0.5"
                        alt="Webové stránky"
                      />
                      Webové stránky
                    </Link>
                  </Column>

                  <Column align="left">
                    <Link
                      href={`https://${infoWebsiteEshop}`}
                      className="text-white text-[13px] leading-[16px] font-[600] block sm:inline"
                    >
                      <Img
                        src={`${baseUrl}/static/medicredit/icons/shoping-cart.png`}
                        height="16"
                        className="block sm:inline mr-3 align-middle -translate-y-0.5"
                        alt="E-shop - mediskont.cz"
                      />
                      E-shop - mediskont.cz
                    </Link>
                  </Column>

                  <Column align="left">
                    <Link
                      href={`https://${infoWebsiteCatalogue}`}
                      className="text-white text-[13px] leading-[16px] font-[600] block sm:inline"
                    >
                      <Img
                        src={`${baseUrl}/static/medicredit/icons/book.png`}
                        height="16"
                        className="block sm:inline mr-3 align-middle -translate-y-0.5"
                        alt="Produktový katalog"
                      />
                      Produktový katalog
                    </Link>
                  </Column>
                </Row>
              </Section>

              <Section className="mt-4">
                <Row>
                  <Column align="left">
                    <Link href={`https://${infoAdvertisementLink}`}>
                      <Img
                        src={infoAdvertisementImage}
                        width="100%"
                        className="block sm:inline mr-3 align-middle -translate-y-0.5"
                        alt="Mediskont - nabídka"
                      />
                    </Link>
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

export default SignatureEmail
