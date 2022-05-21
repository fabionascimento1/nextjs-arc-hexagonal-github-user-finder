import { ExceptionLoggerClient } from '../types';

export const exceptionLoggerClient: ExceptionLoggerClient = {
  captureException: <T>(ex: T) => console.log(ex),
};
