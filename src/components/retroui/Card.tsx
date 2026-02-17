import { cn } from "@/lib/utils";
import { type AnchorHTMLAttributes, type HTMLAttributes } from "react";
import { Text } from "@/components/retroui/Text";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  url?: string;
}

const Card = ({ className, url, ...props }: ICardProps) => {
  const cardClass = cn(
    "inline-block border-2 rounded shadow-md transition-all hover:shadow-none bg-card",
    className,
  );
  return url ? (
    <a href={url} className={cardClass} {...(props as unknown as AnchorHTMLAttributes<HTMLAnchorElement>)} />
  ) : (
    <div className={cardClass} {...props} />
  );
};

const CardHeader = ({ className, ...props }: ICardProps) => {
  return (
    <div
      className={cn("flex flex-col justify-start p-4", className)}
      {...props}
    />
  );
};

const CardTitle = ({ className, ...props }: ICardProps) => {
  return <Text as="h3" className={cn("mb-2", className)} {...props} />;
};

const CardDescription = ({ className, ...props }: ICardProps) => (
  <p className={cn("text-muted-foreground", className)} {...props} />
);

const CardContent = ({ className, ...props }: ICardProps) => {
  return <div className={cn("p-4", className)} {...props} />;
};

const CardComponent = Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
});

export { CardComponent as Card };
