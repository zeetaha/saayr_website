import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistSchema, type InsertWaitlist } from "@shared/schema";
import { useCreateWaitlistEntry } from "@/hooks/use-waitlist";
import { useLanguage } from "@/hooks/use-language";
import { Loader2, ArrowRight, Building2, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
  defaultRole?: "user" | "business";
  className?: string;
  variant?: "hero" | "footer";
}

export function WaitlistForm({ defaultRole = "user", className, variant = "hero" }: WaitlistFormProps) {
  const [role, setRole] = useState<"user" | "business">(defaultRole);
  const { mutate, isPending, isSuccess } = useCreateWaitlistEntry();
  const { t } = useLanguage();
  
  const form = useForm<InsertWaitlist>({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      role: defaultRole,
      email: "",
    },
  });

  const onSubmit = (data: InsertWaitlist) => {
    mutate({ ...data, role });
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "rounded-2xl p-8 text-center",
          variant === "hero" ? "bg-white/80 backdrop-blur-sm border border-white/50" : "bg-primary/10"
        )}
      >
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl text-primary">✓</span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{t("form.success.title")}</h3>
        <p className="text-muted-foreground">{t("form.success.description")}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={cn("w-full max-w-md mx-auto space-y-4", className)}>
      {/* Role Toggle */}
      <div className="flex bg-secondary/50 p-1 rounded-xl w-fit mx-auto md:mx-0 backdrop-blur-sm">
        <button
          type="button"
          onClick={() => { setRole("user"); form.setValue("role", "user"); }}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
            role === "user" 
              ? "bg-white text-primary shadow-sm" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <User className="w-4 h-4" />
          {t("form.forYou")}
        </button>
        <button
          type="button"
          onClick={() => { setRole("business"); form.setValue("role", "business"); }}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
            role === "business" 
              ? "bg-white text-primary shadow-sm" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Building2 className="w-4 h-4" />
          {t("form.forBusiness")}
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1 group">
          <input
            {...form.register("email")}
            placeholder={role === "user" ? t("form.emailPlaceholder") : t("form.businessEmailPlaceholder")}
            className={cn(
              "w-full h-12 md:h-14 px-5 rounded-xl bg-white border-2 border-transparent transition-all duration-200",
              "placeholder:text-muted-foreground/70 text-foreground",
              "focus:outline-none focus:border-primary/20 focus:ring-4 focus:ring-primary/10",
              "shadow-lg shadow-black/5 group-hover:shadow-xl group-hover:shadow-primary/5",
              form.formState.errors.email && "border-destructive/50 focus:border-destructive/50 focus:ring-destructive/10"
            )}
            disabled={isPending}
          />
          <AnimatePresence>
            {form.formState.errors.email && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -bottom-6 left-2 text-xs text-destructive font-medium"
              >
                {form.formState.errors.email.message}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        
        <button
          type="submit"
          disabled={isPending}
          className={cn(
            "h-12 md:h-14 px-8 rounded-xl font-bold whitespace-nowrap",
            "bg-primary text-white",
            "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5",
            "active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
            "transition-all duration-200 flex items-center justify-center gap-2"
          )}
        >
          {isPending ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              {t("form.joinWaitlist")}
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
