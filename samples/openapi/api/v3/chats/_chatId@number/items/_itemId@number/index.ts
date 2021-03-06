/* eslint-disable */
import * as Types from '../../../../../../@types'

export type Methods = {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader
    status: 200

    resBody: {
      ok: boolean
    }

    reqBody: {
      formattedText: string
    }
  }

  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader
    status: 200
    resBody: Types.ModelCard
  }
}
