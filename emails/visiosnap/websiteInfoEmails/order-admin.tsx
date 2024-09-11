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

export const OrderAdmin = () => {
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
                  primary: '#111DC9',
                  secondary: '#CCFF00',
                },
              },
            },
          },
        }}
      >
        <Head />
        <Body className="bg-[#F0F1F8] my-auto mx-auto w-full">
          <Container className="bg-white font-sans w-full rounded-xl my-[20px] sm:my-[40px] mx-auto px-[20px] sm:px-[40px] py-[40px]">
            <Heading className="text-brand-primary text-[20px] font-semibold text-center p-0 mb-[30px] mx-0">
              Byla vytvořena nová objednávka webu VisioSnap pro doménu indrafinance.cz
            </Heading>

            <Text className="text-center text-black text-[14px] leading-[20px] m-0 p-0">
              Byla vytvořena nová objednávka s následujícími údaji:
            </Text>

            <Section className="text-center mt-[32px] mb-[32px]">
              <ul className="m-0 px-0 text-center">
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

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-brand-primary rounded-full text-white text-[12px] font-bold no-underline text-center px-5 py-3 mr-2"
                href="https://visiosnap.cz"
              >
                Náhled webu
              </Button>
            </Section>

            <Text className="text-center text-[#666666] text-[12px] leading-[20px] m-0 p-0">
              Tenhle email byl vygenerován automaticky. Prosím neodpovídejte na něj. Pokud máte
              nějaké dotazy ohledně vaší objednávky nebo faktury, napište nám na email{' '}
              <Link href="mailto:hello@visiosnap.cz" className="text-[#666666]">
                hello@visiosnap.cz
              </Link>
              .
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

            <Section className="flex flex-row items-center justify-center text-center w-full m-0 p-0">
              <Text className="text-center text-[#666666] text-[12px] leading-[20px]">
                <Link href="https://visiosnap.cz" className="text-[#666666]">
                  visiosnap.cz
                </Link>{' '}
                |{' '}
                <Link href="https://visiosnap.cz/#faq" className="text-[#666666]">
                  FAQ
                </Link>{' '}
                |{' '}
                <Link href="https://docs.visiosnap.cz" className="text-[#666666]">
                  Dokumentace
                </Link>{' '}
                |{' '}
                <Link href="https://www.visiosnap.cz/legal-terms" className="text-[#666666]">
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

export default OrderAdmin
