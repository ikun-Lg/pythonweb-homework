"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Bell, ChevronDown, LogIn, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from '@/lib/utils';
import SearchBar from '../search/search-bar';
import { useToast } from "@/hooks/use-toast";
import { logout } from "@/app/api/user";

interface UserInfo {
  userId: string;
  userNickname: string | null;
  userAccount: string;
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // 从 localStorage 获取用户信息
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleLogout = async () => {
    try {
      const res:any = await logout();
      if (res.code === 0) {
        // 清除本地存储的用户信息
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        setUserInfo(null);
        
        toast({
          title: "已退出登录",
          description: "期待您的再次访问",
        });
        
        router.push('/');
        router.refresh();
      } else {
        toast({
          variant: "destructive",
          title: "退出失败",
          description: res.message || "退出失败，请稍后重试",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "退出失败",
        description: "退出失败，请稍后重试",
      });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 py-3 px-4 md:px-8',
        scrolled 
          ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-md' 
          : 'bg-gradient-to-b from-background/80 to-transparent'
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-red-600">MovieFlix</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <NavLink href="/">首页</NavLink>
            <NavLink href="/movies">电影</NavLink>
            {userInfo && <NavLink href="/recommendations">推荐电影</NavLink>}
            {userInfo && <NavLink href="/my-list">我的片单</NavLink>}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {searchOpen ? (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <SearchBar onClose={() => setSearchOpen(false)} />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
          )}
          
          {userInfo ? (
            <>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Bell className="h-5 w-5" />
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-1 flex items-center gap-2">
                    <Avatar className="h-7 w-7">
                      <AvatarImage src="/images/avatar.png" alt={userInfo.userAccount} />
                      <AvatarFallback className="bg-red-600">
                        {userInfo.userAccount.slice(0, 1).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline-block">{userInfo.userAccount}</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>我的账户</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/account" className="w-full">账户设置</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/my-list" className="w-full">我的片单</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/preferences" className="w-full">偏好设置</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    退出登录
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/auth/login">
                  <LogIn className="h-5 w-5 mr-2" />
                  登录
                </Link>
              </Button>
              <Button asChild>
                <Link href="/auth/register">注册</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-sm text-foreground/80 font-medium hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  );
}