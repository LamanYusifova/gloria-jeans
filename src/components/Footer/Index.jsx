import { useState } from 'react'
import { FaApple, FaGooglePlay, FaPlus, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router'

const Footer = () => {
  const [openSection, setOpenSection] = useState(null)

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <footer className="bg-[#F9F9F9] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-12">
          <div className="flex flex-col lg:w-1/4">
            <img className='w-[96px]' src="/img/gloria_jeans_logo.jpeg" alt="logo" />
            <div className="flex gap-4 my-8">
              <Link className="w-10 h-10 flex items-center justify-center">
                <img src="/img/vk.svg" alt="vk" />
              </Link>
              <Link className="w-10 h-10 flex items-center justify-center">
                <img src="/img/youtube.svg" alt="youtube" />
              </Link>
              <Link className="w-10 h-10 flex items-center justify-center">
                <img src="/img/telegram.svg" alt="telegram" />
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link className="flex items-center gap-3 p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                <div className="text-xl"><FaGooglePlay /></div>
                <div>
                  <div className="text-xs uppercase">Get it on</div>
                  <div className="font-bold text-sm">Google Play</div>
                </div>
              </Link>
              <Link className="flex items-center gap-3 p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                <div className="text-xl"><FaApple /></div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-bold text-sm">App Store</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/4">
            <div className="lg:hidden">
              <button
                onClick={() => toggle('company')}
                className="flex items-center justify-between w-full py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">Компания</h3>
                <span className={`transform transition-transform ${openSection === 'company' ? 'rotate-45' : ''}`}>
                  <FaPlus />
                </span>
              </button>
              {openSection === 'company' && (
                <ul className="space-y-3 py-4">
                  <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">О нас</Link></li>
                  <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Вакансии</Link></li>
                  <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Закупки</Link></li>
                  <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Стать партнёром</Link></li>
                </ul>
              )}
            </div>

            <div className="hidden lg:block">
              <h3 className="text-lg font-semibold text-gray-800 mb-5">Компания</h3>
              <ul className="space-y-3">
                <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">О нас</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Вакансии</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Закупки</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Стать партнёром</Link></li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/4">
            <div className="lg:hidden">
              <button
                onClick={() => toggle('info')}
                className="flex items-center justify-between w-full py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">Полезная информация</h3>
                <span className={`transform transition-transform ${openSection === 'info' ? 'rotate-45' : ''}`}>
                  <FaPlus />
                </span>
              </button>
              {openSection === 'info' && (
                <ul className="space-y-3 py-4">
                  <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Акции</Link></li>
                  <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Подарочные сертификаты</Link></li>
                  <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Карта лояльности GJ</Link></li>
                  <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Частые вопросы</Link></li>
                  <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Доставка</Link></li>
                  <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Оплата</Link></li>
                  <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Возврат</Link></li>
                  <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Уход за изделиями</Link></li>
                  <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Размеры</Link></li>
                  <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Стилист</Link></li>
                </ul>
              )}
            </div>

            <div className="hidden lg:block">
              <h3 className="text-lg font-semibold text-gray-800 mb-5">Полезная информация</h3>
              <ul className="space-y-3">
                <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Акции</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Подарочные сертификаты</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Карта лояльности GJ</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Частые вопросы</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Доставка</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Оплата</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Возврат</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Уход за изделиями</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Размеры</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800 transition-colors">Стилист</Link></li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/4">
            <div className="lg:hidden">
              <button
                onClick={() => toggle('contact')}
                className="flex items-center justify-between w-full py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">Связаться с нами</h3>
                <span className={`transform transition-transform ${openSection === 'contact' ? 'rotate-45' : ''}`}>
                  <FaPlus />
                </span>
              </button>
              {openSection === 'contact' && (
                <div className="py-4">
                  <div className="mb-5 space-y-2">
                    <Link className="block text-xl font-semibold">
                      8 800 505-82-82
                    </Link>
                    <Link className="block text-xl font-semibold">
                      8 499 938-82-22
                    </Link>
                  </div>
                  <div className="mb-5 space-y-1">
                    <p>Беларусь 8 820 007-14-000</p>
                    <p>Казахстан +7 800 004-02-30</p>
                  </div>
                  <div className="bg-gray-200 p-3 text-center mb-5">
                    ( с 8:00 до 22:00 по Москве )
                  </div>
                  <Link to={"mailto:help@gloria-jeans.ru"} className="block mb-5 hover:underline">
                    help@gloria-jeans.ru
                  </Link>
                  <div className="font-semibold text-gray-600 mb-5">
                    Адреса магазинов
                  </div>
                  <div className="space-y-3">
                    <Link className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      <span className="text-lg">
                        <img src="/img/telegram.svg" alt="telegram" />
                      </span>
                      <span className="text-gray-800">Telegram</span>
                    </Link>
                    <Link className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      <span className="text-lg"><FaWhatsapp /></span>
                      <span className="text-gray-800">WhatsApp</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="hidden lg:block">
              <h3 className="text-lg font-semibold text-gray-800 mb-5">Связаться с нами</h3>
              <div className="mb-5 space-y-2">
                <Link className="block text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors">
                  8 800 505-82-82
                </Link>
                <Link className="block text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors">
                  8 499 938-82-22
                </Link>
              </div>
              <div className="mb-5 space-y-1">
                <p>Беларусь 8 820 007-14-000</p>
                <p>Казахстан +7 800 004-02-30</p>
              </div>
              <div className="bg-gray-200 p-3 rounded-lg text-center mb-5">
                ( с 8:00 до 22:00 по Москве )
              </div>
              <Link className="block text-gray-800 mb-5 hover:underline">
                help@gloria-jeans.ru
              </Link>
              <div className="font-semibold text-gray-600 mb-5">
                Адреса магазинов
              </div>
              <div className="space-y-3">
                <Link className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <span className="text-lg">
                    <img src="/img/telegram.svg" alt="telegram" />
                  </span>
                  <span className="text-gray-800">Telegram</span>
                </Link>
                <Link className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <span className="text-lg"><FaWhatsapp /></span>
                  <span className="text-gray-800">WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 flex items-center justify-center">
                <svg width="80px" height="80px" viewBox="0 0 99 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M96 48a48 48 0 1 1-96 0 48 48 0 0 1 96 0Z" fill="#EB222D"></path><path d="m46.947 2.803-2.095 8.883 2.329.147 1.102-5.126 1.681 5.314.919.06 2.453-5.052.46 5.222 2.3.156-.955-9.08-2.297-.148-2.09 4.676-1.51-4.905-2.297-.147Z" fill="#fff"></path><path fillRule="evenodd" clipRule="evenodd" d="M33.965 10.868a2.463 2.463 0 0 1-1.663-.344 2.61 2.61 0 0 1-1.015-1.415 2.952 2.952 0 0 1-.17-1.093c.01-.356.097-.705.252-1.024a2.7 2.7 0 0 1 .69-.864c.338-.272.722-.48 1.134-.616l3.445-1.185 2.917 8.521-2.2.753-1.126-3.275-.987 4.001-2.756.95 1.479-4.409Zm1.06-4.079-.426.152a1.704 1.704 0 0 0-.92.61 1.094 1.094 0 0 0 .538 1.563c.363.094.747.068 1.093-.074l.428-.147-.712-2.104Zm-9.047 10.799 2.784-1.838 1.314 1.002 2.08-1.378-7.845-5.6-2.127 1.415 2.136 9.375 2.076-1.378-.418-1.598ZM24.724 12.7l2.536 1.915-1.75 1.162-.786-3.077Z" fill="#fff"></path><path d="M93.127 47.171c.537 0 5.085.648 5.085.648l-3.33 14.333c-.032-.711-.42-1.417-1.236-1.417-1.466-.007-3.385.072-5.432.157-3.666.15-7.742.318-10.35.04a9.951 9.951 0 0 1-.556-.082c-1.005-.167-2.38-.395-2.582.707-.33 1.77 1.447 2.064 1.846 2.13l.033.006c.893.152 12.24.102 15.83.087l1.037-.004c.566 0 .93-.165 1.147-.493l-2.64 11.365s-7.556.483-8.475.483c-3.459-.07-11.557 0-11.557 0s.212-1.971.244-3.115c.007-.218.028-.451.048-.69.112-1.276.238-2.712-1.569-2.8-1.34-.062-1.45 1.398-1.643 3.93-.05.669-.108 1.413-.194 2.224-.36 3.37-1.974 3.755-4.251 4.299-.343.082-.701.167-1.073.267-2.834.763-8.956 1.52-11.308 1.488-2.352-.032-6.068-.372-6.068-.372a6.013 6.013 0 0 0 3.348-4.745c.152-1.313-.918-4.354-1.837-5.218a5.567 5.567 0 0 0 1.704-4.133 5.76 5.76 0 0 0-1.483-3.836c-.128-.235.308-.697.831-1.25.326-.346.686-.727.965-1.111.725-1.001 1.276-1.727 1.557-1.727.144 0 .633.447 1.258 1.018.59.54 1.301 1.19 1.957 1.678 1.35 1.006 2.738.795 3.394.207.657-.588.244-1.465-1.419-2.384a12.676 12.676 0 0 1-3.426-2.908c-2.835-3.445-3.716-8.042-3.372-12.43.296-3.624-.605-6.398-1.19-8.194-.067-.209-.131-.405-.188-.587-.27-.866-.782-1.718-1.344-2.654-1.018-1.694-2.2-3.662-2.413-6.478-.212-2.825.937-6.43 1.777-8.203 1.084-2.146 2.256-2.931 4.134-3.115 1.507-.151 2.554.354 2.476.887-.029.198-.169.368-.355.594-.314.38-.758.918-1.023 2.02a9.05 9.05 0 0 0-.33 2.663c.268.008.53.079.766.207.363.207.556.666.823 1.548.09.298.167.631.261 1.038.185.798.436 1.878.974 3.519.657 2 2.986 3.993 5.228 5.91.531.455 1.058.906 1.557 1.352 2.6 2.324 8.649 8.02 10.233 11.051 1.519 2.904 1.148 4.995.99 5.892l-.02.112c-.034.195-.09.42-.15.666-.197.796-.448 1.81-.181 2.737.193.68 2.016.248 2.535-.06.502-.297.648-1.337.79-2.353l.014-.104c.147-1.047.207-4.722.207-4.722s4.497-.51 6.646-.537c1.586-.02 4.294.15 5.944.252.586.037 1.038.065 1.259.074l.267.01h.002c1.02.04 3.185.123 3.828.123Z" fill="#fff"></path><path d="M94.62 63.283c.145-.221.226-.516.257-.885v.023c.007-.09.009-.18.005-.27l-.263 1.132ZM42.481 46.349c.575.1 1.024 1.525.919 2.972l-.046-.019a8.059 8.059 0 0 1-.006.081l-.007.09v.005c-.057.7-.142 1.772.844 1.358 1.075-.45 1.764-2.209 1.764-3.242 0-1.163-.39-2.021-1.084-2.54-.693-.52-3.11-.391-3.638-.18a5.258 5.258 0 0 1-2.154.423c-.386 0-1.428-.255-2.49-.515-.946-.232-1.907-.467-2.43-.528-1.106-.128-3.463.322-4.014.46l-.035.009-.072.018c-.695.18-2.78.721-2.901-.684-.149-1.71 1.9-2.096 3.63-2.422.305-.057.6-.113.87-.173 1.496-.334 3.094-.016 4.586.28.314.063.624.125.927.179 1.74.312 3.596.133 4.497-.244.9-.376 2.457-.206 3.114-.032.29.077.674.457 1.024.803.443.438.833.823.91.474a23.54 23.54 0 0 0-.46-3.633c-.079-.186-.774-.293-1.579-.417-.643-.099-1.357-.208-1.88-.378a18.065 18.065 0 0 0-3.982-.776 10.76 10.76 0 0 0-3.674.919c-.992.432-2.049.641-2.994.828-.64.127-1.228.243-1.71.412-1.194.418-5.98 2.154-6.706 2.535-.726.382-1.948 2.173-2.43 3.9-.482 1.727-.165 4.249 1.286 4.942 1.028.492 5.035.63 8.048.735h.005c1.24.043 2.313.08 2.939.134.535.045 1.07.142 1.605.238 1.606.288 3.203.575 4.761-.514.789-.553.816-2.733.834-4.114.005-.42.01-.767.034-.97.092-.755.862-.59 1.44-.466.091.02.177.038.255.052Zm2.444 13.454a3.707 3.707 0 0 0 1.787-1.88h-.005c.455-.867.055-1.988-.404-2.792-.372-.624-1.171-.721-1.59-.758-.264-.023-.553.148-.95.382-.23.136-.496.292-.813.445-.868.418-2.71.625-4.052.625-1.34 0-4.248-.267-6.43-.533-2.182-.267-4.906-.583-6.569-.46-1.662.124-3.132 1.627-3.288 2.757-.193 1.313.124 3.334.725 3.766.602.432 2.109.496 3.946.317 1.108-.119 2.917.1 4.759.324 1.647.2 3.322.402 4.547.37 2.583-.069 3.073-.934 3.386-1.485l.004-.008c.213-.376.315-1.495.39-2.322a10.4 10.4 0 0 1 .097-.861c.077-.371.177-.432.628-.71.136-.084.303-.187.511-.324.9-.592 2.062-.308 2.389.207.194.307-.006.851-.229 1.454-.15.405-.309.838-.364 1.242-.138 1.006.51.868 1.525.244Zm-1.705 5.952c.374.245.75.49.98.864h-.015c.198.427.237.892.274 1.335.017.205.034.405.066.594l.213-.113c.732-.384 1.34-.703 1.625-2.473.22-1.364-1.002-3.013-1.002-3.013a28.747 28.747 0 0 1-3.633 1.599c-2.765 1.07-4.878 1.139-9.03.863-2.425-.16-3.702-.36-4.45-.476-.532-.083-.797-.124-1.017-.08-.528.106-.85.726-.918 1.41-.067.714.28.995.944 1.534l.209.17a9.696 9.696 0 0 0 3.734 1.939c1.65.413 6.6.17 7.809.1 1.74-.096 2.283-1.294 2.49-2.176.206-.882-.658-1.8-.658-1.8l1.838-.658c.168.138.354.26.54.382Zm-1.63 9.635c-.194-.185-.376-.358-.464-.66a3.828 3.828 0 0 1 .097-1.4l-7.85-.032a21.313 21.313 0 0 1-3.188-.35c-.42.78-.714 1.62-.873 2.49a2.02 2.02 0 0 0 .786 1.53c.918.538 1.92.921 2.962 1.134a48.37 48.37 0 0 0 7.855-.207c.698-.57 1.144-1.235 1.033-2.112a2.677 2.677 0 0 0-.357-.392Zm1.944-2.359c.39.367 1.334 1.251 1.52 2.375v.023c.03.648-.002 1.297-.097 1.938a3.674 3.674 0 0 0 1.3-2.388c.106-.675-.813-2.756-.813-2.756l-2.076.624c-.023.007.045.07.166.184Zm-30.562-2.877 1.915 2.783-2.861 1.984 1.35 1.916 7.4-5.108-1.332-1.93-3.06 2.11-1.915-2.784 3.06-2.109-1.328-1.929-7.418 5.108 1.323 1.93 2.866-1.971Z" fill="#fff"></path><path fillRule="evenodd" clipRule="evenodd" d="m12.164 58.96 1.111 3.152h1.659l.831 2.351-9.646-.23-.854-2.406 7.35-6.233.844 2.333-1.295 1.034Zm-1.47 1.176L8.218 62.13h3.174l-.698-1.994Zm1.951-5.397-.24-2.33-2.962.313-.142-1.378a3.215 3.215 0 0 0-1.016-2.232 2.966 2.966 0 0 0-2.296-.579 2.97 2.97 0 0 0-2.132 1.029 3.187 3.187 0 0 0-.55 2.389l.376 3.706 8.962-.918Zm-5.163-2.6.078.776-2.233.207-.078-.772c-.087-.84.235-1.3.983-1.378.749-.078 1.162.312 1.25 1.167Zm-.119-5.555a4.674 4.674 0 0 1-3.123-1.906 4.795 4.795 0 0 1-.754-1.71A5.737 5.737 0 0 1 4.111 39a4.74 4.74 0 0 1 1.245-1.41 4.643 4.643 0 0 1 3.555-.859 4.716 4.716 0 0 1 1.791.657c.523.322.975.746 1.332 1.245.362.518.617 1.104.75 1.722a5.691 5.691 0 0 1-.626 3.969 4.637 4.637 0 0 1-2.894 2.154c-.62.165-1.267.2-1.901.106Zm.381-2.42c.337.056.681.04 1.01-.047.313-.082.606-.224.864-.418.256-.197.473-.44.639-.716a2.65 2.65 0 0 0 .303-1.925 2.49 2.49 0 0 0-1.08-1.553 2.45 2.45 0 0 0-.95-.358 2.397 2.397 0 0 0-1.01.05 2.484 2.484 0 0 0-.864.423 2.618 2.618 0 0 0-.942 2.646 2.456 2.456 0 0 0 1.079 1.543c.29.177.614.291.951.336v.018Zm4.386-9.024a.588.588 0 0 1-.097.325l-.354.744 3.312 1.575 1.001-2.104-1.52-.72 2.342-4.888 1.52.721.997-2.104-3.311-1.575-.487 1.029-6.344-3.018-3.164 6.67 5.36 2.563c.248.102.47.259.648.459a.588.588 0 0 1 .097.324Zm-3.35-4.609 1.181-2.416 4.534 2.14-1.204 2.522a2.04 2.04 0 0 0-.363-.257 6.756 6.756 0 0 0-.523-.266L8.78 30.53Z" fill="#fff"></path><path d="m15.86 21.803 2.233-2.535-2.604-2.297 1.557-1.764 6.748 5.972-1.548 1.745-2.789-2.457-2.236 2.549 2.788 2.453-1.548 1.759-6.757-5.971 1.548-1.755 2.609 2.301Z" fill="#fff"></path><path fillRule="evenodd" clipRule="evenodd" d="m63.119 13.454-3.124-1.19-1.06 1.268-2.33-.886 6.43-7.194 2.39.92v9.645l-2.334-.891.028-1.672Zm.055-1.883.087-3.174-2.049 2.425 1.962.749Zm2.846 4.975 1.929 1.328 1.695-2.462 1.144.785a3.183 3.183 0 0 0 2.356.685 2.958 2.958 0 0 0 1.92-1.378 2.95 2.95 0 0 0 .597-2.297 3.215 3.215 0 0 0-1.465-1.966l-3.069-2.113-5.107 7.418Zm5.328-2.227-.643-.46 1.277-1.85.638.458c.708.487.85 1.043.427 1.659-.425.615-.992.68-1.7.193Z" fill="#fff"></path><path d="m77.854 19.221 4.671-.372 1.939 2.145-5.563.211-.896 6.077-2.034-2.25.854-4.878-2.898 2.618-1.567-1.737 6.697-6.04 1.571 1.737-2.774 2.489Z" fill="#fff"></path><path fillRule="evenodd" clipRule="evenodd" d="m80.982 29.57 1.507 2.981-1.135 1.19 1.107 2.227 6.477-7.105-1.153-2.297-9.568 1.001 1.125 2.228 1.64-.225Zm5.016-.694-2.2 2.297-.946-1.883 3.146-.414Z" fill="#fff"></path></svg>
              </div>
              <div className="text-gray-800 font-semibold leading-tight">
                Gloria Jeans — марка<br />
                №1 в России за 2024<br />
                год в категории «Сеть<br />
                магазинов одежды»
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-gray-600">
                © 1988–2025 Интернет-магазин одежды Gloria Jeans
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
              <Link className="text-gray-600 hover:text-gray-800 hover:underline text-sm">
                Политика конфиденциальности
              </Link>
              <Link className="text-gray-600 hover:text-gray-800 hover:underline text-sm">
                Оферта
              </Link>
              <Link className="text-gray-600 hover:text-gray-800 hover:underline text-sm">
                Карта сайта
              </Link>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-gray-500 text-xs leading-relaxed max-w-sm">
              На информационном ресурсе применяются рекомендательные
              технологии предоставления информации на
              основе сбора, систематизации и анализа
              сведений, относящихся к предпочтениям
              пользователей сети "Интернет", находящихся на
              территории Российской Федерации.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
