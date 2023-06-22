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
} from "@/components/icons";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const Signup = () => {
  return (
    <main className="lg:grid lg:grid-cols-2 lg:gap-x-12">
      <div className="p-5 pb-[3.25rem] lg:py-[2.5rem] lg:pl-[3.75rem] lg:pr-12">
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
            <div className="grid grid-cols-2 gap-x-4">
              <div>
                <Label className="mb-2" htmlFor="firstName">
                  First Name
                </Label>
                <Input
                  className="w-full"
                  variant="filled"
                  type="text"
                  placeholder="Pietro Schirano"
                  id="firstName"
                />
              </div>
              <div>
                <Label className="mb-2" htmlFor="lastName">
                  Last Name
                </Label>
                <Input
                  className="w-full"
                  variant="filled"
                  type="text"
                  placeholder="Pietro Schirano"
                  id="lastName"
                />
              </div>
            </div>

            <div className="mt-5">
              <Label className="mb-2" htmlFor="email">
                Phone Number
              </Label>
              <div className="relative">
                <span className="absolute left-2 top-1/2 inline-flex -translate-y-1/2 items-center gap-x-1.5 text-slate-900">
                  US
                  <ArrowDown />
                </span>
                <Input
                  className="w-full pl-[3.625rem]"
                  variant="filled"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  id="phone"
                />
              </div>
            </div>

            <div className="mt-5">
              <Label className="mb-2" htmlFor="email">
                Email
              </Label>
              <div className="relative">
                <Message className="absolute left-2 top-1/2 -translate-y-1/2" />
                <Input
                  className="w-full pl-10"
                  type="email"
                  placeholder="Pietro Schirano"
                  id="email"
                />
              </div>
            </div>

            <div className="mt-5">
              <Label className="mb-2 " htmlFor="password">
                Create Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-2 top-1/2 -translate-y-1/2" />
                <Input
                  className="w-full px-10"
                  type="email"
                  placeholder="*******************"
                  id="password"
                />
                <HelpCircle className="absolute right-2 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="mt-5 flex gap-x-3">
              <Checkbox id="terms-conditions" />
              <Label className="text-slate-500" htmlFor="terms-conditions">
                I agree to the terms and conditions to signing up to SmartRoof.
              </Label>
            </div>

            <Button className="mt-8 w-full font-semibold" type="submit">
              <Bag className="mr-3" />
              Sign Up
            </Button>
          </form>

          <div className="mt-8 flex items-center gap-x-2.5 lg:mt-[2.625rem] lg:gap-x-3">
            <span className="inline-block h-[1px] flex-auto bg-slate-300"></span>
            <p className="text-sm text-slate-500">Or Continue With</p>
            <span className="inline-block h-[1px] flex-auto bg-slate-300"></span>
          </div>

          <div className="mt-8 flex items-start justify-center gap-x-6">
            <button
              className="rounded-lg border border-gray-300 p-2.5"
              type="button"
            >
              <Google />
            </button>
            <button
              className="rounded-lg border border-gray-300 bg-[#1877F2] p-2.5"
              type="button"
            >
              <Facebook />
            </button>
            <button
              className="rounded-lg border border-gray-300 bg-black p-2.5"
              type="button"
            >
              <Apple />
            </button>
            <button
              className="rounded-lg border border-gray-300 bg-[#F1511B] p-2.5"
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

      <div className="hidden h-[72rem] p-5 pl-0 lg:block">
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
