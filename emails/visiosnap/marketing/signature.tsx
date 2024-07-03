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
} from '@react-email/components'
import * as React from 'react'

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ''

export const VercelInviteUserEmail = () => {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          theme: {
            fontFamily: {
              sans: ['"Inter"', 'ui-sans-serif', 'system-ui'],
            },
            extend: {
              colors: {
                brand: {
                  primary: '#29349A',
                  secondary: '#05E988',
                  accent: '#FCA4ED',
                },
              },
            },
          },
        }}
      >
        <Body className="bg-[#F0F1F8] my-auto mx-auto font-sans px-2">
          <Container className="bg-white rounded-xl my-[40px] mx-auto px-[20px] py-[40px] max-w-[465px]">
            <Heading className="text-black text-[20px] font-normal text-center p-0 mb-[30px] mx-0">
              Dobrý den,
            </Heading>

            <Text className="text-center text-black text-[14px] leading-[20px] m-0 p-0">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
              industries for previewing layouts and visual mockups.
            </Text>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#05E988] rounded-full text-[#29349A] text-[12px] font-bold no-underline text-center px-5 py-3"
                href="https://visiosnap.cz"
              >
                Poslat odpověď
              </Button>
            </Section>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

            <Section className="flex flex-row items-center justify-center text-center w-full m-0 p-0">
              <Text className="text-center text-[#666666] text-[12px] leading-[20px]">
                <Link href="https://visiosnap.cz" className="text-[#666666]">
                  visiosnap.cz
                </Link>{' '}
                |{' '}
                <Link href="https://visiosnap.cz/help" className="text-[#666666]">
                  Nápověda
                </Link>{' '}
                |{' '}
                <Link href="https://visiosnap.cz/affiliate" className="text-[#666666]">
                  Affiliate
                </Link>{' '}
                |{' '}
                <Link href="https://visiosnap.cz/terms" className="text-[#666666]">
                  Podmínky
                </Link>
              </Text>
            </Section>

            <Text className="text-center text-[#666666] text-[12px] leading-[20px] m-0 p-0">
              Powered by
              <Link href="https://visiosnap.cz">
                <Img
                  src={`${baseUrl}/static/visiosnap/logo_monochrom.png`}
                  width="75"
                  height="17"
                  alt="VisioSnap"
                  className="inline pl-1 translate-y-0.5 opacity-60"
                />
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default VercelInviteUserEmail
