import { create } from "zustand";




interface Order {
    date: Date | null;
    selectedHour: string | null;
    setDateHourStore: (clientDate: Date, selectedHour: string) => void;
    resetStore: () => void;
}


export const useOrder = create<Order>()((set) => ({

    date: null,
    selectedHour: null,

    setDateHourStore: (clientDate: Date, selectedHour: string) => {
        set((state) => ({ date: clientDate, selectedHour: selectedHour }))
    },
    resetStore: () => {
        set((state) => ({ date: null, selectedHour: null }))
    }
}))