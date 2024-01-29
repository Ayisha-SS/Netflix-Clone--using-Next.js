import React from 'react'
import Language from '../../spotlight/components/language'

export default function FooterCntnt() {
  return (
    <>
        <div className='font-sans text-white text-base text-opacity-70 font-normal py-16 '>
            <div className=' mb-3'>
            <h5 className='text-base'>Questions? Call <a href="tel:000-800-919-1694" className='underline'>000-800-919-1694</a></h5>
            </div>
            <div className='flex max-lg:whitespace-nowrap'>
                <div className='mr-40 '>
                    <ul className='underline mt-4 p-0 '>
                        <li className='mt-4'><a href="https://help.netflix.com/support/412">FAQ</a></li>
                        <li className='mt-4'><a href="http://ir.netflix.com/">Investor Relations</a></li>
                        <li className='mt-4'><a href="https://help.netflix.com/legal/privacy">Privacy</a></li>
                        <li className='mt-4'><a href="https://fast.com">Speed Test</a></li>
                    </ul>
                </div>    
                <div className='mr-40'>
                    <ul className='underline mt-4 p-0 mr- '>
                        <li className='mt-4'><a href="https://help.netflix.com">Help Centre</a></li>
                        <li className='mt-4'><a href="https://jobs.netflix.com/jobs">Jobs</a></li>
                        <li className='mt-4'><a href="#">Cookie Preferences</a></li>
                        <li className='mt-4'><a href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
                    </ul>
                </div>
                <div className='mr-40'>
                    <ul className='underline mt-4 p-0 mr-'>
                        <li className='mt-4'><a href="/youraccount">Account</a></li>
                        <li className='mt-4'><a href="/watch">Ways to Watch</a></li>
                        <li className='mt-4'><a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li>
                        <li className='mt-4'><a href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a></li>
                    </ul>
                </div>
                <div className='mr-40'>
                    <ul className='underline mt-4 p-0 mr- '>
                        <li className='mt-4'><a href="https://media.netflix.com/">Media Centre</a></li>
                        <li className='mt-4'><a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li>
                        <li className='mt-4'><a href="https://help.netflix.com/contactus">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className='mt-8'>
                <Language/>
            </div>
            <div className='mt-6 font-sans font-normal text-sm text-white text-opacity-70'>
                Netflix India
            </div>
        </div>
    </>
  )
}



// const FooterContent = () => {
//   return (
//     <div className='font-sans text-white text-base text-opacity-70 font-normal py-16'>
//       <div className='mb-3'>
//         <h5 className='text-base'>Questions? Call <a href="tel:000-800-919-1694" className='underline'>000-800-919-1694</a></h5>
//       </div>
//       <div className='flex max-lg:whitespace-nowrap'>
//         {renderLinkGroup([
//           { label: 'FAQ', link: 'https://help.netflix.com/support/412' },
//           { label: 'Investor Relations', link: 'http://ir.netflix.com/' },
//           { label: 'Privacy', link: 'https://help.netflix.com/legal/privacy' },
//           { label: 'Speed Test', link: 'https://fast.com' },
//         ])}
//         {renderLinkGroup([
//           { label: 'Help Centre', link: 'https://help.netflix.com' },
//           { label: 'Jobs', link: 'https://jobs.netflix.com/jobs' },
//           { label: 'Cookie Preferences', link: '#' },
//           { label: 'Legal Notices', link: 'https://help.netflix.com/legal/notices' },
//         ])}
//         {renderLinkGroup([
//           { label: 'Account', link: '/youraccount' },
//           { label: 'Ways to Watch', link: '/watch' },
//           { label: 'Corporate Information', link: 'https://help.netflix.com/legal/corpinfo' },
//           { label: 'Only on Netflix', link: 'https://www.netflix.com/in/browse/genre/839338' },
//         ])}
//         {renderLinkGroup([
//           { label: 'Media Centre', link: 'https://media.netflix.com/' },
//           { label: 'Terms of Use', link: 'https://help.netflix.com/legal/termsofuse' },
//           { label: 'Contact Us', link: 'https://help.netflix.com/contactus' },
//         ])}
//       </div>
//       <div className='mt-8'>
//         <Language />
//       </div>
//       <div className='mt-6 font-sans font-normal text-sm text-white text-opacity-70'>
//         Netflix India
//       </div>
//     </div>
//   );
// };

// const renderLinkGroup = (links:any) => (
//   <div className='mr-40'>
//     <ul className='underline mt-4 p-0 mr-'>
//       {links.map((link:any, index:any) => (
//         <li key={index} className='mt-4'><a href={link.link}>{link.label}</a></li>
//       ))}
//     </ul>
//   </div>
// );

// export default FooterContent;
