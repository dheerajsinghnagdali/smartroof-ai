import Link from "next/link";
import {
  Apple,
  ArrowDown,
  Bag,
  Facebook,
  Google,
  HelpCircle,
  Lock,
  Logo,
  Message,
  Windows,
} from "../components/icons";
import Image from "next/image";

const Signup = () => {
  return (
    <main className="mx-auto grid max-w-[1440px] justify-center lg:grid-cols-2 lg:justify-start lg:gap-x-8">
      <div className="max-w-lg p-5 lg:py-[2.5rem] lg:pl-[3.75rem] lg:pr-0">
        <Logo />

        <div className="mt-6 lg:mt-[4.5rem]">
          <h1 className="text-2xl font-semibold text-slate-800 lg:text-4xl">
            Let’s create your account
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            We’re excited to get you started with your new SmartRoof account!
          </p>
        </div>

        <div className="mt-8">
          <form>
            <div>
              <div className="grid grid-cols-2 gap-x-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 inline-block text-sm font-medium text-slate-900"
                  >
                    First Name
                  </label>
                  <div className="relative">
                    <input
                      className="w-full rounded-[0.5rem] border-slate-300 text-sm placeholder:text-slate-900"
                      type="text"
                      placeholder="Pietro Schirano"
                      id="firstName"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 inline-block text-sm font-medium text-slate-900"
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <input
                      className="w-full rounded-[0.5rem] border-slate-300 text-sm placeholder:text-slate-900"
                      type="text"
                      placeholder="Pietro Schirano"
                      id="lastName"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm font-medium text-slate-900"
              >
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-2 top-1/2 inline-flex -translate-y-1/2 items-center gap-x-1.5 text-slate-900">
                  <span>US</span>
                  <ArrowDown />
                </span>
                <input
                  className="w-full rounded-[0.5rem] border-slate-300 pl-[3.625rem] text-sm placeholder:text-slate-900"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  id="phone"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm font-medium text-slate-900"
              >
                Email
              </label>
              <div className="relative">
                <Message className="absolute left-2 top-1/2 -translate-y-1/2" />
                <input
                  className="w-full rounded-[0.5rem] border-slate-300 pl-10 text-sm placeholder:text-slate-900"
                  type="email"
                  placeholder="Pietro Schirano"
                  id="email"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="password"
                className="mb-2 inline-block text-sm font-medium text-slate-900"
              >
                Create Password
              </label>
              <div className="relative max-w-lg">
                <Lock className="absolute left-2 top-1/2 -translate-y-1/2" />
                <input
                  className="w-full rounded-[0.5rem] border-slate-300 px-10 text-sm placeholder:text-slate-900"
                  type="email"
                  placeholder="*******************"
                  id="password"
                />
                <HelpCircle className="absolute right-2 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="mt-5 flex gap-x-3">
              <input
                className="h-5 w-5 rounded-[0.375rem] border-[#4D5CFD] text-[#4D5CFD] focus:ring-[#4D5CFD]"
                type="checkbox"
                id="terms-conditions"
              />
              <label
                htmlFor="terms-conditions"
                className="text-sm text-slate-500"
              >
                I agree to the terms and conditions to signing up to SmartRoof.
              </label>
            </div>

            <button
              className="mt-8 inline-flex w-full items-center justify-center gap-x-3 rounded-[0.5rem] bg-black px-4 py-2.5 font-semibold text-white"
              type="submit"
            >
              <Bag />
              <span>Sign Up</span>
            </button>
          </form>

          <div className="mt-8 flex items-center gap-x-2.5 lg:mt-[2.625rem] lg:gap-x-3">
            <span className="inline-block h-[1px] flex-auto bg-slate-300"></span>
            <p className="text-sm text-slate-500">Or Continue With</p>
            <span className="inline-block h-[1px] flex-auto bg-slate-300"></span>
          </div>

          <div className="mt-8 flex items-start justify-center gap-x-6">
            <button
              className="rounded-[0.5rem] border border-gray-300 p-2.5"
              type="button"
            >
              <Google />
            </button>
            <button
              className="rounded-[0.5rem] border border-gray-300 bg-[#1877F2] p-2.5"
              type="button"
            >
              <Facebook />
            </button>
            <button
              className="rounded-[0.5rem] border border-gray-300 bg-black p-2.5"
              type="button"
            >
              <Apple />
            </button>
            <button
              className="rounded-[0.5rem] border border-gray-300 bg-[#F1511B] p-2.5"
              type="button"
            >
              <Windows />
            </button>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="text-slate-500">
              Already have an account?{" "}
              <Link
                className="font-medium text-slate-900 underline underline-offset-2"
                href="/login"
              >
                Log in to SmartRoof
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden h-[72rem] p-5 lg:block">
        <div className="relative h-full overflow-hidden rounded-2xl">
          <Image
            className="object-cover"
            fill={true}
            src="/signup-page-image.jpg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Signup;
