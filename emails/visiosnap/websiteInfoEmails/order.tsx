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

export const Order = () => {
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
              Děkujeme za dokončení objednávky webu VisioSnap
            </Heading>

            <Text className="text-center text-black text-[14px] leading-[20px] m-0 p-0">
              Vaši objednávku jsme úspěšně přijali a brzy se vám ozveme s dalšími informacemi.
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
              </ul>
            </Section>

            <Heading className="text-brand-primary text-[16px] font-semibold text-center p-0 mb-[30px] mx-0">
              Jak postupovat dál?
            </Heading>

            <Text className="text-center text-black text-[14px] leading-[20px] m-0 p-0">
              Abychom mohli váš web dokončit a publikovat je potřeba několik informací. V první řadě
              vás prosíme o nahlédnutí na váš web (v odkaze níže). Pokud je z vaší strany vše v
              pořádku dejte nám to najevo uhrazením faktury, která vám přijde v následujícíh
              hodinách. Další práce můžou začít až po jejím uhrazení. Dále vás prosíme o dokončení
              následujích kroků které se vás týkají.
            </Text>

            <Heading className="text-brand-primary text-[14px] font-semibold text-center p-0 mt-8 mb-[24px] mx-0">
              Kontaktní a fakturační údaje
            </Heading>

            <Text className="text-center text-black text-[14px] leading-[20px] m-0 p-0">
              Pokud jste tyto údaje nevyplnili při objednávce, prosíme o jejich doplnění zde jako
              odpoveď na tento email. Poslouží nám pro přípravu vaší faktury nebo pro zakoupení
              domény.
            </Text>

            <Heading className="text-brand-primary text-[14px] font-semibold text-center p-0 mt-8 mb-[24px] mx-0">
              Nastavení DNS záznamů
            </Heading>

            <Text className="text-center text-black text-[14px] leading-[20px] m-0 p-0">
              Připravili jsme pro vás návod jak nastavit DNS záznamy pro vaši doménu. Návod
              naleznete v naší{' '}
              <Link
                href="https://docs.visiosnap.cz/docs/domain/dns"
                className="text-brand-primary font-bold"
              >
                dokumentaci
              </Link>
              .
            </Text>

            <Section className="pt-8">
              <Row>
                <Column width="40%">
                  <Text className="text-black font-bold text-[14px] leading-[20px] m-0 p-0">
                    Doména
                  </Text>
                </Column>
                <Column width="15%">
                  <Text className="text-black font-bold text-[14px] leading-[20px] m-0 p-0">
                    Typ
                  </Text>
                </Column>
                <Column width="40%">
                  <Text className="text-black font-bold text-[14px] leading-[20px] m-0 p-0">
                    Hodnota
                  </Text>
                </Column>
                <Column width="15%">
                  <Text className="text-black font-bold text-[14px] leading-[20px] m-0 p-0">
                    TTL
                  </Text>
                </Column>
              </Row>

              <Row>
                <Column width="40%">
                  <Text className="text-black text-[14px] leading-[20px] m-0 p-0">
                    vasedomena.cz
                  </Text>
                </Column>
                <Column width="15%">
                  <Text className="text-black text-[14px] leading-[20px] m-0 p-0">A</Text>
                </Column>
                <Column width="40%">
                  <Text className="text-black text-[14px] leading-[20px] m-0 p-0">76.76.21.21</Text>
                </Column>
                <Column width="15%">
                  <Text className="text-black text-[14px] leading-[20px] m-0 p-0">600</Text>
                </Column>
              </Row>

              <Row>
                <Column width="40%">
                  <Text className="text-black text-[14px] leading-[20px] m-0 p-0">
                    www.vasedomena.cz
                  </Text>
                </Column>
                <Column width="15%">
                  <Text className="text-black text-[14px] leading-[20px] m-0 p-0">CNAME</Text>
                </Column>
                <Column width="40%">
                  <Text className="text-black text-[14px] leading-[20px] m-0 p-0">
                    cname.vercel-dns.com
                  </Text>
                </Column>
                <Column width="15%">
                  <Text className="text-black text-[14px] leading-[20px] m-0 p-0">600</Text>
                </Column>
              </Row>
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
              Upozorňujeme, že termín dokončení webu je platný až od uhrazení faktury. Dokud faktura
              není uhrazena nemůžeme spustit práce na publikaci webu. Tenhle email byl vygenerován
              automaticky. Pokud máte nějaké dotazy ohledně vaší objednávky, napište nám na email{' '}
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

export default Order
