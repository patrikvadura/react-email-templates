import {
  Body,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Link,
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
              <Section>
                <Text style={text}>Dobrý den,</Text>

                <Text style={text}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam faucibus mi quis
                  velit. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Maecenas
                  fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra
                  metus odio a lectus.
                </Text>

                <Text style={text}>S pozdravem</Text>
              </Section>

              <Hr
                style={{
                  marginTop: 16,
                  borderColor: 'rgb(209,213,219)',
                  marginBottom: 16,
                  borderTopWidth: 1,
                }}
              />

              <Section style={{ paddingTop: '16px' }}>
                <Img src={logoImage} height="28" alt="Tangara" />

                <Text style={{ ...text, marginBottom: 0 }}>
                  <span style={{ color: '#008BCE', fontWeight: 800 }}>{userName}</span>
                  <span style={divider} className="hidden sm:inline">
                    |
                  </span>
                  <span className="block sm:inline">{userPosition}</span>
                </Text>

                <Text style={{ ...text, marginTop: '2px', marginBottom: '2px' }}>
                  {infoAddressFirst}
                </Text>

                <Text style={{ ...text, marginTop: '2px', marginBottom: '2px' }}>
                  {infoAddressSecond}
                </Text>

                <Text style={{ ...text, marginTop: '2px', marginBottom: '2px' }}>
                  <span>{infoPhone}</span>

                  <span style={divider} className="hidden sm:inline">
                    |
                  </span>
                  <Link
                    href={`mailto: ${infoEmail};`}
                    style={{ ...text, ...anchor }}
                    className="block sm:inline"
                  >
                    {infoEmail}
                  </Link>
                  <span style={divider} className="hidden sm:inline">
                    |
                  </span>
                  <Link
                    href={`https://${infoWebsite}`}
                    style={{ ...text, ...anchor }}
                    className="block sm:inline"
                  >
                    {infoWebsite}
                  </Link>
                </Text>
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
  textDecoration: 'none',
}
