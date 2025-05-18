import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background/30 backdrop-blur-sm border-t border-border/10 py-12 px-4 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        {/* 团队成员信息 */}
        <div className="text-center">
          <h4 className="text-lg font-medium mb-4">团队成员</h4>
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            <span>嬴政豪</span>
            <span>陆永东</span>
            <span>潘文宝</span>
            <span>罗广</span>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          {/* <p>© {new Date().getFullYear()} MovieFlix. 保留所有权利。</p> */}
          <p className="mt-2">PythonWeb大作业</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="h-9 w-9 flex items-center justify-center rounded-full bg-accent hover:bg-accent/80 transition-colors"
    >
      {children}
    </a>
  );
}