import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
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
import 'dotenv/config'

interface EmailProps {
  heroImage?: string
  infoPhone?: string
  infoEmail?: string
  infoWebsite?: string
  logoImage?: string
}

const baseUrl = process.env.CDN_URL ? `${process.env.CDN_URL}` : ''

export const MarketingEmail = ({
  heroImage = `${baseUrl}/static/patrikvadura/marketing/marketing_hero_03.webp`,
  logoImage = `${baseUrl}/static/patrikvadura/logo_negative.png`,
  infoPhone = '725 007 655',
  infoEmail = 'info@patrikvadura.cz',
  infoWebsite = 'patrikvadura.cz',
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
        <Head>
          <Font
            fontFamily="PP Mori"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${baseUrl}/static/patrikvadura/fonts/PPMori-Book.woff2`,
              format: 'woff2',
            }}
            fontWeight={300}
            fontStyle="normal"
          />

          <Font
            fontFamily="PP Mori"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${baseUrl}/static/patrikvadura/fonts/PPMori-Regular.woff2`,
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />

          <Font
            fontFamily="PP Mori"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${baseUrl}/static/patrikvadura/fonts/PPMori-SemiBold.woff2`,
              format: 'woff2',
            }}
            fontWeight={600}
            fontStyle="normal"
          />

          <Font
            fontFamily="PP Mori"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${baseUrl}/static/patrikvadura/fonts/PPMori-ExtraBold.woff2`,
              format: 'woff2',
            }}
            fontWeight={800}
            fontStyle="normal"
          />
        </Head>
        <Body className="bg-brand-primary font-sans">
          <Container className="p-[10px] w-full sm:w-[600px]">
            <Section className="py-4 flex flex-col items-center text-center">
              <Img src={logoImage} height="22" alt="Patrik Vaďura" />
            </Section>

            <Section>
              <Row>
                <Column align="center" className="px-8 py-4 text-center w-12/12">
                  <Heading as="h3" className="text-white font-normal">
                    Tradičním papírovým vizitkám odzvonilo
                  </Heading>

                  <Heading as="h1" className="text-[50px] text-white">
                    Profesionální osobní <span className="underline">webové vizitky</span>
                  </Heading>

                  <Text className="text-white text-[14px] leading-[22px] opacity-70">
                    Potřebujete moderní a profesionální způsob, jak prezentovat sebe a svůj byznys? Pak jsou pro vás ideální webové vizitky!
                  </Text>

                  <Button
                      href="https://patrikvadura.cz/webove-vizitky"
                      className="text-white underline py-2"
                  >
                    <Img
                        src={`${baseUrl}/static/patrikvadura/icon_arrow_circle_light.webp`}
                        width={30}
                        className="inline align-middle mr-2"
                        alt="Patrik Vaďura"
                    />
                    Zjistěte více informací
                  </Button>
                </Column>
              </Row>
            </Section>

            <Img src={heroImage} width={600} className="mb-8" alt="Patrik Vaďura" />

            <Section>
              <Row>
                <Column align="center" className="px-8 py-4 text-center w-12/12">
                  <Text className="text-white text-[14px] leading-[22px] opacity-70">
                    Naše webové vizitky jsou navrženy tak, aby vám pomohly udělat skvělý první dojem
                    a zanechat u klientů trvalý dojem. Nabízíme širokou škálu šablon pro různé
                    profese, od obchodních zástupců a realitních makléřů až po umělce a řemeslníky.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section className="mt-6">
              <Row>
                <Column align="center" className="px-8 text-center w-12/12">
                  <Heading as="h3" className="text-[36px] text-white">
                    Vše připraveno <span className="underline">již v řádu dní</span>
                  </Heading>
                </Column>
              </Row>
            </Section>

            <Section>
              <Row>
                <Column align="center" className="align-top text-center w-4/12 sm:w-12/12">
                  <Heading as="h3" className="text-[24px] leading-[20px] font-normal text-white">
                    1.
                  </Heading>

                  <Text className="text-white text-[16px] leading-[22px] opacity-70">
                    Nachystejte si texty
                  </Text>
                </Column>

                <Column align="center" className="align-top text-center w-4/12 sm:w-12/12">
                  <Heading as="h3" className="text-[24px] leading-[20px] font-normal text-white">
                    2.
                  </Heading>

                  <Text className="text-white text-[16px] leading-[22px] opacity-70">
                    Pořiďte fotografii
                  </Text>
                </Column>

                <Column align="center" className="align-top text-center w-4/12 sm:w-12/12">
                  <Heading as="h3" className="text-[24px] leading-[20px] font-normal text-white">
                    3.
                  </Heading>

                  <Text className="text-white text-[16px] leading-[22px] opacity-70">
                     Vyberte si barvu
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section>
              <Row>
                <Column align="center" className="text-center w-4/12 sm:w-6/12">
                  <Img
                      src={`${baseUrl}/static/patrikvadura/marketing/marketing_hero_05.webp`}
                      width={600}
                      alt="Patrik Vaďura"
                  />
                </Column>
              </Row>
            </Section>

            <Section>
              <Row>
                <Column align="center" className="px-8 pt-8 text-center w-6/12 sm:w-12/12">
                  <Heading as="h2" className="text-white">
                    Proč si vybrat webové vizitky?
                  </Heading>
                </Column>
              </Row>

              <Row>
                <Column align="center" className="align-top text-center w-6/12 sm:w-12/12">
                  <Heading as="h4" className="text-white">
                    Moderní a profesionální
                  </Heading>

                  <Text className="text-white text-[14px] leading-[22px] opacity-70">
                    Vyberte si z široké škály krásných a moderních šablon.
                  </Text>

                  <Heading as="h4" className="text-white">
                    Snadno se sdílí
                  </Heading>

                  <Text className="text-white text-[14px] leading-[22px] opacity-70">
                    Svou webovou vizitku můžete sdílet e-mailem, SMS zprávou nebo QR kódem.
                  </Text>
                </Column>

                <Column align="center" className="align-top text-center w-6/12 sm:w-12/12">
                  <Heading as="h4" className="text-white">
                    Dostupné 24/7
                  </Heading>

                  <Text className="text-white text-[14px] leading-[22px] opacity-70">
                    Vaše webová vizitka je dostupná online 24 hodin denně, 7 dní v týdnu.
                  </Text>

                  <Heading as="h4" className="text-white">
                    Bezpečné a spolehlivé
                  </Heading>

                  <Text className="text-white text-[14px] leading-[22px] opacity-70">
                    Naše webové vizitky jsou navrženy tak, aby byly bezpečné a spolehlivé.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section className="mt-6" style={{ background: 'rgb(255 255 255 / .05)', }}>
              <Row>
                <Column align="center" className="px-8 py-4 text-center w-12/12">
                  <Heading as="h2" className="text-white">
                    Vizitka vám nestačí? Zkuste šablonové webové stránky.
                  </Heading>

                  <Text className="text-white text-[14px] leading-[22px] opacity-70">
                    Pokud vám pro dosažení vašich cílů a nároků nestačí naše webová vizitka, zkuste využít našich levných šablonových webových stránek.
                  </Text>

                  <Button
                    href="https://patrikvadura.cz/sablonove-webove-stranky"
                    className="text-white underline py-2"
                  >
                    <Img
                      src={`${baseUrl}/static/patrikvadura/icon_arrow_circle_light.webp`}
                      width={30}
                      className="inline align-middle mr-2"
                      alt="Patrik Vaďura"
                    />
                    Zjistěte více informací
                  </Button>
                </Column>
              </Row>
            </Section>

            <Section>
              <Row>
                <Column className="mt-8 flex flex-col justify-center items-center text-center mb-8 w-12/12 opacity-50">
                  <Img src={logoImage} height="14" alt="Patrik Vaďura" />

                  <Text className="text-white text-[13px] leading-[17px] mt-4 mb-0">
                    <Link href={`tel: ${infoPhone};`} className="text-white">
                      {infoPhone}
                    </Link>
                    <span className="px-1">|</span>
                    <Link href={`mailto: ${infoEmail};`} className="text-white">
                      {infoEmail}
                    </Link>
                    <span className="px-1 hidden sm:inline">|</span>
                    <Link
                      href={`https://${infoWebsite}`}
                      className="text-white font-bold block sm:inline"
                    >
                      {infoWebsite}
                    </Link>
                  </Text>

                  <Text className="text-white text-[10px] leading-[17px] mt-4 mb-0">
                    © 2024 Patrik Vaďura. Vytvořeno s radostí a péčí.
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default MarketingEmail
