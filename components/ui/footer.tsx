import { Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Notlmpng. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="mailto:info@notlmpng.com"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
