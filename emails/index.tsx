import {
  Body,
  CodeInline,
  Container,
  Font,
  Head,
  Heading,
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
import 'dotenv/config'

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

const baseUrl = process.env.CDN_URL ? `${process.env.CDN_URL}` : ''

export const SignatureEmail = ({
  userName = 'Ing. Marcel Jachník, MBA, LL.M.',
  logoImage = `${baseUrl}/static/patrikvadura/logo_negative.png`,
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
            <Container className="py-12 flex-col justify-center items-center text-center">
              <Section className="flex flex-col justify-center items-center text-center">
                <Img
                  src={logoImage}
                  width="120"
                  alt="Tangara"
                  className="mx-auto text-center mb-12"
                />

                <Heading as="h1" style={heading}>
                  The next generation of writing emails
                </Heading>

                <Text style={text}>Pro přístup k jednotlivým emailům přistupte k URL adrese:</Text>

                <Text className="text-center">
                  Install the{' '}
                  <CodeInline className="rounded-[6px] bg-gray-800 text-white px-[8px] py-[4px]">
                    <span className="opacity-30">{process.env.CDN_URL}</span>/klient/*/template.html
                  </CodeInline>{' '}
                  package
                </Text>

                <Hr
                  style={{
                    marginTop: 40,
                    borderColor: 'rgb(209,213,219)',
                    marginBottom: 40,
                    borderTopWidth: 1,
                    opacity: 0.2,
                  }}
                />

                <Text style={text} className="opacity-30">
                  Powered by React and TypeScript
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
  backgroundColor: '#04080B',
  padding: '10px 0',
}

const text = {
  fontSize: '14px',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: '#ffffff',
  lineHeight: '20px',
}

const heading = {
  padding: '24px 0',
  fontSize: '28px',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: '#ffffff',
  lineHeight: '36px',
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
