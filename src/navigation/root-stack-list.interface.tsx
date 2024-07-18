// Add Screen name here

export type interfaceRootStackList = {
  Login: undefined;
  Signup: undefined;
  Dashboard: undefined;
  Splash: undefined;
};

type ExtractStringPropertyNames<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export type STRING_KEYS = ExtractStringPropertyNames<interfaceRootStackList>;
