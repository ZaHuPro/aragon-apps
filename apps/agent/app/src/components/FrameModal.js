import React from 'react'
import {
  Button,
  ButtonIcon,
  ExternalLink,
  GU,
  Modal,
  textStyle,
  useTheme,
} from '@aragon/ui'
import FrameAndAgentSvg from './FrameAndAgentSvg'

function FrameModal({ visible, onClose }) {
  const theme = useTheme()

  return (
    <Modal visible={visible} onClose={onClose}>
      <div
        css={`
          text-align: center;
          margin-bottom: ${5 * GU}px;
        `}
      >
        <FrameAndAgentSvg
          css={`
            margin: ${1.5 * GU}px auto ${3.5 * GU}px;
          `}
        />
        <h1
          css={`
            ${textStyle('title2')};
          `}
        >
          Agent needs Frame
        </h1>
        <div
          css={`
            ${textStyle('body2')};
          `}
        >
          <div>To interact with the Agent App you must install Frame</div>
          <ExternalLink
            css={`
              color: ${theme.indicatorContent};
            `}
          >
            Learn more about Frame
          </ExternalLink>
        </div>
      </div>
      <div
        css={`
          display: grid;
          grid-template-columns: 128px 128px;
          grid-gap: ${1 * GU}px;
          justify-content: flex-end;
        `}
      >
        <Button onClick={onClose}>Cancel</Button>
        <Button mode="strong">Install Frame</Button>
      </div>
    </Modal>
  )
}

export default FrameModal