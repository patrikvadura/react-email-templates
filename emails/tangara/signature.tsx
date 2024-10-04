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
        <Fragment>
          <Body style={main}>
            <Container style={container}>
              <Section
                style={{
                  marginTop: 0,
                  marginBottom: 0,
                  paddingTop: 0,
                  paddingBottom: 4,
                }}
              >
                <Text style={{ ...text, color: '#000000' }}>Dobrý den,</Text>

                <Text style={{ ...text, color: '#000000' }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam faucibus mi quis
                  velit. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Maecenas
                  fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra
                  metus odio a lectus.
                </Text>
              </Section>

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
                <Row>
                  <Column align="left">
                    <Img
                      src={logoImage}
                      width={130}
                      height={28}
                      className="mx-0 px-0"
                      alt="Tangara"
                    />
                  </Column>
                </Row>

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
                  <Text
                    style={{
                      ...text,
                      color: '#000000',
                      marginTop: 0,
                      marginBottom: 0,
                      paddingTop: 2,
                      paddingBottom: 0,
                    }}
                  >
                    {infoAddressFirst}
                  </Text>

                  <Text
                    style={{
                      ...text,
                      color: '#000000',
                      marginTop: 0,
                      marginBottom: 0,
                      paddingTop: 2,
                      paddingBottom: 0,
                    }}
                  >
                    {infoAddressSecond}
                  </Text>
                </Section>

                <Section
                  style={{
                    ...text,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingTop: 8,
                    paddingBottom: 0,
                  }}
                >
                  <Row>
                    <Column align="left" className="w-1/3">
                      <Row>
                        <Column align="left" className="w-1/5">
                          <Img
                            alt="Telefon"
                            width="18"
                            height="18"
                            src="https://patrikvadura.s3.eu-north-1.amazonaws.com/emailing-clients/tangara/icon_phone_02.png"
                            style={{
                              display: 'inline',
                              verticalAlign: 'middle',
                              marginRight: '8px',
                            }}
                          />
                        </Column>
                        <Column align="left" className="w-4/5">
                          <span style={{ ...text, color: '#000000' }}>{infoPhone}</span>
                        </Column>
                      </Row>
                    </Column>

                    <Column align="left" className="w-1/3">
                      <Row>
                        <Column align="left" className="w-1/5">
                          <Img
                            alt="Email"
                            width="18"
                            height="14"
                            src="https://patrikvadura.s3.eu-north-1.amazonaws.com/emailing-clients/tangara/icon_email_02.png"
                            style={{
                              display: 'inline',
                              verticalAlign: 'middle',
                              marginRight: '8px',
                            }}
                          />
                        </Column>
                        <Column align="left" className="w-4/5">
                          <Link
                            href={`mailto: ${infoEmail};`}
                            style={{ ...text, ...anchor }}
                            className="block sm:inline"
                          >
                            {infoEmail}
                          </Link>
                        </Column>
                      </Row>
                    </Column>

                    <Column align="left" className="w-1/3">
                      <Row>
                        <Column align="left" className="w-1/5">
                          <Img
                            alt="Webové stránky"
                            width="18"
                            height="18"
                            src="https://patrikvadura.s3.eu-north-1.amazonaws.com/emailing-clients/tangara/icon_website_02.png"
                            style={{
                              display: 'inline',
                              verticalAlign: 'middle',
                              marginRight: '8px',
                            }}
                          />
                        </Column>
                        <Column align="left" className="w-4/5">
                          <Link
                            href={`https://${infoWebsite}`}
                            style={{ ...text, ...anchor }}
                            className="block sm:inline"
                          >
                            {infoWebsite}
                          </Link>
                        </Column>
                      </Row>
                    </Column>
                  </Row>
                </Section>
              </Section>
            </Container>
          </Body>
        </Fragment>
      </Tailwind>
    </Html>
  )
}

export default SignatureEmail

const main = {
  backgroundColor: '#f6f9fc',
  padding: '10px 0',
}

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  padding: '40px',
}

const text = {
  fontSize: '14px',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  lineHeight: '20px',
}

const anchor = {
  color: '#008BCE !important',
  fontWeight: 800,
  textDecoration: 'none !important',
}
