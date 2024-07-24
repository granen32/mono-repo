import { ChangeEvent } from "react";

type CommonButtonProps = {
  onClick: () => void;
  text:string;
  disabled?: boolean;
  color:'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
};

type SearchState = {
  query: string;
  results: any[];
  setQuery: (query: string) => void;
  setResults: (results: any[]) => void;
}

type CustomInputProps = {
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type { CommonButtonProps,SearchState,CustomInputProps };