import { useMutation } from "@tanstack/react-query";
import { api, type InsertWaitlist } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateWaitlistEntry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertWaitlist) => {
      const res = await fetch(api.waitlist.create.path, {
        method: api.waitlist.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 409) {
          throw new Error("This email is already on the list!");
        }
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Invalid input");
        }
        throw new Error("Something went wrong. Please try again.");
      }

      return api.waitlist.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "You're in! 🎉",
        description: "Thanks for joining Saayr. We'll be in touch soon.",
        className: "bg-primary text-primary-foreground border-none",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Couldn't join waitlist",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
