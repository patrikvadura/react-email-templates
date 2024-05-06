import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";

export const VercelInviteUserEmail = ({
                                        username,
                                        userImage,
                                        invitedByUsername,
                                        invitedByEmail,
                                        teamName,
                                        teamImage,
                                        inviteLink,
                                        inviteFromIp,
                                        inviteFromLocation,
                                      }: VercelInviteUserEmailProps) => {
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans px-2">
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                Máte novou zprávu z webu od <b>{username}</b>
              </Heading>
              <Text className="text-center text-black text-[14px] leading-[22px]">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </Text>

              <Section className="text-center mt-[32px] mb-[32px]">
                <Button
                    className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                    href={inviteLink}
                >
                  Poslat odpověď
                </Button>
              </Section>

              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

              <Text className="text-center text-[#666666] text-[12px] leading-[20px]">
                Powered by

                <Img
                    src={`${baseUrl}/static/patrikvadura/logo.png`}
                    width="65"
                    alt="Vercel"
                    className="inline pl-1 translate-y-0.25"
                />
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
  );
};

VercelInviteUserEmail.PreviewProps = {
  username: "alanturing",
  userImage: `${baseUrl}/static/patrikvadura/logo.png`,
  invitedByUsername: "Alan",
  invitedByEmail: "alan.turing@example.com",
  teamName: "Enigma",
  teamImage: `${baseUrl}/static/vercel-team.png`,
  inviteLink: "https://vercel.com/teams/invite/foo",
  inviteFromIp: "204.13.186.218",
  inviteFromLocation: "São Paulo, Brazil",
} as VercelInviteUserEmailProps;

export default VercelInviteUserEmail;
