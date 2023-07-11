import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function CostomConfirm({ title, message }) {
  const handleConfirm = () => {
    return true;
  };

  const handleCancel = () => {
    return false;
  };

  const showConfirmAlert = () => {
    confirmAlert({
      title: title,
      message: message,
      buttons: [
        {
          label: "취소",
          onClick: handleCancel,
        },
        {
          label: "확인",
          onClick: handleConfirm,
        },
      ],
    });
  };

  return (
    <div>
      <button onClick={showConfirmAlert}>로그인</button>
    </div>
  );
}

export default CostomConfirm;
