import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("font-head", {
  variants: {
    as: {
      p: "font-sans text-base",
      span: "font-sans text-base",
      ol: "list-decimal list-inside",
      ul: "list-disc list-inside",
      li: "font-sans text-base",
      a: "font-sans text-base underline hover:underline-offset-4 hover:decoration-4 hover:decoration-primary underline-offset-2 decoration-secondary cursor-pointer",
      h1: "text-4xl lg:text-5xl font-bold",
      h2: "text-3xl lg:text-4xl font-semibold",
      h3: "text-2xl font-medium",
      h4: "text-xl font-normal",
      h5: "text-lg font-normal",
      h6: "text-base font-normal",
    },
    alignment: {
      start: "text-start",
      center: "text-center",
      end: "text-end",
    },
    text_color: {
      primary: "text-primary",
      secondary: "text-secondary",
      muted: "text-muted",
      accent: "text-accent",
    },
  },
  defaultVariants: {
    as: "p",
  },
});

export type TextVariantProps = VariantProps<typeof textVariants>;
