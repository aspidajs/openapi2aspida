/* eslint-disable */
import * as Types from '../../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationTokenRequired

    query: {
      search: string
      offset: number
    }

    status: 200

    resBody: {
      count: number
      offset?: number
      data: {
        email: string
        id: number
        initials: string
        role: string
        roleScope: string
        screenName: string
      }[]
    }
  }
}
