import { useState } from "./useState"
import { ref, unref, computed } from "vue"

/**
 * @description Basic methods for modal management
 *
 * @param {string} id Modal name
 */
export const useModal = (id) => {
  /**
   * @description List of IDs of all modals
   * @constant
   */
  let _Modals = useState("useModal__modals", () => ({}))
  const modalId = id ? ref(id) : ref("")

  const statusModal = computed(() => _Modals.value[unref(modalId)]) ?? false
  /**
   * @description Initialize new Modal
   * @param id
   */
  const initModal = (id) => {
    if (!_Modals.value[id]) {
      _Modals.value[id] = false
    }

    modalId.value = id
  }
  /**
   * @description Delete current modal
   */
  const clearModals = () => {
    _Modals.value = {}
    modalId.value = ""
  }
  /**
   * @description Delete all modals
   */
  const destroyModals = () => {
    if (modalId.value in _Modals.value) {
      delete _Modals.value[unref(modalId)]
    }
  }

  const destroyModal = (optId) => {
    delete _Modals.value[optId ?? modalId.value]
  }

  /**
   * @description Programmatically switch a given modal
   */
  const switchModalState = (id, state) => {
    if (id in _Modals.value) {
      _Modals.value[id] = state
    }
  }

  /**
   * @description Set current, or given, modal status to true
   */
  const openModal = (optId) => {
    const modalToOpen = optId ?? modalId.value
    Object.keys(_Modals.value).includes(modalToOpen) &&
      switchModalState(modalToOpen, true)
  }

  /**
   * @description Set current modal status to false
   */
  const closeModal = (optId) => {
    const modalToOpen = optId ?? modalId.value
    Object.keys(_Modals.value).includes(modalToOpen) &&
      switchModalState(modalToOpen, false)
  }

  return {
    statusModal,
    initModal,
    clearModals,
    destroyModals,
    openModal,
    closeModal,
    destroyModal,
    switchModalState,
  }
}
