import { PopupProps, usePopupStore } from './'

const onPopup = (popup: PopupProps) => {
  return new Promise<boolean>((resolve) => {
    document.body.style.overflow = 'hidden'

    const popupWithClose = {
      ...popup,
      onConfirm: () => {
        popup.onConfirm?.()
        usePopupStore.getState().closePopup()
        document.body.style.overflow = ''
        resolve(true)
      },
      onCancel: () => {
        popup.onCancel?.()
        usePopupStore.getState().closePopup()
        document.body.style.overflow = ''
        resolve(false)
      },
    }

    usePopupStore.getState().showPopup(popupWithClose)
  })
}

export default onPopup
