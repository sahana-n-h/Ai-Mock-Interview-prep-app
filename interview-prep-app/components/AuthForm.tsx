"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from "zod"
import Image from "next/image"
import Link from "next/link"
import {toast} from "sonner"
import {Form} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FormField from "@/components/FormField"
import { useRouter } from "next/navigation"


type FormType = "signin" | "signup";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === 'signup' ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  })
}
const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
  })
 

  function onSubmit(values: z.infer<typeof formSchema>) {
    try{
      if(type ==='signup'){
        toast.success('Account created successfully. Please sign in.');
        router.push('/sign-in');
      }else{
        toast.success('Signed in successfully.');
        router.push('/');
      }
       

    }catch(error){
      console.log(error);
      toast.error('There was an error: ${error}')
    }

  }
const isSignIn = type === 'signin';

  return (
    <div className="card-borer lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className= "flex flex-row gap-2 justify-center">
          <Image src="/logo.svg"  alt="logo" width={38} height={32} />
          <h2 className="text-primary-100">Interview Prep</h2>
        </div>
        <h3>Practice job interviews with AI</h3>
      </div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
        {!isSignIn &&(
          <FormField 
            control = {form.control}
            name = "name"
            lable = "Name"
            placeholder = "Enter your Name"/>
        )}
         <FormField 
            control = {form.control}
            name = "email"
            lable = "Email"
            placeholder = "Enter your email address"
            type = "email"
            />
        <FormField 
            control = {form.control}
            name = "password"
            lable = "Password"
            placeholder = "Enter your password"
            type = "password"
            />
        <Button className="btn" type="submit">{isSignIn ? 'Sign in' : 'Create an Account'}</Button>
      </form>
    </Form>
      <p className="text-center">
        {isSignIn ? "Don't have an account?" : "Already have an account?"}
        <Link href = {!isSignIn ? '/sign-in' : '/sign-up'} className="font-bold text-user-primary ml-1">
          {!isSignIn ? 'Sign in' : 'Sign up'}
        </Link>
       
      </p>
    </div>
  )
}

export default AuthForm