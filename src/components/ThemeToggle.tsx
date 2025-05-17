
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';
import { useToast } from '@/hooks/use-toast';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();

  const handleToggle = () => {
    toggleTheme();
    toast({
      title: `Switched to ${theme === 'light' ? 'dark' : 'light'} mode`,
      description: `Enjoy the ${theme === 'light' ? 'dark' : 'light'} vibes!`,
      duration: 2000,
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className="rounded-full w-10 h-10 fixed top-4 right-4 z-50 border-2 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 transition-all" />
      ) : (
        <Sun className="h-5 w-5 transition-all" />
      )}
    </Button>
  );
};
