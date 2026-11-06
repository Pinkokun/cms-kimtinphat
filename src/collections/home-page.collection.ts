import type { CollectionConfig } from '@sonicjs-cms/core'

const homePageCollection: CollectionConfig = {
  name: 'home_page',
  displayName: 'Home Page',
  description: 'Nội dung trang chủ',
  schema: {
  type: 'object',
  properties: {
    title: { type: 'string', title: 'Tên bản ghi' }, // THÊM TRƯỜNG BẮT BUỘC NÀY
    hero_title: { type: 'string', title: 'Tiêu đề Hero' },
    hero_desc: { type: 'string', title: 'Mô tả Hero' },
    hero_image: { type: 'string', title: 'Hình ảnh Hero (URL)' }, // (Hoặc format: 'image' nếu bạn đã đổi)
    stat_projects: { type: 'number', title: 'Số dự án' },
    stat_experience: { type: 'number', title: 'Năm kinh nghiệm' },
  },
  required: ['title', 'hero_title'], // Thêm 'title' vào mảng bắt buộc
},
}

export default homePageCollection
