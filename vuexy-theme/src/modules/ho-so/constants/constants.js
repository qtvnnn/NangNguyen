export const ROUTE_NAME = {
  HO_SO: {
    NAME: '/ho-so/',
    DANH_SACH: 'danh-sach',
    CHI_TIET: ':hoSoId',
    TAO: 'tao',
    XEM: 'xem/:id',
  },
}

export const MENU_ROUTE_NAME = {
  HO_SO: {
    NAME: 'Hồ sơ',
    DANH_SACH: 'Danh sách',
    CHI_TIET: 'Chi tiết',
    TAO: 'Tạo',
    XEM: 'Xem',
  },
}

export const LS_CAP_NHAT_FIELDS = [
  {
    key: 'nguoiCapNhat',
    label: 'Người cập nhật',
    sortable: true,
  },
  {
    key: 'donViCapNhat',
    label: 'Đơn vị cập nhật',
    sortable: true,
  },
  {
    key: 'thoiGian',
    label: 'Thời gian',
    sortable: true,
  },
  {
    key: 'noiDungCapNhat',
    label: 'Nội dung cập nhật',
    sortable: true,
  },
  {
    key: 'hanhDong',
    label: 'Hành động',
  },
  {
    key: 'file',
    label: 'File đính kèm',
  },
]

export const LS_TRA_LAI_FIELDS = [
  {
    key: 'nguoiTraLai',
    label: 'Người trả lại',
    sortable: true,
  },
  {
    key: 'donViTraLai',
    label: 'Đơn vị trả lại',
    sortable: true,
  },
  {
    key: 'nguoiBiTraLai',
    label: 'Người bị trả lại',
    sortable: true,
  },
  {
    key: 'donViBiTraLai',
    label: 'Đơn vị bị trả lại',
    sortable: true,
  },
  {
    key: 'thoiGian',
    label: 'Thời gian',
    sortable: true,
  },
  {
    key: 'noiDung',
    label: 'Nội dung',
  },
]

export const LS_PXL_FIELDS = [
  {
    key: 'nguoiGui',
    label: 'Người gửi',
    sortable: true,
  },
  {
    key: 'nguoiNhan',
    label: 'Người nhận',
    sortable: true,
  },
  {
    key: 'donViNhan',
    label: 'Đơn vị nhận',
    sortable: true,
  },
  {
    key: 'vaiTroXuLy',
    label: 'Vai trò xử lý',
    sortable: true,
  },
  {
    key: 'thoiGian',
    label: 'Thời gian',
    sortable: true,
  },
]
