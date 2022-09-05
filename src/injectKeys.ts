import type {InjectionKey} from 'vue'

export const ERROR_KEY = Symbol() as InjectionKey<{error: string | null, resetError: () => void}>
export const CHANGE_ORDER_CITIES_LIST = Symbol() as InjectionKey<{(): void}>