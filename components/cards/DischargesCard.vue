<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('退院者数')"
      :title-id="'number-of-discharges'"
      :chart-id="'time-bar-chart-discharges'"
      :chart-data="dischargesGraph"
      :date="Data.discharges_summary.date"
      :unit="$t('人')"
      :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/taiin.html'"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{
              $t(
                '（注）「退院」には、宿泊療養施設から退所した方、自宅療養で陰性化した方を含む'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '（注）退院者数の把握には一定の期間を要しており、確認次第数値を更新している'
              )
            }}
          </li>
        </ul>
      </template>
    </time-bar-chart>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart,
  },
  data() {
    const dischargesGraph = formatGraph(Data.discharges_summary.data)

    const data = {
      Data,
      dischargesGraph,
    }
    return data
  },
}
</script>
