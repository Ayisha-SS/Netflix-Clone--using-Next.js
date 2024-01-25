import React from 'react'
import Language from '../../spotlight/components/language'

export default function FooterCntnt() {
  return (
    <>
        <div className='font-sans text-white text-sm text-opacity-70 font-normal py-16 '>
            <div className=' mb-3'>
                Questions? Call <a href="tel:000-800-919-1694" className='underline'>000-800-919-1694</a>
            </div>
            <div className='flex flex-wrap'>
                <div className='mr-8 '>
                    <ul className='underline mt-4 p-0 mr-40 '>
                        <li className='mt-4'><a href="https://help.netflix.com/support/412">FAQ</a></li>
                        <li className='mt-4'><a href="http://ir.netflix.com/">Investor Relations</a></li>
                        <li className='mt-4'><a href="https://help.netflix.com/legal/privacy">Privacy</a></li>
                        <li className='mt-4'><a href="https://fast.com">Speed Test</a></li>
                    </ul>
                </div>    
                <div className=''>
                    <ul className='underline mt-4 p-0 mr-40 '>
                        <li className='mt-4'><a href="https://help.netflix.com">Help Centre</a></li>
                        <li className='mt-4'><a href="https://jobs.netflix.com/jobs">Jobs</a></li>
                        <li className='mt-4'><a href="#">Cookie Preferences</a></li>
                        <li className='mt-4'><a href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
                    </ul>
                </div>
                <div className=''>
                    <ul className='underline mt-4 p-0 mr-40'>
                        <li className='mt-4'><a href="/youraccount">Account</a></li>
                        <li className='mt-4'><a href="/watch">Ways to Watch</a></li>
                        <li className='mt-4'><a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li>
                        <li className='mt-4'><a href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a></li>
                    </ul>
                </div>
                <div className=''>
                    <ul className='underline mt-4 p-0 mr-40 '>
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
