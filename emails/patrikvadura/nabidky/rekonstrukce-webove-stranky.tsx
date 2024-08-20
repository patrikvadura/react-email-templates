import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import * as React from 'react'
import { Fragment } from 'react'
import 'dotenv/config'

interface EmailProps {
  preview?: string
  heroImage?: string
  infoPhone?: string
  infoEmail?: string
  infoWebsite?: string
  logoImage?: string
}

const baseUrl = process.env.CDN_URL ? `${process.env.CDN_URL}` : ''

export const MarketingEmail = ({
  preview = 'Profesionální osobní webové vizitky',
  heroImage = `https://patrikvadura.s3.eu-north-1.amazonaws.com/emailing/nabidky/website-preview-mockup-elima.jpg`,
  logoImage = `${baseUrl}/static/patrikvadura/logo.png`,
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
            fontFamily="PP Telegraf"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${baseUrl}/static/patrikvadura/fonts/PPTelegraf-Regular.woff2`,
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />

          <Font
            fontFamily="PP Telegraf"
            fallbackFontFamily="Arial"
            webFont={{
              url: `${baseUrl}/static/patrikvadura/fonts/PPTelegraf-Bold.woff2`,
              format: 'woff2',
            }}
            fontWeight={600}
            fontStyle="normal"
          />
        </Head>
        <Fragment>
          <Preview>{preview}</Preview>
          <Body className="bg-white font-sans">
            <Container className="py-2 sm:py-4">
              <Section>
                <Row>
                  <Column align="center" className="py-4">
                    <Img src={logoImage} height="22" alt="Patrik Vaďura" />
                  </Column>
                </Row>
              </Section>

              <Section>
                <Row>
                  <Column align="center" className="px-4 sm:px-8 py-4 text-center">
                    <Heading
                      as="h3"
                      className="text-[16px] sm:text-[18px] text-brand-primary font-normal"
                    >
                      Nabízím vám renovaci webových stránek
                    </Heading>

                    <Heading
                      as="h1"
                      className="text-[35px] sm:text-[50px] font-bold text-brand-primary"
                    >
                      Nezávazná nabídka
                    </Heading>

                    <Text className="text-brand-primary text-[14px] leading-[22px] opacity-70">
                      Dobrý den paní Benedíková, <br />
                      obracím se na vás s nabídkou rekonstrukce vašich firemních webových stránek.
                      Pár dní se už na ně zaměřuji a přemítám nad jejich možnostmi a kvalitami.
                      Vidím tam velký prostor pro zlepšení a zároveň velký potenciál.
                    </Text>

                    <Button
                      href="https://patrikvadura.cz/webove-vizitky"
                      className="text-brand-primary underline py-2"
                    >
                      <Img
                        src={`${baseUrl}/static/patrikvadura/icon_arrow_circle_light.webp`}
                        width={30}
                        className="inline align-middle mr-2"
                        alt="Patrik Vaďura"
                      />
                      <span className="underline">Stáhnout kompletní nabídku</span>
                    </Button>
                  </Column>
                </Row>
              </Section>

              <Section>
                <Row>
                  <Column>
                    <Img src={heroImage} className="mb-4 sm:mb-8 w-full" alt="Patrik Vaďura" />
                  </Column>
                </Row>
              </Section>

              <Section>
                <Row>
                  <Column align="center" className="px-4 sm:px-8 py-4 text-center">
                    <Text className="text-brand-primary text-[14px] leading-[22px] opacity-70">
                      Webové stránky vnímám, jako ne úplně šťastný počin a myslím si že by si
                      opravdu zasloužili změnu, ať už po grafické stráce a modernizaci, tak také
                      optimalizace respozivity (kvality zobrazení na mobilních zařízeních). Co
                      přesně jsem na vašem webu vypozoroval a co by si dle mého názoru zasloužilo
                      zlepšení, a proč tomu tak je, jsem vypsal do přehledného souboru s nabídkou.
                    </Text>
                  </Column>
                </Row>
              </Section>

              <Section>
                <Row>
                  <Column align="center" className="px-4 sm:px-8 pt-8 text-center">
                    <Heading as="h2" className="font-bold text-brand-primary">
                      Proč renovovat webové stránky?
                    </Heading>
                  </Column>
                </Row>

                <Row>
                  <Column align="center" className="align-top text-center">
                    <Text className="text-brand-primary text-[14px] leading-[22px] opacity-70">
                      V digitálním světě, je webová stránka tváří vaší značky. Představuje základ
                      vaší online přítomnosti a je často prvním kontaktním místem pro potenciální
                      zákazníky. A jak víme, první dojem je nejdůležitější. Ale co když vaše webové
                      stránky již neodpovídají aktuálním trendům nebo potřebám vaší firmy?
                    </Text>
                  </Column>
                </Row>

                <Row>
                  <Column align="center" className="align-top text-center">
                    <Button
                      href="https://patrikvadura.cz/5-duvodu-proc-redesignovat-web/"
                      className="text-brand-primary underline py-2"
                    >
                      <Img
                        src={`${baseUrl}/static/patrikvadura/icon_arrow_circle_light.webp`}
                        width={30}
                        className="inline align-middle mr-2"
                        alt="Patrik Vaďura"
                      />
                      <span className="underline">Přečtěte si můj článek</span>
                    </Button>
                  </Column>
                </Row>
              </Section>

              <Section className="mt-6" style={{ background: 'rgb(255 255 255 / .05)' }}>
                <Row>
                  <Column align="center" className="px-8 py-4 text-center">
                    <Heading as="h2" className="font-bold text-brand-primary">
                      Budu rád když se spojíme nebo se potkáme.
                    </Heading>

                    <Text className="text-brand-primary text-[14px] leading-[22px] opacity-70">
                      Bez ohledu na váš výsledný názor k nabídce, budu rád když se spolu spojíme ať
                      už emailem nebo telefonicky a nabídku včetně dalších možností společně
                      projdeme. Pokud vám více vyhovuje osobní kontakt - můžeme se spolu potkat.
                    </Text>
                  </Column>
                </Row>
              </Section>

              <Section>
                <Row>
                  <Column align="center" className="px-4 sm:px-6 py-4 opacity-50">
                    <Img src={logoImage} height="14" alt="Patrik Vaďura" />

                    <Text className="text-brand-primary text-[13px] leading-[17px] mt-4 mb-0">
                      <Link href={`tel: ${infoPhone};`} className="text-brand-primary">
                        {infoPhone}
                      </Link>
                      <span className="px-1">|</span>
                      <Link href={`mailto: ${infoEmail};`} className="text-brand-primary">
                        {infoEmail}
                      </Link>
                      <span className="px-1 hidden sm:inline">|</span>
                      <Link
                        href={`https://${infoWebsite}`}
                        className="text-brand-primary font-bold block sm:inline"
                      >
                        {infoWebsite}
                      </Link>
                    </Text>

                    <Text className="text-brand-primary text-[10px] leading-[17px] mt-4 mb-0">
                      © 2024 Patrik Vaďura. Vytvořeno s radostí a péčí.
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Container>
          </Body>
        </Fragment>
      </Tailwind>
    </Html>
  )
}

export default MarketingEmail
