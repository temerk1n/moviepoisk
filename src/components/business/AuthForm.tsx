import { FC, memo, useEffect } from "react";
import { User } from "../../store/userSlice";
import { Form, FormInstance, Input } from "antd";

interface AuthFormProps {
  onFormInstanceReady: (form: FormInstance<User>) => void;
}

export const AuthForm: FC<AuthFormProps> = memo(({ onFormInstanceReady }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    onFormInstanceReady(form);
  }, [form, onFormInstanceReady]);

  return (
    <Form name="auth" autoComplete="off" style={{ paddingTop: "10%" }} form={form} layout="vertical">
      <Form.Item
        label="Логин"
        name="login"
        rules={[{ required: true, message: "Поле обязательно для заполнения" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Поле обязательно для заполнения" }]}
      >
        <Input.Password />
      </Form.Item>
    </Form>
  );
});