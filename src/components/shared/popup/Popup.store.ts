import { create } from 'zustand'

export interface PopupProps {
  title: string
  description?: string
  confirmText: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
}

interface State {
  popup: PopupProps | null
}

interface Action {
  showPopup: (popup: PopupProps) => void
  closePopup: () => void
}

const usePopupStore = create<State & Action>((set) => ({
  popup: null,
  showPopup: (popup) => set({ popup: popup }),
  closePopup: () => set({ popup: null }),
}))

export default usePopupStore
