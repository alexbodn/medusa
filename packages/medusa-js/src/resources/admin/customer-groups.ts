import {
  AdminPostCustomerGroupsReq,
  AdminCustomerGroupsRes,
  AdminCustomerGroupsListRes,
  AdminPostCustomerGroupsGroupReq,
  AdminCustomerGroupsDeleteRes,
} from "@medusajs/medusa"

import BaseResource from "../base"
import { ResponsePromise } from "../.."

class AdminCustomerGroupsResource extends BaseResource {
  /**
   * Create a customer group.
   *
   * @param payload - Customer group info.
   * @param customHeaders
   */
  create(
    payload: AdminPostCustomerGroupsReq,
    customHeaders: Record<string, any> = {}
  ): ResponsePromise<AdminCustomerGroupsRes> {
    const path = `/admin/customer-groups`
    return this.client.request("POST", path, payload, {}, customHeaders)
  }

  /**
   * Retrieves a customer group.
   *
   * @param id - customer group id
   * @param customHeaders
   */
  retrieve(
    id: string,
    customHeaders: Record<string, any> = {}
  ): ResponsePromise<AdminCustomerGroupsRes> {
    const path = `/admin/customer-groups/${id}`
    return this.client.request("GET", path, {}, {}, customHeaders)
  }
  /**
   * Updates a customer group
   * @param id customer group id
   * @param payload data to update customer group with
   * @param customHeaders
   */
  update(
    id: string,
    payload: AdminPostCustomerGroupsGroupReq,
    customHeaders: Record<string, any> = {}
  ): ResponsePromise<AdminCustomerGroupsRes> {
    const path = `/admin/customer-groups/${id}`
    return this.client.request("POST", path, payload, {}, customHeaders)
  }

  /**
   * Deletes a cusotmer group.
   *
   * @param id - id of the customer gorup
   * @param customHeaders
   */
  delete(
    id: string,
    customHeaders: Record<string, any> = {}
  ): ResponsePromise<AdminCustomerGroupsDeleteRes> {
    const path = `/admin/customer-groups/${id}`
    return this.client.request("DELETE", path, {}, {}, customHeaders)
  }

  //   TODO
  //   list(
  //     query?: AdminCustomerGroupsListParams,
  //     customHeaders: Record<string, any> = {}
  //   ): ResponsePromise<AdminCustomerGroupsListRes> {}
}

export default AdminCustomerGroupsResource
