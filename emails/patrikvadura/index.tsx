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
import 'dotenv/config'

interface EmailProps {
  userName?: string
  userPosition?: string
  userImage?: string
  infoPhone?: string
  infoEmail?: string
  infoWebsite?: string
  logoImage?: string
}

const baseUrl = process.env.CDN_URL ? `${process.env.CDN_URL}` : ''

export const SignatureEmail = ({
  userName = 'Patrik Vaďura',
  logoImage = `${baseUrl}/static/patrikvadura/logo.png`,
  userImage = `${baseUrl}/static/patrikvadura/user.png`,
  userPosition = 'Kreativec a webový vývojář',
  infoPhone = '725 007 655',
  infoEmail = 'info@patrikvadura.cz',
  infoWebsite = 'patrikvadura.cz',
}: EmailProps) => {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: {
                  primary: '#04080B',
                  accent: '#8BEDA4',
                },
              },
            },
          },
        }}
      >
        <Head>
          <Font
            fontFamily="PP Telegraf"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${baseUrl}/static/patrikvadura/fonts/PPTelegraf-Ultralight.woff2`,
              format: 'woff2',
            }}
            fontWeight={300}
            fontStyle="normal"
          />

          <Font
            fontFamily="PP Telegraf"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${baseUrl}/static/patrikvadura/fonts/PPTelegraf-Regular.woff2`,
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />

          <Font
            fontFamily="PP Telegraf"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${baseUrl}/static/patrikvadura/fonts/PPTelegraf-Bold.woff2`,
              format: 'woff2',
            }}
            fontWeight={600}
            fontStyle="normal"
          />

          <Font
            fontFamily="PP Telegraf"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${baseUrl}/static/patrikvadura/fonts/PPTelegraf-Black.woff2`,
              format: 'woff2',
            }}
            fontWeight={800}
            fontStyle="normal"
          />
        </Head>
        <Body className="bg-white font-sans">
          <Container className="p-[10px] w-full sm:w-[600px]">
            <Text className="text-brand-primary text-[14px] leading-[22px]">
              S přáním hezkého dne
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

            <Section>
              <Row>
                <Column align="left" className="w-3/12 sm:w-2/12">
                  <Img className="rounded-full" src={userImage} height="60" />
                </Column>

                <Column className="w-9/12 sm:w-10/12">
                  <Img src={logoImage} height="16" alt="Patrik Vaďura" />

                  <Text className="text-brand-primary text-[13px] leading-[17px] mt-3 mb-0 sm:mb-2">
                    <span className="font-[600]">{userName}</span>
                    <span className="px-1 hidden sm:inline">|</span>
                    <span className="block sm:inline">{userPosition}</span>
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
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default SignatureEmail
