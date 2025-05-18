"use client"

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { register } from "@/app/api/user";
import { useRouter } from "next/navigation";

const registerFormSchema = z.object({
  userAccount: z.string().min(4, {
    message: "用户名至少需要4个字符",
  }),
  password: z.string().min(6, {
    message: "密码至少需要6个字符",
  }),
  rePassword: z.string(),
}).refine((data) => data.password === data.rePassword, {
  message: "两次输入的密码不一致",
  path: ["rePassword"],
});

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      userAccount: "",
      password: "",
      rePassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    try {
      setIsLoading(true);
      const res:any = await register(values);
      // console.log('[ res ] >', res)
      if (res.code === 0) {
        toast({
          title: "注册成功",
          description: "请登录以继续",
        });
        router.push("/auth/login");
      } else {
        toast({
          variant: "destructive",
          title: "注册失败",
          description: res.data.message || "注册失败，请稍后重试",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "注册失败",
        description: "注册失败，请稍后重试",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-center">注册账号</h1>
          <p className="text-muted-foreground text-center mt-2">
            创建一个新账号以开始使用
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="userAccount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>用户名</FormLabel>
                  <FormControl>
                    <Input placeholder="请输入用户名" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>密码</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rePassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>确认密码</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "注册中..." : "注册"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}