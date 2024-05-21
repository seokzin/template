import styled from '@emotion/styled'

import { Text, usePopupStore } from '@/components'

const Popup = () => {
  const { popup } = usePopupStore()

  if (!popup) return null

  return (
    <DimSection>
      <Container>
        <TitleSection>
          <Text>{popup.title}</Text>
        </TitleSection>

        {popup.description && (
          <DescriptionSection>
            <Text name="body2">{popup.description}</Text>
          </DescriptionSection>
        )}

        <ButtonSection>
          {popup.cancelText && <button onClick={popup.onCancel as () => void}>{popup.cancelText}</button>}

          <button onClick={popup.onConfirm as () => void}>{popup.confirmText}</button>
        </ButtonSection>
      </Container>
    </DimSection>
  )
}

export default Popup

const DimSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`

const Container = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 16px 12px;
  margin: 24px;
  background: ${({ theme }) => theme.color.popup};
`

const TitleSection = styled.div``

const DescriptionSection = styled.div``

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
`
