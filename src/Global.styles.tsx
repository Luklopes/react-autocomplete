import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/scss/main.scss";

export const ToastContainerStyled = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    width: 400px;
    padding: 0px 16px 32px 16px;
  }

  .Toastify__toast {
    border-radius: 9px;
  }

  .Toastify__toast-body {
    border-radius: 9px;
    padding: 0px;
    min-width: 328px;
  }
`;
