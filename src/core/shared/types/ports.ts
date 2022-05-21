export interface ExceptionLoggerClient {
  captureException: <Exception>(ex: Exception) => void;
}