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
                Byla vytvořena <b className="text-brand-primary">objednávka webu</b>
              </Heading>

              <Section className="text-center mt-[32px] mb-[32px]">
                <ul className="m-0 px-0 text-center">
                  <li className="list-none text-[14px] leading-[20px] pb-2">
                    <b className="block">Stav platby:</b> Uhrazeno
                  </li>

                  <li className="list-none text-[14px] leading-[20px] pb-2">
                    <b className="block">Doména a volba DNS:</b>{' '}
                    <Link
                      href="https://visiosnap.cz/websites/indrafinance.cz"
                      className="text-brand-primary font-semibold"
                    >
                      indrafinance.cz
                    </Link>{' '}
                    | Zkoupení domény
                  </li>

                  <li className="list-none text-[14px] leading-[20px] pb-2">
                    <b className="block">Cena a termín:</b> 3 500 Kč | 3 dny
                  </li>

                  <li className="list-none text-[14px] leading-[20px]">
                    <b className="block">Klient:</b> Patrik Indra | 123 456 789 |
                    indra@indrafinance.cz
                  </li>
                </ul>
              </Section>

              <Text className="text-center text-black text-[14px] leading-[20px] mt-[20px] p-0">
                Nyní přistupte k napojení domény nebo komunikaci s klientem v rámci nastavení DNS
                domény a spuštění webu.
              </Text>

              <Section className="text-center mt-[32px] mb-[32px]">
                <Button
                  className="bg-brand-primary rounded-full text-white text-[12px] font-bold no-underline text-center px-5 py-3 mx-1"
                  href="https://visiosnap.cz"
                >
                  Vercel
                </Button>

                <Button
                  className="bg-gray-200 rounded-full text-black text-[12px] font-bold no-underline text-center px-5 py-3 mx-1"
                  href="https://visiosnap.cz"
                >
                  Napsat klientovi
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
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default VercelInviteUserEmail
