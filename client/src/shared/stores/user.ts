import { create } from 'zustand';

interface UserState {
    name: string;
    setName: (name: string) => void;
    role: number;
    setRole: (role: number) => void;
    id: string;
    setId: (id: string) => void,
}

const useUserStore = create<UserState>((set) => ({
    name: '',
    setName: (name: string) => set({ name:name }),
    role: 0,
    setRole: (role: number) => set({role:role}),
    id: '',
    setId: (id: string) => set({ id:id }),
}));

export default useUserStore