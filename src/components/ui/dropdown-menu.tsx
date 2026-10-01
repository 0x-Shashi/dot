"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, Circle, type LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Kbd } from "@/components/ui/kbd";

const DropdownMenu: React.FC<React.ComponentProps<typeof DropdownMenuPrimitive.Root>> = ({
  modal = false,
  ...props
}) => <DropdownMenuPrimitive.Root modal={modal} {...props} />;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

// Motion wrapper for animations
const MotionContent = React.forwardRef<
  React.ElementRef<typeof motion.div>,
  React.ComponentPropsWithoutRef<typeof motion.div> & {
    side?: "top" | "right" | "bottom" | "left";
  }
>(({ children, side = "bottom", ...props }, ref) => {
  const getInitialPosition = () => {
    switch (side) {
      case "top":
        return { y: 8 };
      case "right":
        return { x: -8 };
      case "left":
        return { x: 8 };
      default:
        return { y: -8 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.95,
        ...getInitialPosition(),
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
        ...getInitialPosition(),
      }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 28,
        duration: 0.18,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
});
MotionContent.displayName = "MotionContent";

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
    icon?: LucideIcon;
  }
>(({ className, inset, children, icon: Icon, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default gap-2 select-none items-center rounded-[8px] px-2.5 py-1.5 text-xs outline-none transition-colors",
      "hover:bg-[#f3f3f3] hover:text-[#0a0a0a]",
      "focus:bg-[#f3f3f3] focus:text-[#0a0a0a]",
      "data-[state=open]:bg-[#f3f3f3]",
      inset && "pl-7",
      className
    )}
    {...props}
  >
    <motion.div
      className="flex text-xs w-full items-center gap-2"
      whileHover={{ x: 2 }}
      transition={{ duration: 0.1 }}
    >
      {Icon && <Icon size={14} className="shrink-0" />}
      <span className="flex-1">{children}</span>
      <ChevronRight className="ml-auto h-3.5 w-3.5" />
    </motion.div>
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] max-w-[95vw] sm:max-w-[280px] overflow-hidden rounded-[10px] border border-[#e8e8e8] bg-white p-1 text-[#0a0a0a] shadow-lg",
      className
    )}
    asChild
    {...props}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.95, x: -8 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95, x: -8 }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 28,
        duration: 0.15,
      }}
    >
      {children}
    </motion.div>
  </DropdownMenuPrimitive.SubContent>
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <AnimatePresence>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[9rem] max-w-[95vw] sm:max-w-[350px] overflow-hidden rounded-[10px] border border-[#e8e8e8] bg-white p-1 text-[#0a0a0a] shadow-xl backdrop-blur-md",
          className
        )}
        asChild
        {...props}
      >
        <MotionContent>{children}</MotionContent>
      </DropdownMenuPrimitive.Content>
    </AnimatePresence>
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const dropdownMenuItemVariants = cva(
  "relative flex cursor-pointer select-none items-center gap-2 rounded-[6px] px-2.5 py-1.5 text-xs outline-none transition-colors",
  {
    variants: {
      variant: {
        default:
          "hover:bg-[#f3f3f3] hover:text-[#0a0a0a] focus:bg-[#f3f3f3] focus:text-[#0a0a0a]",
        destructive:
          "text-[#e11d48] hover:bg-[#ffe4e6] hover:text-[#e11d48] focus:bg-[#ffe4e6]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface DropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>,
    VariantProps<typeof dropdownMenuItemVariants> {
  inset?: boolean;
  icon?: LucideIcon;
  shortcut?: string;
  selected?: boolean;
}

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(
  (
    {
      className,
      variant,
      inset,
      icon: Icon,
      shortcut,
      selected,
      children,
      ...props
    },
    ref
  ) => (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        dropdownMenuItemVariants({ variant }),
        selected && "bg-[#d5d8fb] font-semibold text-[#0a0a0a] hover:bg-[#c9cbfb]",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        inset && "pl-7",
        className
      )}
      {...props}
    >
      <motion.div
        className="flex text-xs w-full items-center gap-2"
        whileHover={{ x: 2 }}
        transition={{ duration: 0.1 }}
      >
        {Icon && <Icon size={14} className="shrink-0 text-[#6b6b6b]" />}
        <span className="flex-1 text-xs">{children}</span>
        {shortcut && (
          <Kbd size="xs" className="ml-auto text-[10px] tracking-widest opacity-60">
            {shortcut}
          </Kbd>
        )}
      </motion.div>
    </DropdownMenuPrimitive.Item>
  )
);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> & {
    icon?: LucideIcon;
  }
>(({ className, children, checked, icon: Icon, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-[6px] py-1.5 pl-7 pr-2.5 text-xs outline-none transition-colors",
      "hover:bg-[#f3f3f3] hover:text-[#0a0a0a]",
      "focus:bg-[#f3f3f3] focus:text-[#0a0a0a]",
      checked && "font-semibold bg-[#fafafa]",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center rounded-[3px] border border-[#0a0a0a]/30 bg-white">
      <DropdownMenuPrimitive.ItemIndicator>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
        >
          <Check className="h-3 w-3 text-[#0a0a0a] stroke-[2.5]" />
        </motion.div>
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    <motion.div
      className="flex text-xs w-full items-center gap-2"
      whileHover={{ x: 2 }}
      transition={{ duration: 0.1 }}
    >
      {Icon && <Icon size={14} className="shrink-0 text-[#6b6b6b]" />}
      {children}
    </motion.div>
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> & {
    icon?: LucideIcon;
  }
>(({ className, children, icon: Icon, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-[6px] py-1.5 pl-7 pr-2.5 text-xs outline-none transition-colors",
      "hover:bg-[#f3f3f3] hover:text-[#0a0a0a]",
      "focus:bg-[#f3f3f3] focus:text-[#0a0a0a]",
      "data-disabled:pointer-events-none data-disabled:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
        >
          <Circle className="h-2 w-2 fill-[#0a0a0a]" />
        </motion.div>
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    <motion.div
      className="flex text-xs w-full items-center gap-2"
      whileHover={{ x: 2 }}
      transition={{ duration: 0.1 }}
    >
      {Icon && <Icon size={14} className="shrink-0 text-[#6b6b6b]" />}
      {children}
    </motion.div>
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
    icon?: LucideIcon;
  }
>(({ className, inset, icon: Icon, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#6b6b6b] flex items-center gap-2",
      inset && "pl-7",
      className
    )}
    {...props}
  >
    {Icon && <Icon size={13} className="shrink-0" />}
    {children}
  </DropdownMenuPrimitive.Label>
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-[#e8e8e8]", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-[10px] tracking-widest text-[#6b6b6b]", className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  dropdownMenuItemVariants,
};
