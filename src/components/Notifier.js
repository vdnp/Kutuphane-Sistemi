import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";

export default function Notifier(props) {
  const { message, type, close, clickClose, color, icon } = props;

  const notify = () => {
    toast(message, {
      autoClose: close,
      closeOnClick: clickClose,
    });
  };
}

// Notifier.propTypes = {
//   message: PropTypes.node.isRequired,
//   type: PropTypes.oneOf(["info", "success", "warn", "error", "default"]),
//   close: PropTypes.bool,
//   color: PropTypes.any,
//   icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
// };
