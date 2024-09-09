import type {PropType} from "vue";

export const AtomInputTypes  = {
    id: {
        type: String as PropType<string>,
        default: null,
    },
    name: {
        type: String as PropType<string>,
        default: null,
    },
    required: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    readonly: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    placeholder: {
        type: String as PropType<string>,
        default: '',
    },
    label: {
        type: String as PropType<string>,
        default: null,
    },
}
