import { ReactNode } from 'react';

import { Box, Typography } from '..';
import { BasicModal } from './BasicModal';

interface TermsAndConditionsModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Text = ({
  children,
  withMargin = true,
}: {
  children: ReactNode;
  withMargin?: boolean;
}) => {
  return (
    <Typography
      variant="headline"
      css={{ mb: withMargin ? 12 : 0, lineHeight: '1.8', fontWeight: 400 }}>
      {children}
    </Typography>
  );
};

export function TermsAndConditionsModal({
  isOpen,
  setIsOpen,
}: TermsAndConditionsModalProps) {
  return (
    <BasicModal isOpen={isOpen} setIsOpen={setIsOpen} withCloseButton>
      <Typography variant="h1" css={{ textAlign: 'center', mb: 24 }}>
        Rescue mission App Terms and Conditions
      </Typography>
      <Text>
        Welcome to the Aave Rescue mission app, which is a part of the Aave
        Protocol managed by Aave DAO. In these terms and conditions, “we” or
        “us” refers to BGD Labs Technologies LLC, the company hosting the Aave
        Rescue mission app.
      </Text>
      <Text>
        Please read these terms and conditions carefully before using the Rescue
        mission app. By accessing or using the Rescue mission app, you agree to
        be bound by these terms and conditions.
      </Text>
      <Box as="ol" css={{ ml: 20 }}>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            The Rescue mission app is designed to allow users to “rescue” funds
            they sent to the incorrect addresses in the Aave ecosystem. You are
            responsible for your own decisions and actions when “rescue” funds.
          </Text>
        </Box>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            The Rescue mission app may contain links to third-party websites or
            services that are not owned or controlled by BGD Labs Technologies
            LLC. We do not assume any responsibility or liability for the
            content or privacy practices of these third-party sites.
          </Text>
        </Box>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            We are not responsible for the content or services of any
            third-party, including, without limitation, any network, or apps
            like MetaMask, and we make no representations regarding the content
            or accuracy of any third-party services or materials.
          </Text>
        </Box>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            BGD Labs Technologies LLC is not responsible for any losses or
            damages incurred as a result of your use of the Rescue mission app,
            including but not limited to any errors or omissions in any content,
            or any loss or damage of any kind arising from or in connection with
            your use of any third-party services or links.
          </Text>
        </Box>
      </Box>
      <Text>
        By using the Rescue mission app, you acknowledge and agree that you have
        read, understood, and agree to be bound by these terms and conditions.
      </Text>
    </BasicModal>
  );
}
