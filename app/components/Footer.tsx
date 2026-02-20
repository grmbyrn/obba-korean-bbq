import { Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => (
  <footer className="border-t border-border bg-background py-12 px-6">
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <p className="font-oswald text-xl font-bold tracking-wider text-foreground">
          OBBA<span className="text-primary">.</span>
        </p>
        <p className="mt-1 font-inter text-xs text-muted-foreground">
          Carrer de Nicaragua, 97 · 08029 Barcelona
        </p>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/obba.korea.bbq"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
        >
          <Instagram className="h-4 w-4" />
        </a>
      </div>

      <div className="flex flex-col items-center md:items-end">
        <p className="font-inter text-xs text-muted-foreground">
          © {new Date().getFullYear()} Obba Korean BBQ. All rights reserved.
        </p>
        <Link href="https://graemebyrne.com" target="_blank" className="text-amber-600 hover:underline mt-1 text-xs" aria-label="Site by Graeme Byrne">
          Site by Graeme Byrne
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
