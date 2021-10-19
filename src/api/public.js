/*
 * @Author: yuyongxing
 * @Date: 2021-10-19 11:41:30
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-10-19 11:46:57
 * @Description:公共api
 */
import http from '@/utils/http'

export function login(params) {
  return http({
    url: "/login",
    method: "post",
    data: params
  })
}
