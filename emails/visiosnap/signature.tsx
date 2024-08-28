import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Section,
  Text,
  Tailwind,
  Button,
  Row,
  Column,
} from '@react-email/components'
import * as React from 'react'

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ''
const logoImage = `https://profile-next-core.s3.eu-north-1.amazonaws.com/identity/logo_monochrom.png`
const userImage = `https://profile-next-core.s3.eu-north-1.amazonaws.com/emailing/email-photo_jakub_light.png`
const userName = 'Jakub Galia'
const infoEmail = 'jakub@visiosnap.cz'

export const VisioSnapSignature = () => {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            fontFamily: {
              sans: ['"Inter"', 'ui-sans-serif', 'system-ui'],
            },
            extend: {
              colors: {
                brand: {
                  primary: '#121FC9',
                  secondary: '#CBFE01',
                  accent: '#FCA4ED',
                },
              },
            },
          },
        }}
      >
        <Head />
        <Body className="bg-[#F0F1F8] w-full">
          <Container className="bg-[#F0F1F8] font-sans px-[10px] w-full sm:w-[600px]">
            <Container className="bg-white rounded-xl my-[20px] sm:my-[40px] mx-auto px-[20px] sm:px-[40px] py-[40px] w-full sm:w-[600px]">
              <Heading className="text-black text-[16px] font-semibold text-left p-0 mb-[30px] mx-0">
                Dobrý den,
              </Heading>

              <Text className="text-left text-black text-[14px] leading-[20px] m-0 p-0">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce aliquam vestibulum
                ipsum. Duis viverra diam non justo. Nulla accumsan, elit sit amet varius semper,
                nulla mauris mollis quam, tempor suscipit diam nulla vel leo.
              </Text>

              <Hr className="border border-solid border-[#eaeaea] mt-[26px] mb-[16px] mx-0 w-full" />

              <Section className="flex justify-start items-center">
                <Row>
                  <Column align="left">
                    <Img className="rounded-full pr-2 md:pr-0" src={userImage} height="80" />
                  </Column>

                  <Column className="pl-3">
                    <Text className="text-brand-primary text-[13px] leading-[16px] mt-3 mb-0 sm:mb-1">
                      <span className="font-[600]">{userName}</span>
                    </Text>

                    <Text className="text-[#666666] text-[13px] leading-[17px] mt-0 mb-0">
                      <Link href={`mailto: ${infoEmail};`} className="text-[#666666]">
                        {infoEmail}
                      </Link>{' '}
                      |{' '}
                      <Link href="https://visiosnap.cz" className="text-[#666666]">
                        visiosnap.cz
                      </Link>
                    </Text>

                    <Text className="text-left text-[#666666] text-[12px] leading-[16px] mt-3">
                      <Link href="https://visiosnap.cz" className="text-[#666666]">
                        Powered by
                      </Link>{' '}
                      |{' '}
                      <Link href="https://visiosnap.cz">
                        <Img
                          src={logoImage}
                          width="75"
                          height="17"
                          alt="VisioSnap"
                          className="inline pl-1 translate-y-1 opacity-60"
                        />
                      </Link>
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default VisioSnapSignature
