import React from 'react'
import { assets, footerLinks } from '../assets/assets';

const FooterSection = () => {
  return (
    <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-300 bg-gray-500 mt-24">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
        <div className="md:max-w-96">
          <img alt="Tomato-Logo" className="h-25" src={assets.logo} />
          <p className="mt-6 text-sm">
            Fresh tomatoes and vegetables—grown with care and delivered with
            pride. Since the early days of local farming, growers like us have
            been bringing nature's best to your table, one harvest at a time.
          </p>
          <div className="flex items-center gap-2 mt-16">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
              alt="google play"
              className="h-10 w-auto border border-white rounded"
            />
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
              alt="app store"
              className="h-10 w-auto border border-white rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-25">
          {footerLinks.map((item, index)=> (
            <div key={index} className="">
                <h3 className="text-white font-semibold mb-4">{item.title}</h3>
                <ul className="space-y-2">
                    {item.links.map((link, linksIndex)=> (
                        <li key={linksIndex}>
                            <a 
                              href={link.url} 
                              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                            >
                              {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} © Tomatoes{" "}
      </p>
    </footer>
  );
}

export default FooterSection
