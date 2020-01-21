import {TextInputProps} from 'react-native';

export type KeyboardType =
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'number-pad'
  | 'phone-pad';

export interface DispatchProps extends TextInputProps {
  label?: string;
  keyboardType?: KeyboardType;
  onInputChange: (id: string, text: string) => void;
  id: string;
  errorText?: string;
  value?: string;
  secureTextEntry?: boolean;
}
