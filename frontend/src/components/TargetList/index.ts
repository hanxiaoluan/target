import { ref } from 'vue'
import { TargetItem } from '../type'
import axios from 'axios'
import { TARGET_LIST } from '../../../../constants/api'

export const targetData = ref<TargetItem[]>([])
export const fetchTargetList = async () => {
  const result = await axios.get(TARGET_LIST)
  targetData.value = result.data
}

export const isAddItemPopupShow = ref(false)
export const handleShowAddItemPopup = () => {
  isAddItemPopupShow.value = true
}

export const addItemFormRef = ref<any>(null)
export const setAddItemFormRef = (ref: any) => {
  addItemFormRef.value = ref
}
