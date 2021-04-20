import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AuthWrapper, Input, Button } from '~/components';
import { useAuthStore } from '~/services/store';

export const CreateAccountScreen = ({ navigation }) => {
  const { setUser } = useAuthStore();

  const goToSelectAccountType = () => {
    navigation.navigate('SelectAccountType');
  };

  const { values, handleSubmit, setFieldValue, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required('Nome é obrigatório')
        .min(3, 'Nome deve ter no mínimo 3 caracteres'),
      email: Yup.string()
        .required('E-mail é obrigatório')
        .email('E-mail inválido'),
      phoneNumber: Yup.string()
        .required('Celular é obrigatório')
        .min(16, 'Celular inválido'),
      password: Yup.string()
        .required('Senha é obrigatório')
        .min(6, 'Senha deve ter no mínimo 6 caracteres'),
      confirmPassword: Yup.string()
        .required('Confirmar Senha é obrigatório')
        .min(6, 'Confirmar Senha deve ter no mínimo 6 caracteres'),
    }),
    onSubmit: props => {
      setUser(props);
      goToSelectAccountType();
    },
  });

  return (
    <AuthWrapper
      title="Crie sua conta"
      bottomChildren={<Button onPress={handleSubmit}>PRÓXIMO</Button>}>
      <Input
        label="NOME"
        value={values.name}
        onChangeText={text => setFieldValue('name', text)}
        error={errors.name}
        placeholder="Seu Nome"
      />
      <Input
        label="EMAIL"
        value={values.email}
        onChangeText={text => setFieldValue('email', text)}
        error={errors.email}
        mt={16}
        placeholder="meu.email@exemplo.com"
      />
      <Input
        label="CELULAR"
        value={values.phoneNumber}
        onChangeText={text => setFieldValue('phoneNumber', text)}
        error={errors.phoneNumber}
        mt={16}
        placeholder="(XX) X XXXX-XXXX"
      />
      <Input
        label="SENHA"
        value={values.password}
        onChangeText={text => setFieldValue('password', text)}
        error={errors.password}
        mt={16}
        placeholder="********"
      />
      <Input
        label="CONFIRMAR SENHA"
        value={values.confirmPassword}
        onChangeText={text => setFieldValue('confirmPassword', text)}
        error={errors.confirmPassword}
        mt={16}
        placeholder="********"
      />
    </AuthWrapper>
  );
};
