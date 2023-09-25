import React, { ReactNode, useRef } from 'react';

import {
  appConfig,
  avalancheChainId,
  mainnetChainId,
  OPMainnetChainId,
  polygonChainId,
} from '../../utils/appConfig';
import { Box, Link, Typography } from '..';
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
  const initialFocusRef = useRef(null);

  return (
    <BasicModal
      initialFocus={initialFocusRef}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      withCloseButton>
      <Typography
        variant="h1"
        ref={initialFocusRef}
        css={{ textAlign: 'center', mb: 24 }}>
        Rescue Mission interface Terms and Conditions
      </Typography>
      <Typography variant="h2" css={{ mb: 20 }}>
        1. Purpose of the Agreement
      </Typography>
      <Text>Welcome to the Rescue Mission interface!</Text>
      <Text>Effective Date: 20 September 2023</Text>
      <Text>
        The Rescue Mission interface is brought to you by BGD Labs Technologies
        LLC (“BGD Labs Technologies”, “we,” “us,” or “our”). Our interface
        provides users with an interface to interact with the rescue mission
        smart contracts on the Ethereum blockchain. By accessing or using our
        interface, you agree to comply with and be bound by the following Terms
        and Conditions (the "Agreement"). Please read this Agreement carefully
        before using our interface.
      </Text>
      <Text>
        The Agreement regulates the use of the interface to interact with the
        rescue mission smart contracts on the Ethereum blockchain.
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        2. Acceptance of the Agreement
      </Typography>
      <Text>
        By accessing or using the Rescue Mission interface, you acknowledge that
        you have read and agree to this Agreement, and that you have the legal
        capacity to enter into a binding agreement with BGD Labs Technologies
        LLC. If you do not meet the eligibility requirements to enter into a
        binding agreement, you must not access or use our interface.
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        3. Who We Are
      </Typography>
      <Text>
        BGD Labs Technologies is a software development venture in the
        blockchain field, specialised in DeFi and design of other types of
        decentralised protocols.
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        4. Our Professional Engagement with the Aave DAO
      </Typography>
      <Text>
        Our engagement with the DAO consists of building software for smart
        contracts to be deployed on the Ethereum blockchain, which are subject
        to the decision-making process of the DAO. This means that the DAO has
        the final decision to activate or not activate the smart contract.
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        5. Rescue Mission Smart Contracts
      </Typography>
      <Text>
        The Rescue Mission smart contracts are software deployed on the Ethereum
        blockchain designed to retrieve tokens that were mistakenly sent to the
        Aave Protocol smart contracts.
      </Text>
      <Text>The Rescue Mission smart contracts:</Text>
      <Box as="ul" css={{ ml: 20, li: { mb: 12 } }}>
        <li>
          Ethereum -{' '}
          <Link
            css={{
              textDecoration: 'underline',
              hover: { color: '$secondary' },
            }}
            href={`https://etherscan.io/address/${appConfig.contractAddresses[mainnetChainId]}`}
            inNewWindow>
            https://etherscan.io/address/
            {appConfig.contractAddresses[mainnetChainId]}
          </Link>
        </li>
        <li>
          Polygon -{' '}
          <Link
            css={{
              textDecoration: 'underline',
              hover: { color: '$secondary' },
            }}
            href={`https://polygonscan.com/address/${appConfig.contractAddresses[polygonChainId]}`}
            inNewWindow>
            https://polygonscan.com/address/
            {appConfig.contractAddresses[polygonChainId]}
          </Link>
        </li>
        <li>
          Avalanche -{' '}
          <Link
            css={{
              textDecoration: 'underline',
              hover: { color: '$secondary' },
            }}
            href={`https://snowtrace.io/address/${appConfig.contractAddresses[avalancheChainId]}`}
            inNewWindow>
            https://snowtrace.io/address/
            {appConfig.contractAddresses[avalancheChainId]}
          </Link>
        </li>
        <li>
          Optimism -{' '}
          <Link
            css={{
              textDecoration: 'underline',
              hover: { color: '$secondary' },
            }}
            href={`https://optimistic.etherscan.io/address/${appConfig.contractAddresses[OPMainnetChainId]}`}
            inNewWindow>
            https://optimistic.etherscan.io/address/
            {appConfig.contractAddresses[OPMainnetChainId]}
          </Link>
        </li>
      </Box>
      <Text>
        AAVE holder community has to approve the activation of the smart
        contracts:
      </Text>
      <Box as="ul" css={{ ml: 20 }}>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            Rescue Mission Phase 1 Short Executor:{' '}
            <Link
              inNewWindow
              href="https://app.aave.com/governance/proposal/165/"
              css={{ textDecoration: 'underline', hover: { opacity: 0.7 } }}>
              https://app.aave.com/governance/proposal/165/
            </Link>
          </Text>
        </Box>

        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            Rescue Mission Phase 1 Long Executor:{' '}
            <Link
              inNewWindow
              href="https://app.aave.com/governance/proposal/166/"
              css={{ textDecoration: 'underline', hover: { opacity: 0.7 } }}>
              https://app.aave.com/governance/proposal/166/
            </Link>
          </Text>
        </Box>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            Rescue Mission Phase 2, 3 Short Executor:{' '}
            <Link
              inNewWindow
              href="https://app.aave.com/governance/proposal/324/"
              css={{ textDecoration: 'underline', hover: { opacity: 0.7 } }}>
              https://app.aave.com/governance/proposal/324/
            </Link>
          </Text>
        </Box>
      </Box>
      <Typography variant="h2" css={{ mb: 20 }}>
        6. The Aave Ecosystem
      </Typography>
      <Text>
        The Aave ecosystem is a software system of smart contracts fully
        controlled by AAVE token holders. AAVE is a governance token that
        enables holders to participate in the decision-making process for the
        Aave protocol. The Aave protocol is a decentralized liquidity protocol
        that enables users to supply and borrow on-chain digital tokens.
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        7. Description of our interface
      </Typography>
      <Text>
        Our interface is a standalone utility that provides users with a
        convenient and user-friendly interface to interact with the Rescue
        Mission smart contracts deployed on the Ethereum blockchain. It is
        important to note that the interface is not directly related to the
        Rescue Mission smart contracts, it simply serves as a layer to help
        users to visualize information and build the blockchain transactions
        that later on they submit to the Ethereum node of their choice.
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        8. User Acknowledgement and Acceptance
      </Typography>
      <Text>
        By accessing or using our interface, you acknowledge that you understand
        the following:
      </Text>
      <Box as="ul" css={{ ml: 20 }}>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            You have a comprehensive understanding of blockchain technology and
            how it works, including the mechanics of transactions, gas fees,
            smart contracts, cryptographic tokens, and signatures. Additionally,
            you are representing that you possess the necessary financial and
            technical sophistication to appreciate the risks associated with
            using cryptographic and blockchain-based systems, and that you have
            a practical understanding of the complexities and usage of digital
            assets.
          </Text>
        </Box>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            You have a comprehensive understanding of the functionality and
            mechanics of the underlying Rescue Mission smart contracts, which
            are owned by the Aave DAO.
          </Text>
        </Box>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            You understand that the user interface interacting with smart
            contracts is software that is completely independent of the smart
            contracts themselves.
          </Text>
        </Box>
      </Box>
      <Typography variant="h2" css={{ mb: 20 }}>
        9. Modification of the Agreement
      </Typography>
      <Text>
        We reserve the right to modify these Terms and Conditions at any time
        and for any reason at our sole discretion. Once any part of the
        Agreement is updated and in effect, you will be bound by the Terms if
        you continue to use the interface, including by accessing the Rescue
        Mission interface. It is your responsibility to review these Terms and
        Conditions periodically to ensure that you are aware of any
        modifications and understand the terms and conditions that apply to you
        when you access or use the Rescue Mission interface.
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        10. Non-Profit Declaration
      </Typography>
      <Text>
        BGD Labs Technologies hereby declares that it does not benefit in any
        way, financially or otherwise, from the Rescue Mission smart contracts
        or this interface used to interact with them. Our engagement with the
        DAO is solely focused on providing software development services for the
        Rescue Mission smart contracts on the Ethereum blockchain which are
        completely independent from this tool.
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        11. No Responsibility for User Assets and Tax Obligations
      </Typography>
      <Text>
        BGD Labs Technologies has no relation to the assets recovered by the
        user through the Rescue Mission smart contracts or this interface, and
        assumes no responsibility for any tax obligations that may arise from
        their recovery or use.
      </Text>
      <Text>
        The user assumes full responsibility for complying with any and all tax
        obligations associated with their use of the Rescue Mission interface,
        including but not limited to taxes, duties, and assessments claimed or
        imposed by any governmental authority. This responsibility includes
        taxes payable as a result of interacting with smart contracts and
        recovering the assets.
      </Text>
      <Text>
        Please note that blockchain-based transactions are a relatively new
        development, and as such, their tax treatment is uncertain.
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        12. Disclaimer of Financial Services
      </Typography>
      <Text>
        The Rescue Mission interface is provided solely for the purpose of
        interacting with the Rescue Mission smart contracts deployed on the
        Ethereum blockchain. The interface is not intended to provide, and
        should not be considered as, financial or investment advice or services.
        BGD Labs Technologies is not a financial institution and does not
        provide any financial or investment services through the interface. The
        interface with the Rescue Mission smart contracts is not intended to be
        used for any financial or investment purposes.
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        13. Non-Responsibility of Third-Party Services
      </Typography>
      <Text>
        BGD Labs Technologies is not responsible for any third-party services
        used by users in connection with our interface, including but not
        limited to wallets, nodes, or other technologies used to interact with
        the Ethereum blockchain. We make no representations or warranties
        concerning the security, functionality, or availability of any
        third-party services, and users assume all risks associated with the use
        of such services. BGD Labs Technologies is not responsible for any
        losses, damages, or liabilities arising from the use of third-party
        services in connection with our interface.
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        14. User Responsibilities
      </Typography>
      <Text>
        To access and use the Rescue Mission interface, you must comply with
        this Agreement, applicable third-party policies, and all applicable
        laws, rules, and regulations. The following conduct is strictly
        prohibited:
      </Text>
      <Box as="ul" css={{ ml: 20 }}>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            Using the Rescue Mission interface to engage in or facilitate
            illegal activities, including but not limited to money laundering,
            terrorism financing, tax evasion, or the buying or selling illegal
            drugs, contraband, counterfeit goods, or illegal weapons;
          </Text>
        </Box>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            Using the Rescue Mission interface for unauthorized commercial
            purposes;
          </Text>
        </Box>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            Uploading or transmitting viruses, worms, Trojan horses, time bombs,
            cancel bots, spiders, malware or any other type of malicious code
            that will or may be used in any way that will affect the
            functionality or operation of the Rescue Mission interface;
          </Text>
        </Box>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            Attempting to or actually copying or making unauthorized use of all
            or any portion of the Rescue Mission interface, including by
            attempting to reverse compile, reformatting or framing, disassemble,
            reverse engineer any part of the Rescue Mission interface;
          </Text>
        </Box>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            Harvesting or collecting information from the Rescue Mission
            interface for any unauthorized purpose;
          </Text>
        </Box>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            Using the Rescue Mission interface under false or fraudulent
            pretenses;
          </Text>
        </Box>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            Interfering with other users’ access to or use of the Rescue Mission
            interface;
          </Text>
        </Box>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            Interfering with or circumventing the security features of the
            Rescue Mission interface or any third party’s systems, networks, or
            resources used in the provision of Rescue Mission interface;
          </Text>
        </Box>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            Engaging in any attack, hack or denial-of-service attempt or
            interference in relation of the Rescue Mission interface; or
          </Text>
        </Box>
        <Box as="li" css={{ mb: 12 }}>
          <Text withMargin={false}>
            Engaging in any anticompetitive behavior or other misconduct.
          </Text>
        </Box>
      </Box>
      <Typography variant="h2" css={{ mb: 20 }}>
        15. Intellectual Property Rights
      </Typography>
      <Text>
        The Intellectual property rights clause can be accessed here:{' '}
        <Link
          inNewWindow
          href="https://github.com/bgd-labs/aave-rescue-mission-interface/blob/main/LICENSE"
          css={{ textDecoration: 'underline', hover: { opacity: 0.7 } }}>
          https://github.com/bgd-labs/aave-rescue-mission-interface/blob/main/LICENSE
        </Link>
        .
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        16. No Investment Advice
      </Typography>
      <Text>
        This application and any information provided through it are not
        intended to be and do not constitute investment advice, financial
        advice, trading advice, or any other advice. BGD Labs Technologies does
        not provide any investment advice or recommendations regarding any
        digital assets or cryptocurrencies. The information provided is solely
        for informational purposes and is not to be relied upon for any purpose.
        You should consult with an investment professional before making any
        investment decisions.
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        17. NO WARRANTIES
      </Typography>
      <Text>
        THE RESCUE MISSION INTERFACE BY BGD LABS TECHNOLOGIES IS PROVIDED "AS
        IS" AND "AS AVAILABLE," WITHOUT ANY REPRESENTATIONS OR WARRANTIES OF ANY
        KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. WE SPECIFICALLY DISCLAIM
        ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
        PURPOSE. YOU ACKNOWLEDGE AND AGREE THAT YOUR USE OF OUR PRODUCTS IS AT
        YOUR OWN RISK. WE DO NOT GUARANTEE THAT ACCESS TO ANY OF OUR PRODUCTS
        WILL BE CONTINUOUS, UNINTERRUPTED, TIMELY, OR SECURE; THAT THE
        INFORMATION CONTAINED IN ANY OF OUR PRODUCTS WILL BE ACCURATE, RELIABLE,
        COMPLETE, OR CURRENT; OR THAT ANY OF OUR PRODUCTS WILL BE FREE FROM
        ERRORS, DEFECTS, VIRUSES, OR OTHER HARMFUL ELEMENTS. ANY ADVICE,
        INFORMATION, OR STATEMENT THAT WE PROVIDE SHOULD NOT BE CONSIDERED AS
        CREATING ANY WARRANTY CONCERNING OUR PRODUCTS. WE DO NOT ENDORSE,
        GUARANTEE, OR ASSUME ANY RESPONSIBILITY FOR ANY ADVERTISEMENTS, OFFERS,
        OR STATEMENTS MADE BY THIRD PARTIES CONCERNING ANY OF OUR PRODUCTS.
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        18. Indemnification
      </Typography>
      <Text>
        You agree to hold harmless, release, defend, and indemnify us and our
        officers, directors, employees, contractors, agents, and affiliates from
        and against all claims, damages, obligations, losses, liabilities,
        costs, and expenses arising from: (a) your access and use of of Rescue
        Mission interface; (b) your violation of any term or condition of this
        Agreement, the right of any third party, or any other applicable law,
        rule, or regulation; (c) any other party's access and use of Rescue
        Mission interface with your assistance or using any device or account
        that you own or control; (d) any dispute between you and any other user
        of Rescue Mission interface or any of your own customers or users; (e)
        your breach or alleged breach of the Agreement (including, without
        limitation, these Terms); (f) your violation of the rights of any third
        party, including any intellectual property right, publicity,
        confidentiality, property, or privacy right; (g) any misrepresentation
        made by you.
      </Text>
      <Text>
        We reserve the right to assume, at your expense, the exclusive defense
        and control of any matter subject to indemnification by you. You agree
        to cooperate with our defense of any claim. You will not in any event
        settle any claim without our prior written consent.
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        19. Contact
      </Typography>
      <Text>
        If you have any questions or concerns about this Agreement or any of our
        Products, please contact us at{' '}
        <Link
          href="mailto:hi@bgdlabs.com"
          css={{ textDecoration: 'underline', hover: { opacity: 0.7 } }}>
          hi@bgdlabs.com
        </Link>
        .
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        20. Arbitration Agreement and Waiver of Rights, Including Class Actions
      </Typography>
      <Typography
        variant="headline"
        css={{ mb: 12, textDecoration: 'underline' }}>
        Agreement to Attempt to Resolve Disputes Through Good Faith Negotiations
      </Typography>
      <Text>
        Prior to commencing any legal proceeding against us of any kind,
        including an arbitration as set forth below, you and we agree that we
        will attempt to resolve any Dispute arising out of or relating to the
        agreement or the Services (each, a “Dispute” and, collectively,
        “Disputes”) by engaging in good faith negotiations. The aggrieved party
        must provide a written notice to the other party specifying the nature
        and details of the Dispute. The party receiving such notice shall have
        twenty (20) days to respond to the notice. Within sixty (60) days after
        the aggrieved party sent the initial notice, the parties shall meet and
        confer in good faith by videoconference, or by telephone, to try to
        resolve the Dispute. If the parties are unable to resolve the Dispute
        within ninety (90) days after the aggrieved party sent the initial
        notice, the parties may agree to mediate their Dispute, or either party
        may submit the Dispute to arbitration as set forth below.
      </Text>
      <Typography
        variant="headline"
        css={{ mb: 12, textDecoration: 'underline' }}>
        Agreement to Arbitrate
      </Typography>
      <Text>
        You and we agree that any Dispute that cannot be resolved through the
        procedures set forth above will be resolved through binding arbitration
        in accordance with the International Arbitration Rules of the
        International Centre for Dispute Resolution. The place of arbitration
        shall be Dubai, United Arab Emirates, and the language of the
        arbitration shall be English. The arbitrator(s) must have experience
        adjudicating matters involving Internet technology, software
        applications, financial transactions and, ideally, blockchain
        technology. The arbitrator’s award of damages must be consistent with
        the terms of the “Limitation of Liability” subsection of these Terms as
        to the types and amounts of damages for which a party may be held
        liable. The prevailing party will be entitled to an award of their
        reasonable attorney’s fees and costs. Except as may be required by law,
        neither a party nor its representatives may disclose the existence,
        content, or results of any arbitration hereunder without the prior
        written consent of both parties.
      </Text>
      <Text>
        UNLESS YOU TIMELY PROVIDE US WITH AN ARBITRATION OPT-OUT NOTICE (AS
        DEFINED BELOW IN THE SUBSECTION TITLED “YOUR CHOICES”), YOU ACKNOWLEDGE
        AND AGREE THAT YOU AND WE ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY
        OR TO PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS
        ACTION OR REPRESENTATIVE PROCEEDING. FURTHER, UNLESS BOTH YOU AND WE
        OTHERWISE AGREE IN WRITING, THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN
        ONE PERSON’S CLAIMS AND MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF ANY
        CLASS OR REPRESENTATIVE PROCEEDING.
      </Text>
      <Text>
        By rejecting any changes to these Terms, you agree that you will
        arbitrate any Dispute between you and us in accordance with the
        provisions of this section as of the date you first accepted these Terms
        (or accepted any subsequent changes to these Terms).
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        21. Notice
      </Typography>
      <Text>
        We may provide any notice to you under this Agreement using commercially
        reasonable means, including using public communication channels. Notices
        we provide by using public communication channels will be effective upon
        posting.
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        22. Severability
      </Typography>
      <Text>
        If any provision of this Agreement shall be determined to be invalid or
        unenforceable under any rule, law, or regulation of any local, state, or
        federal government agency, such provision will be changed and
        interpreted to accomplish the objectives of the provision to the
        greatest extent possible under any applicable law and the validity or
        enforceability of any other provision of this Agreement shall not be
        affected.
      </Text>
      <Typography variant="h2" css={{ mb: 20 }}>
        23. Governing law
      </Typography>
      <Text>
        These Terms and any separate agreements whereby we provide you Services
        shall be governed by and construed in accordance with the laws of the
        Dubai, United Arab Emirates.
      </Text>
    </BasicModal>
  );
}
