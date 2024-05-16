// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
 import { Button } from './ui/button'
 import { Input } from './ui/input'

export const Form = () => {
  return (
    <section
      id="Form"
      className="w-11/12 mx-auto"
    >

      <div className="isolate px-6 py-28 md:py-56 lg:py-36 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-muted-foreground sm:text-4xl">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Thanks{" "}
            </span>
            for taking the time to reach out.</h3>
          <p className="mt-2 md:mt-8 text-lg md:text-3xl leading-8 text-gray-600">
            How can I help you today ?
          </p>
        </div>

        <form action="https://formsubmit.co/7eda150ffd3bdfbb5cb58c14affa14d2" method="POST" className="mx-auto mt-6 md:mt-14 max-w-xl sm:mt-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:gap-y-10 lg:gap-y-4 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm md:text-md font-semibold leading-6 text-muted-foreground">
                First name
              </label>
              <div className="mt-1 md:mt-2.5 lg:mt-1.5">
                 <Input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className=""
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm md:text-md font-semibold leading-6 text-muted-foreground">
                Last name
              </label>
              <div className="mt-1 md:mt-2.5 lg:mt-1.5">
                 <Input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className=""
                />
              </div>
            </div>
            {/*
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-muted-foreground">
              Company
            </label>
            <div className="mt-2.5">
               <Input></Input>
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-muted-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm md:text-md font-semibold leading-6 text-muted-foreground">
                Email
              </label>
              <div className="mt-1 md:mt-2.5 lg:mt-1.5">
                 <Input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="sm:leading-6"
                  required
                  />
              </div>
            </div>
            <div className="sm:col-span-2">
              {/*
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-muted-foreground">
              Phone number
            </label>
            
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
               <Input></Input>
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-muted-foreground shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            */}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm md:text-md font-semibold leading-6 text-muted-foreground">
                Message
              </label>
              <div className="mt-1 md:mt-2.5 lg:mt-1.5">
                <textarea
                  name="message"
                  id="message"
                  placeholder='Hello...'
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 ring-1 ring-inset focus:ring-2 focus:ring-inset bg-background"
                  defaultValue={''}
                  required
                />
              </div>
            </div>

          </div>
          <div className="mt-10">
            <Button
              type="submit"
              className="block w-2/3 max-sm:mx-auto md:w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Let's talk
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}