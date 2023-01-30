import React from 'react';

import { useStore } from '../../store';
import { Box, Typography } from '../../ui';
import { ActionModal } from './ActionModal';

interface ClaimTxModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function ClaimTxModal({ isOpen, setIsOpen }: ClaimTxModalProps) {
  const claim = useStore((state) => state.claim);

  return (
    <></>
    // <ActionModal
    //   type="claim"
    //   payload={{ index, address, distributionId, formattedAmount }}
    //   errorMessage="Error during the claim asset, check console for more details"
    //   callbackFunction={async () =>
    //     await claim(
    //       index,
    //       address,
    //       amount,
    //       formattedAmount,
    //       proofs,
    //       distributionId,
    //     )
    //   }
    //   isOpen={isOpen}
    //   setIsOpen={setIsOpen}
    //   actionButtonTitle="Confirm"
    //   topBlock={
    //     <Box
    //       css={{
    //         textAlign: 'center',
    //         mt: 35,
    //         mb: 30,
    //         position: 'relative',
    //         zIndex: 2,
    //       }}>
    //       <Typography variant="h2">Claim {assetName}</Typography>
    //     </Box>
    //   }
    //   withCancelButton>
    //   <Box
    //     css={{
    //       textAlign: 'center',
    //       mb: 60,
    //       position: 'relative',
    //       zIndex: 2,
    //     }}>
    //     <Typography>{formattedAmount} will be claimed</Typography>
    //   </Box>
    // </ActionModal>
  );
}
