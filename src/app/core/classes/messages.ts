export interface IMessage {
  title: string;
  message: string;
}

export class Messages {
  static readonly ERROR: IMessage = {
    title: 'Error',
    message: 'An error occurred. Please try again later.',
  };

  static readonly SUCCESS: IMessage = {
    title: 'Success',
    message: 'Operation completed successfully.',
  };

  static readonly WARNING: IMessage = {
    title: 'Warning',
    message: 'Please check your input.',
  };

  static readonly INFO: IMessage = {
    title: 'Information',
    message: 'This is an informational message.',
  };
}

export class MessageTypes {
  static readonly ERROR = 'error';
  static readonly SUCCESS = 'success';
  static readonly WARNING = 'warning';
  static readonly INFO = 'info';
}
