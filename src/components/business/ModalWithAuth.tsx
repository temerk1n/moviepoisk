import { FormInstance, Modal } from "antd";
import { AuthForm } from "./AuthForm";
import { FC, memo, useCallback, useState } from "react";
import { User } from "../../store/userSlice";

interface ModalWithAuthProps {
  showModal: boolean;
  onLogin: (values: User) => void;
  onClose: () => void;
}

export const ModalWithAuth: FC<ModalWithAuthProps> = memo(
  ({ showModal, onLogin, onClose }) => {
    const [formInstance, setFormInstance] = useState<FormInstance<User>>();

    const onOk = useCallback(() => {
      const values = formInstance?.getFieldsValue();
      onLogin(values as User);
    }, [formInstance, onLogin]);

    return (
      <Modal
        open={showModal}
        title="Авторизация"
        okText="Авторизоваться"
        cancelText="Отмена"
        onCancel={onClose}
        destroyOnClose
        onOk={onOk}
      >
        <AuthForm
          onFormInstanceReady={(instance) => {
            setFormInstance(instance);
          }}
        />
      </Modal>
    );
  },
);
