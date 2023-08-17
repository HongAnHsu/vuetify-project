<template>
  <VCard
  height="400"
  width="300"
  style="
<<<<<<< HEAD
  margin: auto;
  right: 30px;
  box-shadow:2px 2px 2px 4px rgba(199, 186, 186, 0.883);
=======
  box-shadow: 1px 1px 3px black;
  margin: auto;
>>>>>>> 6b2df09eb06c670d52a19dd3fcfa9a50bc901fc3
  ">
    <VImg :src="image" height="220" cover=""></VImg>
    <VCardTitle >
      <VCardText style="font-size: 24px;font-weight: bolder;">{{ name }}</VCardText>
    </VCardTitle>
    <VCardSubtitle style="padding: 20px; font-size: 20px;font-family: Georgia, 'Times New Roman', Times, serif; font-weight:1000 ;">${{ price }}</VCardSubtitle>
    <VCardActions >
<<<<<<< HEAD
      <VBtn color="white" @click="addCart" style="margin: auto;background: orange ; font-size: large; font-weight: 1000; box-shadow:2px 2px 2px 1px rgba(0, 0, 0, 0.4);">加入購物車</VBtn>
=======
      <VBtn color="white" @click="addCart" style="margin: auto;background: orange ; font-size: large; font-weight: 1000;">加入購物車</VBtn>
>>>>>>> 6b2df09eb06c670d52a19dd3fcfa9a50bc901fc3
    </VCardActions>
  </VCard>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/store/user'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()
const user = useUserStore()

const props = defineProps({
  _id: {
    type: String,
    default: () => ''
  },
  category: {
    type: String,
    default: () => ''
  },
  description: {
    type: String,
    default: () => ''
  },
  image: {
    type: String,
    default: () => ''
  },
  name: {
    type: String,
    default: () => ''
  },
  price: {
    type: Number,
    default: () => 0
  },
  sell: {
    type: Boolean,
    default: () => true
  }
})

const addCart = async () => {
  try {
    const { data } = await apiAuth.post('/users/cart', {
      product: props._id,
      quantity: 1
    })
    user.cart = data.result
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
}
</script>
