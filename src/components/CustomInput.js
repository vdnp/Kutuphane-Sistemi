import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const InputWrapper = styled("div")({
  position: "relative",
  width: "100%",
});

const StyledInput = styled("input")(({ isValid }) => {
  const valids = {
    email: {},
    password: {},
    phone: {},
    default: {},
  };

  return {
    ...valids[isValid || "default"],
    width: "100%",
    padding: "14px 16px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "15px",
    outline: "none",
    backgroundColor: "#fff",
    transition: "all 0.2s ease",
    boxSizing: "border-box",
    "&::placeholder": {
      color: "#9ca3af",
    },
    "&:focus": {
      borderColor: "#6b7280",
      boxShadow: "0 0 0 3px rgba(107, 114, 128, 0.1)",
    },
    "&:hover": {
      borderColor: "#9ca3af",
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

export default function Input({
  isValid = "",
  disabled = false,
  loading = false,
  ...props
}) {
  return (
    <InputWrapper>
      <StyledInput
        isValid={isValid}
        disabled={disabled || loading}
        {...props}
      />
      {loading && <LoadingSpinner />}
    </InputWrapper>
  );
}
