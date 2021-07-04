<template>
  <b-card no-body>
    <ho-so-form
      ref="hoSoForm"
      :form="hoSoDangCapNhat"
    />
    <b-card-body>
      <div class="d-flex">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          type="submit"
          class="mr-1"
          @click.prevent="onUpdate"
        >
          Cập nhật
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="outline-secondary"
          @click="onReset"
        >
          Nhập lại
        </b-button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardBody, BButton,
} from 'bootstrap-vue'
import { MENU_ROUTE_NAME } from '@/modules/ho-so/constants/constants'
import Ripple from 'vue-ripple-directive'
import { required } from '@validations'
import { mapGetters } from 'vuex'
import HoSoForm from '@/modules/ho-so/components/common/HoSoForm.vue'

export default {
  name: 'CapNhatHoSo',
  components: {
    HoSoForm,
    BCard,
    BCardBody,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      MENU_ROUTE_NAME: MENU_ROUTE_NAME.HO_SO.CHI_TIET,
      hoSoDangCapNhatNoiBo: {},
      required,
    }
  },
  computed: {
    ...mapGetters({
      hoSoDangCapNhat: 'hoSo/hoSoDangCapNhat',
    }),
  },
  watch: {
    hoSoDangCapNhat: {
      handler() {
        this.hoSoDangCapNhatNoiBo = this.hoSoDangCapNhat
      },
    },
  },
  created() {
    this.$store.dispatch('hoSo/layChiTietHoSo', {
      hoSoId: this.$router.currentRoute.params.hoSoId,
    })
  },
  methods: {
    onReset() {
      this.$nextTick(() => {
        this.$refs.hoSoForm.$refs.hoSoRules.reset()
      })
    },
    onUpdate() {
      this.$refs.hoSoRules.validate().then(success => {
        if (success) {
          this.$store.dispatch('hoSo/capNhatHoSo', this.hoSoDangCapNhatNoiBo)
        }
      })
    },
  },
}
</script>

<style scoped></style>
