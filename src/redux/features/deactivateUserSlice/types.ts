export type IDeactivateUserPayloadRtn = {
  success: boolean
  data: []
  message: string
}

export type IDeactivateUserRejectPayload = {
  success: boolean
  message: string
}

export type IDeactivateUserStateType = {
  loading: boolean
  deactivateStatus: boolean
  success: boolean
  message: string
}
