<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>&nbsp;</h1>
        <h1 style="color: white;">登入</h1>
      </v-col>
      <v-divider
      :thickness="3"
      class="border-opacity-100"
      color="warning"
      ></v-divider>
      <v-col cols="12" >
        <v-form :disabled="isSubmitting" @submit.prevent="submit" >
          <VTextField
            v-model="account.value.value"
            :error-messages="account.errorMessage.value"
            label="帳號"
            counter
            maxlength="20"
            color="orange"
            style="background: white;"
          ></VTextField>
          <VTextField
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
            label="密碼"
            counter
            maxlength="20"
            type="password"
            color="orange"
            style="background: white;"
          ></VTextField>
<<<<<<< HEAD
          <div class="text-center">
            <v-row>
              <v-col cols="12">
                <v-btn type="submit" color="orange" style="margin: 1%">登入</v-btn>
                <h1></h1>
                <v-btn color="white" @click="gotoRegister">前往註冊</v-btn>
              </v-col>
            </v-row>
=======
          <div class="text-center" style="margin:10px auto;">
            <v-btn type="submit" color="green" style="">登入</v-btn>
>>>>>>> 6b2df09eb06c670d52a19dd3fcfa9a50bc901fc3
          </div>
        </v-form>
      </v-col>
      <v-divider
        :thickness="3"
        class="border-opacity-100"
        color="warning"
        style="margin: ;"
      ></v-divider>
    </v-row>
  </v-container>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { api } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'

const createSnackbar = useSnackbar()
const router = useRouter()
const user = useUserStore()

const gotoRegister = () => {
  router.push('/register')
}
const schema = yup.object({
  account: yup
    .string()
    .required('帳號必填')
    .min(4, '帳號最少 4 個字')
    .max(20, '帳號最多 20 個字'),
  password: yup
    .string()
    .required('密碼必填')
    .min(4, '密碼最少 4 個字')
    .max(20, '密碼最多 20 個字')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const password = useField('password')

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await api.post('/users/login', {
      account: values.account,
      password: values.password
    })
    user.login({
      token: data.result.token,
      account: data.result.account,
      email: data.result.email,
      cart: data.result.cart,
      role: data.result.role
    })
    createSnackbar({
      text: '成功登入',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/')
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
