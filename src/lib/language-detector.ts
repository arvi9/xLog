import url from "url"
import type { GetServerSidePropsContext } from "next"

export const languageDetector = (ctx: GetServerSidePropsContext) => {
  const queryLang = url.parse(ctx.req.url!, true).query.lang as string

  let acceptLang = ctx.req.headers["accept-language"]?.split(",")[0]

  if (acceptLang === "zh-HK" || acceptLang === "zh-TW") {
    acceptLang = "zh-TW"
  } else {
    acceptLang = acceptLang?.split("-")[0]
  }

  return queryLang || acceptLang || "en"
}
