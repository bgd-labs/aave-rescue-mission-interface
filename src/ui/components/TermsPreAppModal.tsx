import React, { useRef, useState } from 'react';

import { useStore } from '../../store';
import { Box } from '../primitives/Box';
import { Typography } from '../primitives/Typography';
import { BasicModal } from './BasicModal';
import { Button } from './Button';
import { CheckBox } from './CheckBox';

export function TermsPreAppModal() {
  const { isAppBlockedByTerms, setIsTermsAccept, setModalOpen } = useStore();
  const initialFocusRef = useRef(null);

  const [isCheckBoxClicked, setIsCheckBoxClicked] = useState(false);

  return (
    <BasicModal
      initialFocus={initialFocusRef}
      isOpen={isAppBlockedByTerms}
      setIsOpen={setIsTermsAccept}
      maxWidth={470}>
      <Box css={{ minHeight: 190 }}>
        <Typography variant="body" css={{ mb: 28 }}>
          By proceeding, you agree to our Terms & Conditions. We encourage you
          to read them carefully to ensure that you understand your rights and
          obligations.
        </Typography>

        <Typography
          as="div"
          variant="descriptor"
          onClick={() => setIsCheckBoxClicked(!isCheckBoxClicked)}
          css={{ display: 'inline-flex', flexWrap: 'wrap', cursor: 'pointer' }}>
          <CheckBox value={isCheckBoxClicked} />I have read and accept the{' '}
          <Box
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setModalOpen(true);
            }}
            css={{
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              ml: 3,
              textDecoration: 'underline',
              hover: { color: '$secondary' },
            }}>
            Terms & Conditions
          </Box>
          .
        </Typography>

        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 40,
          }}>
          <Button
            disabled={!isCheckBoxClicked}
            onClick={() => setIsTermsAccept(true)}>
            Proceed
          </Button>
        </Box>
      </Box>
    </BasicModal>
  );
}
