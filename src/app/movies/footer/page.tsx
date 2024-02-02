import Language from '@/app/main/spotlight/components/language'
import React from 'react'

export default function MovieFooter() {
  return (
    <>
    <div className='font-sans text-[#a3a3a3] text-sm text-opacity-70 font-normal py-16 trailer-wrapper'>
            <div className=' mb-3'>
                <h2 className='text-base mb-16 hover:underline'>Read about Netflix TV shows and movies and watch bonus videos on Tudum.com.</h2>
            <h5 className='text-base hover:underline cursor-pointer mt-'>Questions? Call Us </h5>
            </div>
            <div className='flex max-lg:whitespace-nowrap'>
                <div className='mr-40 '>
                    <ul className=' mt-4 p-0 '>
                        <li className='mt-4 hover:underline'><a href="https://help.netflix.com/support/412">FAQ</a></li>
                        <li className='mt-4 hover:underline'><a href="http://ir.netflix.com/">Investor Relations</a></li>
                        <li className='mt-4 hover:underline'><a href="https://help.netflix.com/legal/privacy">Privacy</a></li>
                        <li className='mt-4 hover:underline'><a href="https://fast.com">Speed Test</a></li>
                    </ul>
                </div>    
                <div className='mr-40'>
                    <ul className=' mt-4 p-0 mr- '>
                        <li className='mt-4 hover:underline'><a href="https://help.netflix.com">Help Centre</a></li>
                        <li className='mt-4 hover:underline'><a href="https://jobs.netflix.com/jobs">Jobs</a></li>
                        <li className='mt-4 hover:underline'><a href="#">Cookie Preferences</a></li>
                        <li className='mt-4 hover:underline'><a href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
                    </ul>
                </div>
                <div className='mr-40'>
                    <ul className=' mt-4 p-0 mr-'>
                        <li className='mt-4 hover:underline'><a href="/youraccount">Account</a></li>
                        <li className='mt-4 hover:underline'><a href="/watch">Ways to Watch</a></li>
                        <li className='mt-4 hover:underline'><a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li>
                        <li className='mt-4 hover:underline'><a href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a></li>
                    </ul>
                </div>
                <div className='mr-40'>
                    <ul className=' mt-4 p-0 mr- '>
                        <li className='mt-4 hover:underline'><a href="https://media.netflix.com/">Media Centre</a></li>
                        <li className='mt-4 hover:underline'><a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li>
                        <li className='mt-4 hover:underline'><a href="https://help.netflix.com/contactus">Contact Us</a></li>
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
