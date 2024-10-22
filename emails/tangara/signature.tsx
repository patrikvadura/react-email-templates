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
  userName = 'Ing. Marcel Jachník, MBA, LL.M.',
  logoImage = `https://patrikvadura.s3.eu-north-1.amazonaws.com/emailing-clients/tangara/logo_default_RGB.png`,
  userPosition = 'jednatel',
  infoPhone = '+420 775 870 510',
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
          <Container
            style={{
              backgroundColor: '#f6f9fc',
              width: '100%',
              maxWidth: 'none',
              height: '100%',
              maxHeight: 'none',
              padding: '20px 0',
              margin: 0,
            }}
          >
            <Container style={container}>
              <Section
                style={{
                  marginTop: 0,
                  marginBottom: 0,
                  paddingTop: 0,
                  paddingBottom: 16,
                }}
              >
                <Text style={{ ...text, color: '#000000' }}>S pozdravem</Text>
              </Section>

              <Section
                style={{
                  paddingTop: 24,
                  borderTop: '1px solid rgb(209,213,219)',
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

                  <Text
                    style={{
                      ...text,
                      color: '#000000',
                      marginTop: 0,
                      marginBottom: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                  >
                    {userPosition}
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
                    paddingTop: 4,
                    paddingBottom: 0,
                  }}
                >
                  <Text style={text}>
                    <Link
                      href={`tel: ${infoPhone}`}
                      style={{ ...text, ...anchor, lineHeight: '16px !important' }}
                      className="block sm:inline !my-0"
                    >
                      <Img
                        alt="Telefon"
                        height="20"
                        src="https://patrikvadura.s3.eu-north-1.amazonaws.com/emailing-clients/tangara/icon_padding_02-01.png"
                        style={{ display: 'inline', verticalAlign: 'middle' }}
                      />
                      {infoPhone}
                    </Link>

                    <span
                      style={{ ...divider, paddingLeft: '4px', paddingRight: '4px' }}
                      className="hidden sm:inline"
                    >
                      {' '}
                      |{' '}
                    </span>
                    <Link
                      href={`mailto: ${infoEmail}`}
                      style={{ ...text, ...anchor, lineHeight: '16px !important' }}
                      className="block sm:inline !my-0"
                    >
                      <Img
                        alt="Email"
                        height="20"
                        src="https://patrikvadura.s3.eu-north-1.amazonaws.com/emailing-clients/tangara/icon_padding_01-01.png"
                        style={{ display: 'inline', verticalAlign: 'middle' }}
                      />
                      {infoEmail}
                    </Link>
                    <span
                      style={{ ...divider, paddingLeft: '4px', paddingRight: '4px' }}
                      className="hidden sm:inline"
                    >
                      {' '}
                      |{' '}
                    </span>
                    <Link
                      href={`https://${infoWebsite}`}
                      style={{ ...text, ...anchor, lineHeight: '16px !important' }}
                      className="block sm:inline !my-0"
                    >
                      <Img
                        alt="Webové stránky"
                        height="20"
                        src="https://patrikvadura.s3.eu-north-1.amazonaws.com/emailing-clients/tangara/icon_padding_03-01.png"
                        style={{ display: 'inline', verticalAlign: 'middle' }}
                      />
                      {infoWebsite}
                    </Link>
                  </Text>
                </Section>
              </Section>
            </Container>
          </Container>
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

const divider = {
  marginLeft: 6,
  marginRight: 6,
}

const anchor = {
  color: '#008BCE',
  fontWeight: 800,
  textDecoration: 'none !important',
}
