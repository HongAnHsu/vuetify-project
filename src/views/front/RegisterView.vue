<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <h1 style="color: white;">註冊</h1>
      </VCol>
      <v-divider
      :thickness="3"
      class="border-opacity-100"
      color="warning"
      ></v-divider>
      <VDivider></VDivider>
      <VCol cols="12">
        <VForm :disabled="isSubmitting" @submit.prevent="submit">
          <VTextField
            v-model="firstname.value.value"
            :error-messages="firstname.errorMessage.value"
            label="姓氏"
            style="background: white;"
            color="orange"
          ></VTextField>
          <VTextField
            v-model="lastname.value.value"
            :error-messages="lastname.errorMessage.value"
            label="名稱"
            style="background: white;"
            color="orange"
          ></VTextField>
          <VTextField
            v-model="account.value.value"
            :error-messages="account.errorMessage.value"
            label="帳號"
            counter
            maxlength="20"
            style="background: white;"
            color="orange"
          ></VTextField>
          <VTextField
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="信箱"
            type="email"
            style="background: white;"
            color="orange"
          ></VTextField>
          <VTextField
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
            label="密碼"
            counter
            maxlength="20"
            type="password"
            style="background: white;"
            color="orange"
          ></VTextField>
          <VTextField
            v-model="passwordConfirm.value.value"
            :error-messages="passwordConfirm.errorMessage.value"
            label="確認密碼"
            counter
            maxlength="20"
            type="password"
            style="background: white;"
            color="orange"
          ></VTextField>
          <div class="text-center">
            <VBtn type="submit" color="orange" style="margin: 1% ;">註冊</VBtn>
            <h1></h1>
            <v-btn color="white" @click="gotoLogin">返回登入</v-btn>
          </div>
        </VForm>
      </VCol>
      <v-divider
      :thickness="3"
      class="border-opacity-100"
      color="warning"
      ></v-divider>
    </VRow>
  </VContainer>

</template>

<script setup>
import validator from 'validator'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { api } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const createSnackbar = useSnackbar()
const router = useRouter()

const gotoLogin = () => {
  router.push('/login')
}

const schema = yup.object({
  account: yup
    .string()
    .required('帳號必填')
    .min(4, '帳號最少 4 個字')
    .max(20, '帳號最多 20 個字'),
  email: yup
    .string()
    .required('信箱必填')
    .test(
      'isEmail', '信箱格式錯誤',
      (value) => validator.isEmail(value)
    ),
  password: yup
    .string()
    .required('密碼必填')
    .min(4, '密碼最少 4 個字')
    .max(20, '密碼最多 20 個字'),
  passwordConfirm: yup
    .string()
    .required('密碼必填')
    .min(4, '密碼最少 4 個字')
    .max(20, '密碼最多 20 個字')
    .oneOf([yup.ref('password')], '密碼不一致'),
  firstname: yup
    .string()
    .required('姓氏必填'),
  lastname: yup
    .string()
    .required('名稱必填')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const email = useField('email')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')
const firstname = useField('firstname')
const lastname = useField('lastname')

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/users', {
      account: values.account,
      email: values.email,
      password: values.password,
      firstname: values.firstname,
      lastname: values.lastname
    })
    createSnackbar({
      text: '註冊成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/login')
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})

</script>
