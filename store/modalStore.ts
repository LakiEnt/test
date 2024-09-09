import { defineStore } from 'pinia'

export type PropsNameModal =
    | 'addPost'

type IModals = {
    [key in PropsNameModal]: boolean
}
export const useModalStore = defineStore('modalStore', {
    state: () => ({
        modals: {
            addPost: false,
        } as IModals,
        hasOpenModal: false,
    }),
    actions: {
        open(name: PropsNameModal): void {
            this.modals[name] = true
            this.hasOpenModal = Object.values(this.modals).some(
                (value: boolean) => value
            )
        },
        close(name: PropsNameModal): void {
            this.modals[name] = false
            this.hasOpenModal = Object.values(this.modals).some(
                (value: boolean) => value
            )
        },
    },
})
