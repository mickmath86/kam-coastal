'use client'

import { useState } from 'react'
import { useId } from 'react'
import { toast } from 'sonner'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    tag: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  // Simple validation
  const { name, email, company, phone, message, tag } = formData
  if (!name || !email || !company || !phone || !message || !tag) {
    toast.error('Please fill out all required fields before submitting.')
    return
  }

  try {
    const response = await fetch(
      'https://services.leadconnectorhq.com/hooks/r4E8l9Cfj9Mq0cfRVa9Z/webhook-trigger/954ca67f-ecaa-4d5a-97ca-d6e67449ea8a',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    )

    if (response.ok) {
      toast.success('Form submitted successfully!')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        tag: '',
      })
    } else {
      toast.error('Submission failed. Please try again.')
    }
  } catch (error) {
    console.error(error)
    toast.error('An error occurred. Please try again later.')
  }
}


  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">Work inquiries</h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" value={formData.name} onChange={handleChange} />
          <TextInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
          <TextInput label="Company" name="company" value={formData.company} onChange={handleChange} />
          <TextInput label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          <TextInput label="Message" name="message" value={formData.message} onChange={handleChange} />

          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">What best describes you</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {['Property Owner/Seller', 'Faith Based Organization', 'Investor/Capital Partner', 'General Inquiry/Collaboration'].map((value) => (
                  <RadioInput
                    key={value}
                    label={value}
                    name="tag"
                    value={value}
                    checked={formData.tag === value}
                    onChange={handleChange}
                  />
                ))}
              </div>
            </fieldset>
          </div>
        </div>

        <Button type="submit" className="mt-10">Let’s work together</Button>
      </form>
    </FadeIn>
  )
}
