/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
     id: '0001',

    title: '亲爱的洁子同学，早上好呀！',
    desc: `
      
      **现在是{{date.DATA}}**
    
  
      {{holidaytts.DATA}}

      要记着吃早餐！！！
      --
      --
      
      {{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}

      -
      
      {{comprehensive_horoscope.DATA}}
      
      -
      
      {{birthday_message.DATA}}
      
      -
      
      {{poetry_title.DATA}} 
      {{poetry_content.DATA}}
      
      {{moment_copyrighting.DATA}}
    `
    
    
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
