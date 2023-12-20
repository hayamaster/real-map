import { APIProvider, Map } from '@vis.gl/react-google-maps'
import { MapOptions, MarkerInfo, SideBar, AddingRequest } from './components'
import { useState } from 'react'

const center = {
  lat: 35.658034,
  lng: 139.701636,
}

const markerInformation = [
  {
    id: 1,
    name: '5 CROSSTIES COFFEE',
    position: { lat: 35.658319, lng: 139.702232 },
    location: '東京都渋谷区渋谷2-24-12 渋谷スクランブルスクエア 東棟 17F',
    description:
      '渋谷スクランブルスクエアの17階にあるカフェ。清潔でオシャレな雰囲気のなか電源あり、WiFiあり、と作業するには最高の環境です。景色がとても見晴らしよく、晴れてる日は新宿まで見えます。',
  },
  {
    id: 2,
    name: '10° Cafe',
    position: { lat: 35.714766, lng: 139.705527 },
    location: '東京都豊島区高田3-12-8',
    description:
      '各テーブルにコンセントがあるのと、Wi-Fiも使えるので便利です。QRコードを読み取り携帯から注文します。ただ、混んでると2時間制になります。',
  },
  {
    id: 3,
    name: 'abno',
    position: { lat: 35.6953013, lng: 139.7835233 },
    location: '東京都中央区日本橋馬喰町２丁目２−１, DDD Hotel, 2F',
    description:
      '洗練された雰囲気でゆったりできる素敵なカフェです。\n電源&wifiあり, 席数多め。',
  },
  {
    id: 4,
    name: 'Real Drip Coffee No.12',
    position: { lat: 35.6583653, lng: 139.7023478 },
    location: '東京都渋谷区渋谷２丁目２４−１２ スクランブルスクエア 5F',
    description:
      'デスクワーク用のカウンター席には電源の口が2つあります。値段は高めですが、眺めのいいゆっくりできる珈琲屋です。',
  },
  {
    id: 5,
    name: 'GOOD SOUND COFFEE',
    position: { lat: 35.645349, lng: 139.700611 },
    location: '東京都目黒区上目黒1-6-5',
    description:
      'この空間で作業していると、すごくおしゃれになった気分を味わえます。店内は結構広くて席数多めです。\n電源&wifiあり。',
  },
  {
    id: 6,
    name: 'Cafe nota nova',
    position: { lat: 35.708895, lng: 139.664652 },
    location: '東京都中野区中野4-3-1 ブックファースト中野店 2F',
    description:
      '本屋さん併設のセルフスタイルカフェ。店内は明るく開放的です。\n電源コンセントあり、席数多め。',
  },
  {
    id: 7,
    name: 'CONNEL COFFEE',
    position: { lat: 35.67405, lng: 139.729235 },
    location: '東京都港区赤坂7-2-21 草月会館 2F',
    description:
      'wifiあり,電源は一部カウンター席のみ。\nカフェは広々した綺麗なカフェです。大きい窓越しの景色は本当に素敵です。',
  },
  {
    id: 8,
    name: 'BROOKLYN ROASTING COMPANY',
    position: { lat: 35.661143, lng: 139.668993 },
    location: '東京都世田谷区北沢2-6-2 ミカン下北B街区 B101',
    description:
      'wifiあり,共同テーブルのところだけに電源あり。\n天井が高く開放的な空間は心地よく、くつろげます。',
  },
  {
    id: 9,
    name: '神野珈琲',
    position: { lat: 35.628349, lng: 139.693979 },
    location: '東京都目黒区中央町1-4-15',
    description:
      '電源あるけど、フリーWi-Fiない。\n綺麗で落ち着いた空間。店内にある大きな焙煎機がみられます。',
  },
  {
    id: 10,
    name: 'WIRED CAFE Dining Lounge Wing',
    position: { lat: 35.628889, lng: 139.736667 },
    location:
      '東京都港区高輪4-10-18 京急ショッピングプラザ ウィング高輪 WEST 2F',
    description:
      'wifiあり、カウンターのみ電源あり。\n心地よいビートのBGMと、ハイセンスでリラックスできる空間で、ゆったり作業できます。',
  },
  {
    id: 11,
    name: 'SHARE LOUNGE',
    position: { lat: 35.658447, lng: 139.702164 },
    location: '東京都渋谷区渋谷2-24-12 渋谷スクランブルスクエア 11F',
    description:
      'wifi、電源、充電器あり。\n滞在中フリードリンク、フリースナック利用ができます。雑誌・漫画読み放題で文房具や撮影機材、モニターなどのレンタルもできます。',
  },
  {
    id: 12,
    name: 'NESCAFE HARAJUKU',
    position: { lat: 35.672606, lng: 139.703702 },
    location: '東京都渋谷区神宮前1-22-8',
    description:
      '電源、wifiが完備されており作業しやすいカフェです。注文はiPadで行います。原宿駅の近くながら混雑もなく、ゆったり過ごせるスペースで席数も多いです。',
  },
  {
    id: 13,
    name: 'SOOM CAFE',
    position: { lat: 35.701199, lng: 139.701708 },
    location: '東京都新宿区百人町1-4-15',
    description:
      '時間制のカフェです。店内も広々しててドリンク飲み放題。電源や仕切りのあるデスクもあるのでノマド 的な使い方もできます。\n料金は1時間500円。',
  },
  {
    id: 14,
    name: 'Muromachi cafe',
    position: { lat: 35.689015, lng: 139.773323 },
    location: '東京都中央区日本橋室町4-4-10 東短ビル B1F',
    description:
      '自然光が入り開放的なカフェ。おしゃれな雰囲気でお食事が美味しいです。\n電源&wifiあり。',
  },
  {
    id: 15,
    name: '5 CROSSTIES COFFEE',
    position: { lat: 35.681864, lng: 139.766912 },
    location: '東京都千代田区丸の内1-9-1 JR東日本東京駅構内グランスタ',
    description:
      'wifi、電源も確保できるので便利です。東京駅改札近くで利用しやすい。',
  },
  {
    id: 16,
    name: 'DAWN Avatar Robot Cafe ver.β',
    position: { lat: 35.689361, lng: 139.776124 },
    location:
      '東京都中央区日本橋本町3-8-3 日本橋ライフサイエンスビルディング3 1F',
    description:
      '作業用デスクは広いし電源あるしwifiあります。人間のスタッフがいない時は受付のロボットにCafeエリアを希望すると伝えてあげるとスムーズです。',
  },
  {
    id: 17,
    name: 'Freeman Cafe',
    position: { lat: 35.66152, lng: 139.702552 },
    location: '東京都渋谷区渋谷1丁目16-14 メトロプラザ 2F',
    description:
      '一人でパソコンを開いて作業している方が多い印象です。ゆったり過ごせて雰囲気も良いカフェです。\n電源&wifiあり。',
  },
  {
    id: 18,
    name: 'KNAG',
    position: { lat: 35.681116, lng: 139.778201 },
    location: '東京都中央区日本橋兜町7-7 1KABUTOONE 1F',
    description:
      '店内から緑が見え、開放感があり過ごしやすいです。コスパが良いです。\n電源&wifiあり。',
  },
  {
    id: 19,
    name: 'DEAN & DELUCA CAFE',
    position: { lat: 35.683578, lng: 139.764671 },
    location: '東京都千代田区丸の内1-4-5 三菱UFJ信託銀行本店ビル 1F',
    description:
      'wifiあり、カウンター席電源あり。天井も高く座席も広くおしゃれなカフェ。東京駅と大手町駅からでも徒歩5分以内に行けます。',
  },
  {
    id: 20,
    name: '丸の内CAFE会',
    position: { lat: 35.679459, lng: 139.76523 },
    location: '東京都千代田区丸の内2-7-2 JPタワー 1F',
    description:
      '電源やフリーwifiもありとても使える店舗です。席数そこそこありますが大きなテーブルはないように見受けられ、ひとりふたりでの利用に適していると思います。',
  },
]

const MapPage = () => {
  const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false)
  const [focusId, setFocusId] = useState<number>(0)

  return (
    <>
      <APIProvider
        apiKey={import.meta.env.VITE_GOOGLE_KEY}
        onLoad={() => setIsMapLoaded(true)}
      >
        <div className="fixed left-5 top-5 z-10 flex flex-col gap-4">
          <div className="rounded-xl bg-[#9747FF] px-2 py-1.5 md:px-3.5 md:py-2.5">
            <p className="text-lg font-medium text-white md:text-2xl">
              👩🏻‍💻🧑🏻‍💻 パソコンで作業しやすいカフェ
            </p>
          </div>
          <button
            className="btn w-fit border-[#9747FF] bg-[#F8E1FE] px-2 py-1.5 text-lg font-medium text-[#70046C] hover:border-[#9747FF] hover:bg-[#9747FF] hover:text-white md:px-3.5 md:py-2.5 md:text-2xl"
            onClick={() =>
              (
                document.getElementById('adding-request') as HTMLDialogElement
              ).showModal()
            }
          >
            追加リクエスト
          </button>
        </div>
        {isMapLoaded && (
          <>
            <Map zoom={16} center={center}>
              {markerInformation.map((markerInfo) => (
                <MarkerInfo
                  markerInfo={markerInfo}
                  key={markerInfo.id}
                  focusId={focusId}
                />
              ))}
            </Map>
            <MapOptions />
          </>
        )}
        <SideBar
          markerInformation={markerInformation}
          setFocusId={setFocusId}
        />
      </APIProvider>
      <AddingRequest />
    </>
  )
}

export default MapPage
