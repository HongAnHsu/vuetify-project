<template>
  <v-row style="margin: 0;">
    <v-col
    cols="12"
    sm="6"
    md="4">
      <VCard
    height="400"
    width="300"
    style="
      margin: auto;
      box-shadow: 2px 2px 2px 4px rgba(199, 186, 186, 0.883);
    "
  >
    <div class="image-container">
      <VImg :src="image" class="image-fit"></VImg>
    </div>
    <VCardTitle>
      <VCardText style="font-size: 24px; font-weight: bolder;">{{ name }}</VCardText>
    </VCardTitle>
    <VCardSubtitle
      style="padding: 20px; font-size: 20px; font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 1000;"
    >
      ${{ price }}
    </VCardSubtitle>
    <VCardActions>
      <v-row justify="center">
        <VBtn color="white" @click="dialog = true" style="margin: auto; background: orange; font-size: large; font-weight: 1000; box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);">
          加入購物車
        </VBtn>
      </v-row>
    </VCardActions>
  </VCard>
  <v-dialog v-model="dialog" width="786" max-height="90%">
        <v-card>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4" >
                  <v-img :src="image" class="image-fit"></v-img>
                </v-col>
                <div style="margin: 0 auto; font-size: 30px;">{{ name }}({{ category }})</div>
              </v-row>
              <v-col >
                <br><p style="font-size: 20px;">產品介紹:<br>{{ description }}</p><br>
              <v-form :disabled="isSubmitting" @submit.prevent="addCart">
                <v-text-field
                  v-model.number="quantity"
                  type="number"
                  label="數量"
                  min="0"
                ></v-text-field>
              </v-form>
            </v-col>
            </v-container>
          </v-card-text>
          <v-card-actions style="margin: auto;">
            <v-spacer></v-spacer>
            <v-btn
            variant="text"
            @click="addCart"
            color="white"
            style="
            margin: auto;
            background: orange;
            font-size: large;
            font-weight: 1000;
            box-shadow: 2px 2px 2px 2px  rgba(0, 0, 0, 0.883);
            ">
            總金額:${{ price*quantity }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/store/user'
import { useSnackbar } from 'vuetify-use-dialog'
import { ref } from 'vue' // 記得導入 ref

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

const quantity = ref(1)
const dialog = ref(false)

const addCart = async () => {
  try {
    const { data } = await apiAuth.post('/users/cart', {
      product: props._id,
      quantity: quantity.value
    })
    user.cart = data.result
    createSnackbar({
      text: '成功加入購物車，右上方確認',
      showCloseButton: false,
      snackbarProps: {
        timeout: 4000,
        color: 'orange',
        location: 'bottom'
      }
    })
    dialog.value = false // 關閉對話框
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

<style>
.image-container {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* object-fit: fill; */
}

.image-fit {
  width: 100%;
  height: 100%;
  /* object-fit: fill; */
}

.v-img__img--contain {
  object-fit: cover;
  width: 100%;
  height: 100%
}
</style>
