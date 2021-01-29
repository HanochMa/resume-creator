// todo
export * from './shims-vue.d'
export * from './global.d.ts';

declare global {
  interface Window {
    $axios: any;
  }
}