import * as React from 'react'
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Button,
  Img,
} from '@react-email/components'

interface EmailTemplateProps {
  name?: string
  corporate?: string
  email?: string
  phone?: string
  propertyAddress?: string
  propertyType?: string
  propertyRequirements?: string
  message?: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name = 'Jan Novák',
  corporate = 'Firma s.r.o.',
  phone = '123 456 789',
  email = 'novak@email.cz',
  propertyAddress = 'Ulice 123, Město',
  propertyType = 'Byt',
  propertyRequirements = 'Bankovní financování',
  message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum libero ac aliquet aliquam. Fusce gravida libero sit amet elit elementum scelerisque. Sed sed mi in dolor faucibus fringilla.',
}) => (
  <Html>
    <Head />
    <Body>
      <Container style={container}>
        <Section style={{ paddingBottom: 24, textAlign: 'center' }}>
          <Img
            alt="Patrik Vaďura"
            width="65"
            src="https://patrikvadura.s3.eu-north-1.amazonaws.com/emailing-clients/odhadyzlin/logo_default_RGB.png"
            style={{
              width: '180px',
              display: 'inline',
              outline: 'none',
              border: 'none',
              textDecoration: 'none',
              paddingLeft: '0.25rem',
              transform: 'translateY(2px)',
            }}
          />
        </Section>
        <Section style={{ paddingBottom: 24, textAlign: 'center' }}>
          <Heading style={heading}>Máte novou nezávaznou poptávku</Heading>

          <Heading style={subHeading}>Kontaktní informace</Heading>
          <Text style={text}>
            <b style={{ display: 'block', paddingBottom: 4 }}>
              {name} {corporate && `| ${corporate}`}
            </b>{' '}
            {email} {phone && `| ${phone}`}
          </Text>

          <Heading style={{ ...subHeading, paddingTop: '12px' }}>Informace o nemovitosti</Heading>
          {propertyAddress && <Text style={text}>Adresa nemovitosti: {propertyAddress}</Text>}
          {propertyType && <Text style={text}>Typ nemovitosti: {propertyType}</Text>}
          {propertyRequirements && <Text style={text}>Účel odhadu: {propertyRequirements}</Text>}

          <Heading style={{ ...subHeading, paddingTop: '12px' }}>Dodatečné informace</Heading>
          <Text style={text}>{message}</Text>
        </Section>

        <Section style={{ paddingTop: 12, textAlign: 'center' }}>
          <Button href={`mailto: ${email}`} style={button}>
            Odpovědět klientovi
          </Button>
        </Section>

        <Section style={{ textAlign: 'center' }}>
          <hr
            style={{
              width: '100%',
              border: 'none',
              borderTop: '1px solid #eaeaea',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'rgb(234,234,234)',
              marginTop: 26,
              marginBottom: 26,
              marginLeft: 0,
              marginRight: 0,
            }}
          />

          <Text style={text}>
            Powered by
            <Img
              alt="Patrik Vaďura"
              width="65"
              src="https://patrikvadura.s3.eu-north-1.amazonaws.com/emailing/logo_monochrom.png"
              style={{
                width: '70px',
                height: '13px',
                display: 'inline',
                outline: 'none',
                border: 'none',
                textDecoration: 'none',
                paddingLeft: '0.25rem',
                transform: 'translateY(2px)',
                opacity: 0.75,
              }}
            />
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default EmailTemplate

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  padding: '28px 40px',
}

const button = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  boxSizing: 'border-box',
  padding: '12px 20px',
  fontSize: '14px',
  fontWeight: 600,
  borderRadius: 32,
  textAlign: 'center',
  backgroundColor: '#F0481C',
  color: '#ffffff',
}

const heading = {
  fontSize: '20px',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: '#F0481C',
  lineHeight: '28px',
}

const subHeading = {
  fontSize: '14px',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: '#545454',
  lineHeight: '16px',
}

const text = {
  fontSize: '14px',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: '#545454',
  lineHeight: '18px',
}
