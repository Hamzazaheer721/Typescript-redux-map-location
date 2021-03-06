export type IUpdateBasicInfoPayloadRtn = {
  success: boolean
  data: [
    {
      id: string
      user_id: string
      parent_branch_id: string
      store_logo: string
      store_name: string
      whatsapp_num: string
      whatsapp_username: string
      whatsapp_password: string
      business_url: string
      industry_id: string
      industry_types: string
      description: string
      images: string
      email: string
      website: string
      ntn_num: string
      street_address: string
      latitude: string
      longitude: string
      country: string
      is_online: number
      phone_number: string
      mobile_number: string
      city: string
      state: string
      postal_code: string
      area: string
      bank_phone: string
      payment_method: string
      created_at: string
      updated_at: string
      deleted_at: string
      acc_holder_mobile_number: string
      acc_holder_name: string
      paypal_email: string
      bank_name: string
      acc_number: string
      iban_number: string
      passport_number: string
      swift_code: string
      service_charges_amount: string
      currency: string
      shipping_percentage_type: string
      shipping_percentage: string
      applicable_range: string
      delivery_hours: string
      delivery_minutes: string
      delivery_range: string
      delivery_radius: string
      store_timings: string
      discount_amount: string
      service_options: string
      free_trial_start_date: Date
      qrcode_img: string
      subscription_canceled_status: number
      subscription_canceled_date: Date
      subscription_restart_date: Date
      status: number
      cash_on_delivery: string
      service_charges_status: string
      cod_status: string
      auto_subscription: string
      orders_accept_status: string
      is_tax_enable: number
      tax_rate: string
      is_tax_included: number
      custom_tax_config: string
      allow_checkout_when_out_of_stock: string
      min_order_price: string
      max_order_price: string
      min_order_qty: string
      max_order_qty: string
      disount_type: string
      delivery_timming: string
      product_sorting: string
      timezone: string
      is_approved: number
    }
  ]
  message: string
}

export type IUpdateBasicInfoPayloadArg = {
  name: string
  whatsapp: string
  business_url: string
  industry: string
  industry_type: string
  description: string
  purpose: string
}

export type IUpdateBasicInfoRejectedPayload = {
  success: boolean
  message: string
}

export type IUpdateBasicInfoStateType = {
  loading: boolean
  success: boolean
  message: string
}
