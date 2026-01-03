/**
 * Logger utility to replace console.log statements
 * Only logs in development mode
 */

type LogLevel = 'log' | 'warn' | 'error' | 'info';

class Logger {
  private isDevelopment: boolean;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  private logInternal(level: LogLevel, ...args: unknown[]): void {
    if (!this.isDevelopment) return;

    const prefix = `[${level.toUpperCase()}]`;
    switch (level) {
      case 'error':
        console.error(prefix, ...args);
        break;
      case 'warn':
        console.warn(prefix, ...args);
        break;
      case 'info':
        console.info(prefix, ...args);
        break;
      default:
        console.log(prefix, ...args);
    }
  }

  log(...args: unknown[]): void {
    this.logInternal('log', ...args);
  }

  info(...args: unknown[]): void {
    this.log('info', ...args);
  }

  warn(...args: unknown[]): void {
    this.log('warn', ...args);
  }

  error(...args: unknown[]): void {
    // Always log errors, even in production
    console.error('[ERROR]', ...args);
  }
}

export const logger = new Logger();

