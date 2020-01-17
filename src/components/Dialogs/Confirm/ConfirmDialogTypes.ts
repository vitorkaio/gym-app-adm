export interface DispatchProps {
  title: string;
  text: string;
  action: (op: boolean) => void;
}
