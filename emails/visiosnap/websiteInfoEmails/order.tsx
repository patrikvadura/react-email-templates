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
        <Head />
        <Body className="bg-[#F0F1F8] my-auto mx-auto w-full">
          <Container className="bg-[#F0F1F8] my-auto mx-auto font-sans px-4 sm:px-2 w-full">
            <Container className="bg-white rounded-xl my-[20px] sm:my-[40px] mx-auto px-[20px] sm:px-[40px] py-[40px] max-w-[465px]">
              <Heading className="text-black text-[20px] font-semibold text-center p-0 mb-[30px] mx-0">
                Dokončili jste <b className="text-brand-primary">objednávku nového webu</b>
              </Heading>

              <Text className="text-center text-black text-[14px] leading-[20px] m-0 p-0">
                Pokud jste již objednávku uhradili není potřeba žádná další akce z vaší strany.
                Pokud však z nějakého důvodu platba neproběhla, budeme vás kontaktovat.
              </Text>

              <Text className="text-center text-black text-[14px] leading-[20px] mt-[20px] p-0">
                Prosíme o kontrolu vašeho webu v naší aplikaci v sekci "Vaše weby", zda je po vás
                vyžadována ještě nějaká další akce.
              </Text>

              <Section className="text-center mt-[32px] mb-[32px]">
                <Button
                  className="bg-brand-primary rounded-full text-white text-[12px] font-bold no-underline text-center px-5 py-3"
                  href="https://visiosnap.cz"
                >
                  Přejít na sekci "Vaše weby"
                </Button>
              </Section>

              <Text className="text-center text-black text-[14px] leading-[20px] m-0 p-0">
                Jakmile napojíme vaši doménu a zprovozníme váš web, budeme vás kontaktovat.
              </Text>

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
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default VercelInviteUserEmail
