import { create } from 'zustand'

interface ResgiterModalStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRegisterModal = create<ResgiterModalStore>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default useRegisterModal