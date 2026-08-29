import React, { forwardRef, useState } from "react";
import cn from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  pill?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

interface RippleType {
  id: number;
  x: number;
  y: number;
  size: number;
}

const baseStyles =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden font-semibold tracking-tight select-none whitespace-nowrap transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070c17] focus-visible:ring-blue-400 disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.978]";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "text-white bg-gradient-to-b from-blue-500 via-blue-500 to-blue-600 shadow-[0_1px_0_rgba(255,255,255,0.28)_inset,0_-2px_6px_rgba(0,0,0,0.28)_inset,0_8px_20px_-6px_rgba(47,107,250,0.55),0_2px_4px_rgba(6,12,28,0.4)] hover:shadow-[0_1px_0_rgba(255,255,255,0.32)_inset,0_-2px_6px_rgba(0,0,0,0.24)_inset,0_14px_28px_-8px_rgba(47,107,250,0.55),0_4px_10px_rgba(6,12,28,0.5)] hover:-translate-y-0.5",
  secondary:
    "text-white bg-white/5 shadow-[0_0_0_1.5px_rgba(255,255,255,0.14)_inset] hover:bg-white/10 hover:shadow-[0_0_0_1.5px_rgba(255,255,255,0.28)_inset,0_6px_16px_-4px_rgba(0,0,0,0.35)] hover:-translate-y-0.5",
  outline:
    "text-blue-400 bg-transparent shadow-[0_0_0_1.5px_theme(colors.blue.500)_inset] hover:text-white hover:bg-blue-500 hover:shadow-[0_0_0_1.5px_theme(colors.blue.500)_inset,0_10px_24px_-8px_rgba(47,107,250,0.55)] hover:-translate-y-0.5",
  ghost:
    "text-slate-300 bg-transparent hover:text-white hover:bg-white/5 hover:-translate-y-0.5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[13.5px] rounded-[10px]",
  md: "h-10 px-6 text-[15.5px] rounded-xl",
  lg: "h-[52px] px-8 text-[17px] rounded-2xl",
  icon: "h-11 w-11 p-0 rounded-2xl",
};

const shineStyles =
  "before:pointer-events-none before:absolute before:inset-y-0 before:left-[-40%] before:w-2/5 before:-skew-x-[18deg] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:transition-[left] before:duration-700 before:ease-[cubic-bezier(0.16,1,0.3,1)] hover:before:left-[140%]";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      pill = false,
      isLoading = false,
      disabled,
      leftIcon,
      rightIcon,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const [ripples, setRipples] = useState<RippleType[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || isLoading) return;
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const id = Date.now();
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      setRipples((prev) => [...prev, { id, x, y, size }]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 650);

      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        onClick={handleClick}
        className={cn(
          baseStyles,
          variant === "primary" && shineStyles,
          variantStyles[variant],
          sizeStyles[size],
          pill && "!rounded-full",
          isLoading && "text-transparent",
          className
        )}
        {...props}
      >
        {!isLoading && leftIcon}
        {!isLoading && children}
        {!isLoading && rightIcon}

        {isLoading && (
          <span className="absolute h-[18px] w-[18px] animate-spin rounded-full border-[2.5px] border-white/35 border-t-white" />
        )}

        {ripples.map((ripple) => (
          <Ripple key={ripple.id} {...ripple} />
        ))}
      </button>
    );
  }
);

Button.displayName = "Button";

const Ripple = ({ x, y, size }: RippleType) => {
  const [active, setActive] = useState(false);

  React.useEffect(() => {
    const raf = requestAnimationFrame(() => setActive(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <span
      className={cn(
        "pointer-events-none absolute rounded-full bg-white/55 transition-all duration-700 ease-out",
        active ? "scale-100 opacity-0" : "scale-0 opacity-100"
      )}
      style={{ left: x, top: y, width: size, height: size }}
    />
  );
};

export default Button;