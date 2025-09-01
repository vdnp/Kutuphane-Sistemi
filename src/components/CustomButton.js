import styled from "@emotion/styled";
import { colors } from "styles/jss/mainStyles";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const StyledButton = styled("button")(({ variant, size }) => {
  const sizes = {
    small: { padding: "6px 12px", fontSize: "14px" },
    medium: { padding: "8px 14px", fontSize: "16px" },
    large: { padding: "10px 16px", fontSize: "18px" },
  };

  const variants = {
    primary: { backgroundColor: colors.primary, color: colors.textLight },
    secondary: { backgroundColor: colors.secondary, color: colors.textPrimary },
    outline: {
      backgroundColor: "transparent",
      color: "#4b5563",
      border: "2px solid #4b5563",
    },
    danger: { backgroundColor: colors.danger, color: colors.textLight },
  };

  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    borderRadius: "8px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s ease",
    ...sizes[size || "medium"],
    ...variants[variant || "primary"],

    "&:hover": {
      opacity: 0.9,
    },
    "&:disabled": {
      backgroundColor: colors.disabled,
      color: colors.disabledText,
      cursor: "not-allowed",
    },
  };
});

const LoadingSpinner = styled("span")({
  position: "absolute",
  right: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  width: "16px",
  height: "16px",
  border: "2px solid #d1d5db",
  borderTop: "2px solid transparent",
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
});

export default function Button({
  children,
  icon,
  iconPosition = "left",
  size = "medium",
  variant = "primary",
  loading = false,
  disabled = false,
  ...props
}) {
  return (
    <StyledButton
      size={size}
      variant={variant}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {icon && iconPosition === "left" && icon}
          {children}
          {icon && iconPosition === "right" && icon}
        </>
      )}
    </StyledButton>
  );
}
