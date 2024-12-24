import { create } from 'zustand'

const useFormStore = create((set) => ({
  formData: {},
  updateFormData: (newData) => set((state) => ({
    formData: { ...state.formData, ...newData }
  })),
}))

export default useFormStore

