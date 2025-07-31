import { use, useEffect, useState } from "react";
import { getData } from "../../services";


function Header() {
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    fetch('https://gj-data-git-main-lamanyusifovas-projects.vercel.app/ProductData.json')
    .then(res => res.json())
    .then(data => console.log(data)
    )
}, []);

  return (
    <>
      <header className=" py-4 bg-gray-500 h-[500px] ">
        <div className=" flex justify-between h-16  ">
          <div className="flex relative">
            <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center  absolute top-[-50px]">
              <svg-icon _ngcontent-gj-c336682531="" key="logo" height="100%" width="100%" _nghost-gj-c3009018224="" class="ng-star-inserted"><svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <path d="M0 0h100v100H0z"></path>
                <path fill="#fff" fillRule="evenodd" d="M58.6831 48.1455c.1428.1281.2329.3047.2528.4955.4211 4.0832-.0269 8.2093-1.3146 12.1069-1.46 3.3179-3.469 6.366-5.9425 9.0158-4.173 3.7479-9.6075 5.7815-15.2158 5.6937-6.4962-.0124-12.742-2.5068-17.4594-6.9729-4.7174-4.4661-7.5498-10.5661-7.9175-17.0519-.3677-6.4857 1.7571-12.8668 5.9395-17.8375 4.1824-4.9706 10.1063-8.155 16.5594-8.9016 9.0336-1.0126 17.2677 2.8958 22.7039 10.0018a.79336.79336 0 0 1 .1326.2805.79114.79114 0 0 1 .0144.3099.79033.79033 0 0 1-.1059.2915c-.0542.0893-.1255.1669-.2099.2285l-6.1467 4.3702c-.1653.1142-.3683.1605-.5668.129-.1985-.0314-.3772-.138-.4992-.2978a15.71282 15.71282 0 0 0-5.7148-4.6044c-2.2417-1.0622-4.7031-1.5785-7.1826-1.5068-4.2711.0601-8.3434 1.8144-11.321 4.8769-2.9776 3.0626-4.6167 7.1826-4.5566 11.4537.06 4.2711 1.8143 8.3434 4.8769 11.321 3.0626 2.9776 7.1826 4.6167 11.4537 4.5566 6.4132 0 12.631-5.3384 12.631-9.8596H38.4349c-.1022 0-.2034-.0203-.2978-.0597a.773607.773607 0 0 1-.2518-.1698c-.0719-.0727-.1286-.159-.1669-.2538-.0383-.0947-.0575-.1962-.0563-.2984v-6.733c-.0012-.103.0182-.2052.0571-.3005.0389-.0954.0964-.1821.1692-.2549.0728-.0728.1595-.1303.2548-.1692a.772269.772269 0 0 1 .3006-.0571h19.7193c.1918-.001.3772.0694.52.1974Zm19.7944-22.768h8.2253c.0734-.0036.1467.0077.2155.0333.0689.0256.1318.065.185.1157.0531.0507.0954.1116.1243.1792.0289.0675.0437.1402.0437.2136v31.32c0 12.5511-8.7494 17.9783-17.3921 17.9783-4.6629-.0162-9.1313-1.8706-12.4356-5.1608-.1151-.1192-.1794-.2784-.1794-.4441 0-.1657.0643-.3249.1794-.4441l5.747-5.7381c.0573-.0602.1262-.1082.2025-.1409.0764-.0328.1586-.0497.2416-.0497.0831 0 .1653.0169.2417.0497.0763.0327.1452.0807.2025.1409 1.543 1.5417 3.628 2.4185 5.8092 2.4427 3.8905 0 8.0476-2.2651 8.0476-8.625V25.9193c0-.1437.0571-.2815.1587-.3831.1016-.1016.2394-.1587.3831-.1587Z" clipRule="evenodd"></path>
              </svg>
              </svg-icon>
            </a>
            <ul className="items-stretch hidden space-x-3 lg:flex pl-[300px]">
              <li className="flex">
                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-purple-600 dark:border-purple-600">Link</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Link</a>
              </li>
            </ul>
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="px-8 py-3 font-semibold rounded dark:bg-purple-600 dark:text-gray-50">Log in</button>
          </div>
          <button className="p-4 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
