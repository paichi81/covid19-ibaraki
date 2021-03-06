import dayjs from 'dayjs'

const headers = [
  { text: '例目', value: '例目' },
  { text: '公表日', value: '公表日' },
  { text: '居住地', value: '居住地' },
  { text: '年代', value: '年代' },
  { text: '性別', value: '性別' },
  { text: '退院※', value: '退院', align: 'center' },
]

type DataType = {
  num: number
  date: string
  居住地: string | null
  年代: string | null
  性別: '男性' | '女性' | string
  退院: '◯' | null
  [key: string]: any
}

type TableDataType = {
  例目: DataType['num']
  公表日: string
  居住地: DataType['居住地']
  年代: DataType['年代']
  性別: DataType['性別'] | '不明'
  退院: DataType['退院']
}

type CityTableType = {
  市町村: string
  入院者数: number
  退院者数: number
  発生数: number
}

export const headers2 = [
  { text: '発生数', value: '発生数' },
  { text: '市町村', value: '市町村' },
  { text: '入院者数', value: '入院者数' },
  { text: '退院者数', value: '退院者数' },
]

type TableDateType = {
  headers: typeof headers
  datasets: TableDataType[]
  cityDataset: CityTableType[]
}

/**
 * Format for DataTable component
 *
 * @param data - Raw data
 */
export default (data: DataType[]) => {
  const tableDate: TableDateType = {
    headers,
    datasets: [],
    cityDataset: [],
  }
  data.forEach((d) => {
    const releaseDate = dayjs(d.date)
    const TableRow: TableDataType = {
      例目: d.num,
      公表日: releaseDate.isValid() ? releaseDate.format('M/D') : '不明',
      居住地: d['居住地'] ?? '調査中',
      年代: d['年代'] ?? '不明',
      性別: d['性別'] ?? '不明',
      退院: d['退院'],
    }
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets.sort((a, b) =>
    a.例目 === b.例目 ? 0 : a.例目 < b.例目 ? 1 : -1
  )
  return tableDate
}
