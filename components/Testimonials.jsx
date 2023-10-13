import React from 'react'

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            {/* heading */}
            <h2 className="text-4xl font-bold text-center">
                What's differen about Manage?
            </h2>
            {/* Container */}
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6 space-y-16">
                <div></div>
                {/*Testimoial 1*/}
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <img src='img/avatar-anisha.png' className='w-16 -mt-14' alt='' />
                    <h5 className="text-lg font-bold">Anisha Li</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        “Manage has supercharged our team’s workflow. The ability to
                        maintain visibility on larger milestones at all times keeps
                        everyone motivated.”
                    </p>
                </div>
                 {/*Testimoial 2*/}
                 <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <img src='img/avatar-ali.png' className='w-16 -mt-14' alt='' />
                    <h5 className="text-lg font-bold">Ali Bravo</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        “We have been able to cancel so many other subscriptions since
                        using Manage. There is no more cross-channel confusion and
                        everyone is much more focused.”
                    </p>
                </div>
                {/*Testimoial 3*/}
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <img src='img/avatar-richard.png' className='w-16 -mt-14' alt='' />
                    <h5 className="text-lg font-bold">Richard Watts</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        “Manage has supercharged our team’s workflow. The ability to
                        maintain visibility on larger milestones at all times keeps
                        everyone motivated.”
                    </p>
                </div>
            </div>
            {/* button */}
            <div className="my-16 ">
            <a href="" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baselin hover:bg-brightRedLight">
                        Get Started
                    </a>
            </div>
        </div>
    </section>
  )
}

export default Testimonials;