import { siteConfig } from '@/lib/config'
import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
        <footer
            className='relative z-10 dark:bg-gray-800 flex-shrink-0 justify-center text-center m-auto w-full leading-6 text-sm p-6 bg-white dark:text-gray-400'
        >

            <span>
                <DarkModeButton />

                <i className='fas fa-copyright' /> {`${copyrightDate}`} <span className='mx-1 animate-pulse'><i className='fas fa-heart' /></span> <a href={siteConfig('LINK')} className='underline font-bold '>{siteConfig('AUTHOR')}</a>.<br />

                {siteConfig('BEI_AN') && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{siteConfig('BEI_AN')}</a><br /></>}
                {siteConfig('WANG_AN') && <><i className='<svg t="1720519013835" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1867" width="200" height="200"><path d="M982.127035 201.464247A372.772424 372.772424 0 0 1 817.912255 18.732667a34.597179 34.597179 0 0 0-34.597179-18.5168c-7.309263 0-27.7752 3.410989-54.575832 7.309263a2088.987424 2088.987424 0 0 1-220.252465 26.313348A1705.494748 1705.494748 0 0 1 286.285178 7.52513L238.044041 0.215867a35.571748 35.571748 0 0 0-35.084464 19.978653A296.756086 296.756086 0 0 1 44.592208 200.002395a30.698905 30.698905 0 0 0-17.542232 27.287916c0 487.284214 205.146654 619.82552 465.356424 790.374994a34.597179 34.597179 0 0 0 39.470022 0c269.955454-177.371454 464.86914-305.527202 464.86914-790.374994a30.698905 30.698905 0 0 0-14.618527-25.826064zM514.33419 954.318357C263.38282 791.078146 99.16804 672.668082 94.782482 243.857974A337.68796 337.68796 0 0 0 256.073557 65.511952l18.5168 2.923705a1723.524264 1723.524264 0 0 0 233.896422 29.237053H514.33419a2114.326203 2114.326203 0 0 0 227.074444-26.800632l26.800631-3.898274A426.860971 426.860971 0 0 0 929.013056 243.857974c-3.898274 428.322824-168.113054 546.732888-414.678866 710.460383z" fill="#F94825" p-id="1868"></path><path d="M639.078949 254.578226h-97.456843V238.985132a32.160758 32.160758 0 1 0-64.321516 0v15.593094h-92.584001A107.689811 107.689811 0 0 0 270.692083 363.242606a32.160758 32.160758 0 1 0 64.321516 0c0-39.470021 41.419158-41.419158 48.728422-41.419158h254.362359c8.283832 0 48.728421 0 48.728422 41.419158a32.160758 32.160758 0 1 0 64.321516 0 107.689811 107.689811 0 0 0-112.075369-108.66438z" fill="#F94825" p-id="1869"></path><path d="M719.968128 418.305722h-45.804716V399.788922a33.135327 33.135327 0 0 0-65.296085 0v18.5168h-194.913685V399.788922a30.698905 30.698905 0 0 0-32.648042-28.262484 30.698905 30.698905 0 0 0-32.648043 28.262484v18.5168h-44.830147a30.698905 30.698905 0 0 0-33.135327 28.262485 30.698905 30.698905 0 0 0 32.648042 28.262484h44.342864a178.346022 178.346022 0 0 0 85.274737 162.752927c-14.618526 4.385558-39.470021 10.720253-60.910526 15.593095a28.749769 28.749769 0 0 0-24.364211 27.287916 16.567663 16.567663 0 0 0 0 6.821979 31.673474 31.673474 0 0 0 31.673474 21.440506h7.796547c35.571748-7.796547 76.990906-19.978653 79.427327-20.465937 15.105811-4.385558 29.724337-9.2584 43.368295-14.131242 14.618526 5.360126 29.237053 9.745684 43.855579 14.131242 0 0 43.368295 12.66939 78.940043 20.465937a33.135327 33.135327 0 0 0 39.470021-20.465937 16.567663 16.567663 0 0 0 0-6.821979 28.749769 28.749769 0 0 0-24.36421-27.287916c-21.440505-4.872842-46.292-11.207537-60.910527-15.593095a177.371454 177.371454 0 0 0 85.274737-162.752927h45.317432a30.698905 30.698905 0 0 0 32.648042-28.262485 30.698905 30.698905 0 0 0-30.211621-29.237053z m-208.557643 194.913686a131.079453 131.079453 0 0 1-97.456843-137.414148h194.913685a130.104885 130.104885 0 0 1-97.456842 136.439579z" fill="#F94825" p-id="1870"></path></svg>' /> <a href='https://beian.mps.gov.cn/#/query/webSearch?code=33030402001375' className='mr-2'>{siteConfig('WANG_AN')}</a><br /></>}

                <span className='hidden busuanzi_container_site_pv'>
                    <i className='fas fa-eye' /><span className='px-1 busuanzi_value_site_pv'> </span> </span>
                <span className='pl-2 hidden busuanzi_container_site_uv'>
                    <i className='fas fa-users' /> <span className='px-1 busuanzi_value_site_uv'> </span> </span>
                <br />
                <h1>{title}</h1>
                <span className='text-xs font-serif  text-gray-500 dark:text-gray-300 '>Powered by  <a href='https://github.com/tangly1024/NotionNext' className='underline '>NotionNext {siteConfig('VERSION')}</a>.</span>
            </span>
        </footer>
  )
}

export default Footer
