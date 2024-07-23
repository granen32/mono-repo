type CommonButtonProps = {
  onClick: () => void;
  text:string;
  disabled?: boolean;
  color:'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
};

export type { CommonButtonProps };