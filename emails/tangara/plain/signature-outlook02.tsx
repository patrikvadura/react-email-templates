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

interface EmailProps {
  userName?: string
  userPosition?: string
  userImage?: string
  infoPhone?: string
  infoEmail?: string
  infoWebsite?: string
  logoImage?: string
  infoAddressFirst?: string
  infoAddressSecond?: string
}

export const SignatureEmail = ({
  userName = 'Tým Tangara',
  logoImage = `https://res.cloudinary.com/patrik-vadura/image/upload/v1741597301/tangara/logo_default_RGB_dzwaxd.png`,
  infoPhone = '+420 771 509 412',
  infoEmail = 'info@tangara.cz',
  infoWebsite = 'www.tangara.cz',
  infoAddressFirst = 'Fakturační adresa: Osvobození 1672, 686 04 Kunovice',
  infoAddressSecond = 'Dodací adresa a provozovna: Nádražní 282, 763 26 Luhačovice',
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
        <Head></Head>
        <Body style={{ margin: 0 }}>
          <Section
            style={{
              marginLeft: 0,
              marginTop: 16,
              paddingTop: 24,
              borderTop: '1px solid rgb(209,213,219)',
              maxWidth: '600px',
            }}
          >
            <Img src={logoImage} height="28" alt="Tangara" />

            <Section
              style={{
                marginTop: 0,
                marginBottom: 0,
                paddingTop: 12,
                paddingBottom: 0,
              }}
            >
              <Text
                style={{
                  ...text,
                  color: '#008BCE !important',
                  textDecoration: 'none !important',
                  fontWeight: 800,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingTop: 0,
                  paddingBottom: 2,
                }}
              >
                {userName}
              </Text>
            </Section>

            <Section
              style={{
                marginTop: 0,
                marginBottom: 0,
                paddingTop: 12,
                paddingBottom: 0,
              }}
            >
              <Text style={{ ...text, marginTop: 0, marginBottom: 0, paddingBottom: 2 }}>
                {infoAddressFirst}
              </Text>

              <Text style={{ ...text, marginTop: 0, marginBottom: 0, paddingBottom: 2 }}>
                {infoAddressSecond}
              </Text>
            </Section>

            <Section
              style={{
                marginTop: 0,
                marginBottom: 0,
                paddingTop: 16,
                paddingBottom: 0,
              }}
            >
              <Row>
                <Column>
                  <Img
                    alt="Telefon"
                    height="20"
                    src="https://res.cloudinary.com/patrik-vadura/image/upload/v1741597965/tangara/icon_phone_01_w7mg5m.png"
                    style={{ display: 'inline', verticalAlign: 'middle' }}
                  />
                </Column>
                <Column>
                  <Link
                    href={`tel: ${infoPhone}`}
                    style={{ ...text, ...anchor, lineHeight: '16px !important' }}
                    className="block sm:inline !my-0"
                  >
                    {infoPhone}
                  </Link>
                </Column>

                <Column>
                  <Img
                    alt="Email"
                    height="20"
                    src="https://res.cloudinary.com/patrik-vadura/image/upload/v1741597964/tangara/icon_email_01_mqfbgk.png"
                    style={{ display: 'inline', verticalAlign: 'middle' }}
                  />
                </Column>
                <Column>
                  <Link
                    href={`mailto: ${infoEmail}`}
                    style={{ ...text, ...anchor, lineHeight: '16px !important' }}
                    className="block sm:inline !my-0"
                  >
                    {infoEmail}
                  </Link>
                </Column>

                <Column>
                  <Img
                    alt="Webové stránky"
                    height="20"
                    src="https://res.cloudinary.com/patrik-vadura/image/upload/v1741597967/tangara/icon_website_01_a7txte.png"
                    style={{ display: 'inline', verticalAlign: 'middle' }}
                  />
                </Column>
                <Column>
                  <Link
                    href={`https://${infoWebsite}`}
                    style={{ ...text, ...anchor, lineHeight: '16px !important' }}
                    className="block sm:inline !my-0"
                  >
                    {infoWebsite}
                  </Link>
                </Column>
              </Row>
            </Section>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default SignatureEmail

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  padding: '40px',
}

const text = {
  fontSize: '14px',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: '#000000',
  lineHeight: '20px',
}

const anchor = {
  color: '#008BCE',
  fontWeight: 800,
  textDecoration: 'none !important',
}
