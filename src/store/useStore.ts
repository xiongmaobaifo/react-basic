import { create } from 'zustand'

interface AppState {
  user: string
  count: number
  setUser: (name: string) => void
  increment: () => void
  reset: () => void
}

export const useAppStore = create<AppState>((set) => ({
  user: 'Guest',
  count: 0,
  setUser: (name) => set({ user: name }),
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}))
