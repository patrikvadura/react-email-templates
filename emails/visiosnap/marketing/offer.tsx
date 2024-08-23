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
const userImage = `${baseUrl}/static/visiosnap/email_photo/email-photo_jakub_light.png`
const userName = 'Jakub Galia'
const userPosition = 'CEO & Founder'
const infoEmail = 'jakub@visiosnap.cz'

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
        <Body className="bg-[#F0F1F8] my-auto mx-auto w-full">
          <Container className="bg-[#F0F1F8] my-auto mx-auto font-sans px-4 sm:px-2 w-full">
            <Container className="bg-white rounded-xl my-[20px] sm:my-[40px] mx-auto px-[20px] sm:px-[40px] py-[40px] max-w-[465px]">
              <Section className="flex justify-center text-center mb-[32px]">
                <Link href="https://visiosnap.cz">
                  <Img
                    src={`https://profile-next-core.s3.eu-north-1.amazonaws.com/identity/logo_default.png`}
                    width="140"
                    alt="VisioSnap"
                  />
                </Link>
              </Section>

              <Heading className="text-black text-[20px] font-semibold text-center p-0 mb-[30px] mx-0">
                Dobrý den <b className="text-brand-primary">pane Nováku</b>,
              </Heading>

              <Text className="text-center text-black text-[14px] leading-[20px] mb-3 p-0">
                jmenuji se Jakub a rád bych vám nabídl pomoc se zvýšením vaší viditelnosti a
                získáním nových klientů. Zjistil jsem, že v současnosti nemáte vlastní webové
                stránky, které by vám mohly přinést nové akvizice. Tuto situaci lze rychle a za
                nízké náklady změnit. Můžu vám{' '}
                <span className="font-semibold">během 4 pracovních dnů</span> připravit online
                vizitku. Základní verze je dostupná{' '}
                <span className="font-semibold">již od 4 990 Kč</span>.
              </Text>

              <Section className="flex justify-center items-center text-center">
                <Img
                  src={`${baseUrl}/static/visiosnap/marketing/marketing_hero_04.png`}
                  className="w-[250px] md:w-[500px]"
                />
              </Section>

              <Heading className="text-brand-primary text-[16px] font-semibold text-center p-0 my-[26px] mx-0">
                Jak to funguje?
              </Heading>

              <Text className="text-center text-black text-[14px] leading-[20px] m-0 p-0">
                Pokud máte zájem, mohu vám bezplatně vytvořit ukázku. Stačí, když vyplníte dotazník,
                kde uvedete všechny požadované informace, které chcete na webu mít. Na základě
                těchto podkladů vám připravím ukázku vašeho webu zdarma. Poté se můžete rozhodnout,
                zda chcete pokračovat a web dokončit.
              </Text>

              <Heading className="text-brand-primary text-[16px] font-semibold text-center p-0 my-[26px] mx-0">
                Balíčky a cena
              </Heading>

              <Text className="text-center text-black text-[14px] leading-[20px] m-0 p-0">
                Služba je rozdělena do 3 balíčků. Pokud vám stačí jednoduchá webová vizika,
                vystačíte si s balíčkem START. Pokud jste náročnější uživatel a chcete věnovat i
                více času marketingu, doporučuji balíček PRO.
              </Text>

              <Section className="flex flex-col md:flex-row justify-center items-center text-center mt-[32px] mb-[32px]">
                <Button
                  className="bg-brand-primary rounded-full text-white text-[12px] font-bold no-underline text-center px-5 py-3"
                  href="https://visiosnap.cz/try"
                >
                  Vyzkoušet ZDARMA
                </Button>

                <Button
                  className="bg-[#F0F1F8] rounded-full text-brand-primary text-[12px] font-bold no-underline text-center px-5 py-3 mt-2 md:mt-0 md:ml-2"
                  href="mailto:jakub@visiosnap.cz"
                >
                  Nezávazná konzultace
                </Button>
              </Section>

              <Text className="text-center text-black text-[14px] leading-[20px] m-0 p-0">
                Platba je jednorázová. Po bezplatné ukázce máte možnost provést sérii úprav. <br />{' '}
                <br />
                Máte-li jakékoli otázky, můžeme si o nich promluvit na online schůzce, nebo se
                podívejte do sekce FAQ. Pokud máte zájem o bezplatnou ukázku, vyplňte prosím
                dotazník, a během několika dnů vám návrh přijde do emailu.
              </Text>

              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

              <Section className="flex justify-center items-center">
                <Row>
                  <Column align="left">
                    <Img className="rounded-full pr-2 md:pr-0" src={userImage} height="80" />
                  </Column>

                  <Column className="pl-3 -translate-y-2">
                    <Text className="text-brand-primary text-[13px] leading-[16px] mt-3 mb-0 sm:mb-1">
                      <span className="font-[600]">{userName}</span>
                    </Text>

                    <Text className="text-brand-primary text-[13px] leading-[17px] mt-0 mb-0">
                      <Link href={`mailto: ${infoEmail};`} className="text-[#666666]">
                        {infoEmail}
                      </Link>
                    </Text>
                  </Column>
                </Row>
              </Section>

              <Section className="flex flex-row items-center justify-center text-center w-full m-0 p-0">
                <Text className="text-center text-[#666666] text-[12px] leading-[20px]">
                  <Link href="https://visiosnap.cz" className="text-[#666666]">
                    visiosnap.cz
                  </Link>{' '}
                  |{' '}
                  <Link href="https://visiosnap.cz/help" className="text-[#666666]">
                    Dotazník
                  </Link>{' '}
                  |{' '}
                  <Link href="https://visiosnap.cz/#faq" className="text-[#666666]">
                    FAQ
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
