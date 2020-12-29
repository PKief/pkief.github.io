import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  availableThemes = ['dark-theme', 'light-theme'];
  theme: BehaviorSubject<string> = new BehaviorSubject('light-theme');

  constructor() {
    const theme = localStorage.getItem(window.location.host);
    const detectPreferredColorScheme = (e: MediaQueryListEvent): void => {
      const themeName = e.matches ? 'dark-theme' : 'light-theme';
      this.theme.next(themeName);
    };

    const colorSchemeMedia = window.matchMedia?.(
      '(prefers-color-scheme: dark)'
    );
    colorSchemeMedia.addEventListener('change', detectPreferredColorScheme);

    if (theme) {
      this.theme.next(theme);
      colorSchemeMedia.removeEventListener(
        'change',
        detectPreferredColorScheme
      );
    } else {
      if (colorSchemeMedia.matches) {
        this.theme.next('dark-theme');
      }
    }
  }

  /**
   * Change the current theme.
   * Saved in the local storage to reuse it for the next session.
   * @param theme Theme name
   */
  changeTheme(theme: string) {
    if (this.availableThemes.indexOf(theme) !== -1) {
      this.theme.next(theme);
      localStorage.setItem(window.location.host, theme);
    }
  }

  /**
   * Check if theme is available
   * @param theme Theme name
   */
  validateTheme(theme: string) {
    return this.availableThemes.some((t) => t === theme);
  }
}
