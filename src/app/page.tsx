import Image from "next/image";
import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";
const navigation = [
  { name: "Projects", href: "#", current: false },
  { name: "Deployments", href: "#", current: true },
  { name: "Activity", href: "#", current: false },
  { name: "Domains", href: "#", current: false },
  { name: "Usage", href: "#", current: false },
  { name: "Settings", href: "#", current: false },
];
const info = [
  {
    name: "tel",
    element: "<a href='tel:123-456-7890'>Tel.123-456-7890</a>",
    text: "Call us",
  },
  { name: "a", element: "<span>Open. 10:00 - 17:00</span>", text: "Support" },
  { name: "b", element: "<span>Close. Thursday, Friday</span>", text: "Chat" },
];
const pricingTable = [
  { breed: "チワワ", type: "スムース", shampoo: "5,500円～", cut: "" },
  { breed: "", type: "ロング", shampoo: "6,050円～", cut: "7,700円～" },
  {
    breed: "ミニチュア・ダックスフント",
    type: "スムース",
    shampoo: "6,050円～",
    cut: "",
  },
  { breed: "", type: "ロング", shampoo: "6,600円～", cut: "8,250円～" },
  {
    breed: "ミニチュア・ピンシャー、イタグレ",
    type: "",
    shampoo: "6,600円～",
    cut: "",
  },
  {
    breed: "フレンチブルドッグ、パグ",
    type: "",
    shampoo: "7,150円～",
    cut: "",
  },
  { breed: "パピヨン", type: "", shampoo: "6,600円～", cut: "8,250円～" },
  {
    breed: "ヨークシャテリア",
    type: "",
    shampoo: "6,600円～",
    cut: "8,800円～",
  },
  {
    breed: "マルチーズ、シーズー",
    type: "",
    shampoo: "7,150円～",
    cut: "9,350円～",
  },
  {
    breed: "ペキニーズ、ポメラニアン",
    type: "",
    shampoo: "7,150円～",
    cut: "8,800円～",
  },
];
export default function Home() {
  return (
    <>
      <nav className="flex overflow-x-auto border-b border-white/10 py-4">
        <ul
          role="list"
          className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
        >
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`${
                  item.current
                    ? "from-sky-200 to-blue-200"
                    : "from-white to-transparent"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center w-full flex-col  mb-28">
            <Image
              src={`${BASE_PATH}/sample_01.svg`}
              alt="Logo"
              width={160}
              height={300}
              className="w-160 h-300 mb-28"
            />
            <Image
              src={`${BASE_PATH}/sample_02.svg`}
              alt="Logo"
              width={160}
              height={300}
              className="w-160 h-300"
            />
          </div>
          <div className="flex-col items-center  w-full">
            <ul className="flex gap-x-4">
              {info.map((item) => (
                <li
                  key={item.name}
                  dangerouslySetInnerHTML={{ __html: item.element }}
                />
              ))}
            </ul>
            <Image
              src={`${BASE_PATH}/sample_02.svg`}
              alt="Logo"
              width={640}
              height={640}
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center w-full flex-col">
            <Image
              src={`${BASE_PATH}/sample_01.svg`}
              alt="Logo"
              width={160}
              height={300}
              className="w-160 h-300 mb-28"
            />
          </div>
          <div className="flex-col items-center  w-full">
            <h2 className="text-4xl font-bold">Title</h2>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <Image
            src={`${BASE_PATH}/sample_02.svg`}
            alt="Logo"
            width={640}
            height={640}
          />
          <div className="flex items-center w-full flex-col">
            <Image
              src={`${BASE_PATH}/sample_02.svg`}
              alt="Logo"
              width={320}
              height={320}
              className="w-160 h-300 mb-28"
            />
            <Image
              src={`${BASE_PATH}/sample_02.svg`}
              alt="Logo"
              width={320}
              height={320}
              className="w-160 h-300 mb-28"
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center w-full flex-col mr-24">
            <h2 className="text-4xl font-bold mb-6">料金表</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b py-2">Price</th>
                  <th className="border-b py-2">Shampoo</th>
                  <th className="border-b py-2">Cut</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((item, index) => (
                  <tr key={index}>
                    <td className="border-b py-2">{item.breed}</td>
                    <td className="border-b py-2">{item.type}</td>
                    <td className="border-b py-2">{item.shampoo}</td>
                    <td className="border-b py-2">{item.cut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center w-full flex-col">
            <h2 className="text-4xl font-bold mb-6">Option</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b py-2">Price</th>
                  <th className="border-b py-2">Shampoo</th>
                  <th className="border-b py-2">Cut</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((item, index) => (
                  <tr key={index}>
                    <td className="border-b py-2">{item.breed}</td>
                    <td className="border-b py-2">{item.type}</td>
                    <td className="border-b py-2">{item.shampoo}</td>
                    <td className="border-b py-2">{item.cut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="items-center w-full">
            <h2 className="text-4xl font-bold">Access</h2>
            <div className="w-full">
              <dl className="space-y-2">
                <div className="flex">
                  <dt className="w-1/3 text-lg font-semibold">店名</dt>
                  <dd className="w-2/3 text-lg font-medium">
                    ドッグサロンペティ
                  </dd>
                </div>
                <div className="flex">
                  <dt className="w-1/3 text-lg font-semibold">住所</dt>
                  <dd className="w-2/3 text-lg font-medium">
                    富山県富山市堀353
                  </dd>
                </div>
                <div className="flex">
                  <dt className="w-1/3 text-lg font-semibold">営業時間</dt>
                  <dd className="w-2/3 text-lg font-medium">10:00～17:00</dd>
                </div>
                <div className="flex">
                  <dt className="w-1/3 text-lg font-semibold">定休日</dt>
                  <dd className="w-2/3 text-lg font-medium">毎週木・金</dd>
                </div>
                <div className="flex">
                  <dt className="w-1/3 text-lg font-semibold">
                    クレジットカード
                  </dt>
                  <dd className="w-2/3 text-lg font-medium">VISA、JCB</dd>
                </div>
                <div className="flex">
                  <dt className="w-1/3 text-lg font-semibold">駐車場</dt>
                  <dd className="w-2/3 text-lg font-medium">4台</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex-col items-center w-full">
            <h2 className="text-4xl font-bold">Title</h2>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="flex items-center justify-between gap-x-4">
            <div className="flex items-center gap-x-4">
              <button className="text-sm font-semibold">Create</button>
              <button className="text-sm font-semibold">Import</button>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <button className="text-sm font-semibold">Notifications</button>
            <button className="text-sm font-semibold">Profile</button>
          </div>
        </div>
      </main>
    </>
  );
}
