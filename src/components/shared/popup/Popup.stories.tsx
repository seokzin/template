import type { Meta } from '@storybook/react'

import { Button, onPopup, PopupProps } from '@/components'

const meta: Meta<PopupProps> = {
  title: 'components/Popup',
}

export const Primary = () => {
  const handlePopup = async () =>
    await onPopup({
      title: '타이틀',
      description: '설명 (optional)',
      confirmText: '확인',
      onConfirm: () => {
        console.log('confirm')
      },
      cancelText: '취소',
      onCancel: () => {
        console.log('cancel')
      },
    })

  return (
    <>
      <Button onClick={handlePopup}>함수 호출</Button>

      <br />

      <Button
        onClick={() =>
          onPopup({
            title: '타이틀',
            description: '설명 (optional)',
            confirmText: '확인',
            onConfirm: () => {
              console.log('confirm')
            },
            cancelText: '취소',
            onCancel: () => {
              console.log('cancel')
            },
          })
        }
      >
        인라인 호출
      </Button>
    </>
  )
}

export default meta
