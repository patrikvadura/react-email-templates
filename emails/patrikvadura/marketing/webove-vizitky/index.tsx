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
  heroImage = `${baseUrl}/static/patrikvadura/marketing/marketing_hero_01.webp`,
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
                  primary: '#242E34',
                  secondary: '#8E907F',
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
        <Body className="bg-white font-sans">
          <Container className="p-[10px] w-full sm:w-[600px]">
            <Img src={heroImage} className="mb-8" alt="Patrik Vaďura" />

            <Section>
              <Row>
                <Column align="left" className="px-8 py-4 w-12/12">
                  <Heading as="h2">
                    Tradičním papírovým vizitkám odzvonilo - známe lepší způsob
                  </Heading>

                  <Text className="text-brand-primary text-[14px] leading-[22px] opacity-70">
                    Naše webové vizitky jsou navrženy tak, aby vám pomohly udělat skvělý první dojem
                    a zanechat u klientů trvalý dojem. Nabízíme širokou škálu šablon pro různé
                    profese, od obchodních zástupců a realitních makléřů až po umělce a řemeslníky.
                  </Text>

                  <Button
                    href="https://patrikvadura.cz/webove-vizitky"
                    className="text-brand-primary underline py-2"
                  >
                    <Img
                      src={`${baseUrl}/static/patrikvadura/icon_arrow_circle_dark.webp`}
                      width={30}
                      className="inline align-middle mr-2"
                      alt="Patrik Vaďura"
                    />
                    Zjistěte více informací
                  </Button>
                </Column>
              </Row>
            </Section>

            <Section className="bg-brand-primary mt-6">
              <Row>
                <Column align="left" className="p-8 w-12/12">
                  <Heading as="h4" className="font-normal text-white">
                    Nabízím také
                  </Heading>
                  <Heading as="h3" className="text-white">
                    Šablonové webové stránky <span className="underline">již od 7 999 Kč</span>
                  </Heading>

                  <Text className="text-white text-[14px] leading-[22px] opacity-70">
                    Pokud vám pro obsažení všech potřebných informací o vás nestačí naše webová
                    vizitka, neklesejte na mysli. Můžete využít našich šablonových webových stránek,
                    které dokonale splní vaše požadavky.
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

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

            <Section>
              <Row>
                <Column className="flex flex-col justify-center items-center text-center w-12/12">
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

                  <Text className="text-brand-primary opacity-60 text-[10px] leading-[17px] mt-4 mb-0">
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
