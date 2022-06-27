interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "outline-primary"
    | "outline-secondary"
    | "outline-tertiary";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
    >
      {children}
    </button>
  );
};
