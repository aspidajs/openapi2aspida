/* eslint-disable */
import * as Types from '../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 204

    reqBody: {
      fcmToken: string
      deviceToken: string
    }
  }
}
