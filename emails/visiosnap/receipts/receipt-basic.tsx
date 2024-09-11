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

export const ReceiptBasic = () => {
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
              Zasíláme vám fakturu za vaši webovou stránku
            </Heading>

            <Text className="text-center text-black text-[14px] leading-[20px] m-0 p-0">
              Zasíláme vám fakturu za vaši webovou stránku a shrnutí vaší objednávky. <br />
              Prosíme o zaplacení faktury za vaši webovou stránku. Faktura je k dispozici ke stažení
              na odkazu níže.
            </Text>

            <Section className="pt-8">
              <Row className="mb-2">
                <Column width="70%">
                  <Text className="text-black font-semibold text-[14px] leading-[20px] m-0 p-0">
                    Název položky
                  </Text>
                </Column>
                <Column width="30%" className="text-center">
                  <Text className="text-black font-semibold text-[14px] leading-[20px] m-0 p-0">
                    Cena
                  </Text>
                </Column>
              </Row>

              <Row>
                <Column width="70%">
                  <Text className="text-black text-[14px] leading-[20px] m-0 p-0">
                    Webová stránka -{' '}
                    <Link
                      href="https://visiosnap.cz/websites"
                      className="text-brand-primary font-semibold"
                    >
                      visiosnap.cz
                    </Link>
                  </Text>
                </Column>
                <Column width="30%" className="text-center">
                  <Text className="text-black text-[14px] leading-[20px] m-0 p-0">4999 Kč</Text>
                </Column>
              </Row>

              <Row>
                <Column width="70%">
                  <Text className="text-black text-[14px] leading-[20px] m-0 p-0">
                    Registrace domény
                  </Text>
                </Column>
                <Column width="30%" className="text-center">
                  <Text className="text-black text-[14px] leading-[20px] m-0 p-0">250 Kč</Text>
                </Column>
              </Row>
            </Section>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-brand-primary rounded-full text-white text-[12px] font-bold no-underline text-center px-5 py-3 mr-2"
                href="https://visiosnap.cz"
              >
                Zobrazit fakturu
              </Button>

              <Button
                className="bg-[#F2F2F2] rounded-full text-brand-primary text-[12px] font-bold no-underline text-center px-5 py-3"
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

export default ReceiptBasic
