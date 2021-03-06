// 以下のコードを cards-dev.twitter.com/validator に貼り付ける

const HOST = [
  'https://ibaraki.stopcovid19.jp/',
  'https://covid19-ibk-dev.netlify.app/',
]
const PATHS = [
  '',
  'cards/details-of-confirmed-cases',
  'cards/number-of-confirmed-cases',
  'cards/attributes-of-confirmed-cases',
  'cards/number-of-reports-to-covid19-telephone-advisory-center',
  'cards/number-of-inspection-persons',
  'cards/ibaraki-city-table',
  'cards/ibaraki-city-map-table',
  'cards/number-of-discharges',
  'cards/number-of-deaths',
]

const sleep = (t) => new Promise((resolve) => setTimeout(resolve, t))

;(async () => {
  for (const host of HOST) {
    for (const path of PATHS) {
      document.querySelector('input.FormControl').value = host + path
      document.querySelector('input.Button').click()
      await sleep(10000) // 10s待つ
    }
  }
  document.querySelector('input.FormControl').value = ''
  alert('処理が終了しました')
})()

// 処理が完了するまでに HOST(2) x PATHS(10) x TIME(10s) = 200s かかります
