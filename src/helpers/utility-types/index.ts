export type SafelyOmit<Type, Keys extends keyof Type> = Omit<Type, Keys>;
