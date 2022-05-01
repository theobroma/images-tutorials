// index.d.ts file
declare module '*.jpg?as=webp';

declare module '*useResponsiveLoader=true' {
  const value: { srcSet: string; src: string };
  export default value;
}
