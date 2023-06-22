import {
  Apple,
  Bag,
  Google,
  HelpCircle,
  Lock,
  Logo,
  Message,
  Windows,
  Facebook,
} from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <main className="lg:grid lg:grid-cols-2 lg:gap-x-12">
      <div className="p-5 pb-[3.25rem] lg:py-[2.5rem] lg:pl-[3.75rem] lg:pr-12">
        <Logo />

        <div className="mt-6 lg:mt-[4.5rem]">
          <h1 className="text-2xl font-semibold text-slate-800 lg:text-4xl">
            Welcome Back
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            It’s nice to see you again! Please enter your details to sign in.
          </p>
        </div>

        <div className="mt-8">
          <form>
            <div>
              <Label className="mb-2" htmlFor="email">
                Email
              </Label>
              <div className="relative">
                <Message className="absolute left-2 top-1/2 -translate-y-1/2" />
                <Input
                  className="w-full pl-10"
                  variant="filled"
                  type="email"
                  placeholder="Pietro Schirano"
                  id="email"
                />
              </div>
            </div>

            <div className="mt-5">
              <Label htmlFor="password" className="mb-2">
                Create Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-2 top-1/2 -translate-y-1/2" />
                <Input
                  className="w-full px-10 text-sm"
                  variant="filled"
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

            <Button className="mt-8 w-full" type="submit">
              <Bag className="mr-3" />
              <span>Sign in with Email</span>
            </Button>
          </form>

          <div className="mt-8 flex items-center gap-x-2.5 lg:mt-[2.625rem] lg:gap-x-3">
            <span className="inline-block h-[1px] flex-auto bg-slate-300"></span>
            <p className="text-sm text-slate-500">Or Sign In With</p>
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
              Don&apos;t have an account?{" "}
              <Link
                className="font-medium text-slate-900 underline underline-offset-2"
                href="/signup"
              >
                Create an account?
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden h-[62rem] p-5 lg:block">
        <div className="relative h-full overflow-hidden rounded-2xl">
          <Image
            className="object-cover"
            fill={true}
            src="/login-page-image.jpg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Login;
