import { Controller, useForm } from "react-hook-form"
import { textClass } from "../common/constants"
import type z from "zod"
import { contactSchema } from "./contactSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Field, FieldError, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Textarea } from "../ui/textarea"
import { Whatsapp } from "../icons/brand-icons"
import { ArrowRight, Lock } from "lucide-react"
import { Button } from "../ui/button"
import { RevealOnScroll } from "../common/RevealOnScroll"

const labelClass = "absolute top-2 left-3 text-[11px]"

export const ContactForm = () => {

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      subject: '',
      message: ''
    }
  })

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    console.log(data)
    const text = ` *Dados da proposta*
Meu nome: ${data.name}
Assunto: ${data.subject}

Mensagem: ${data.message}
      `
    const url = `https://wa.me/${import.meta.env.VITE_PUBLIC_ZAP}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    form.reset()
  }

  return (
    <div className="lg:min-w-1/3">
      <RevealOnScroll className="flex flex-col items-center lg:block">
        <h1 className="font-semibold text-xl">Vamos conversar no WhatsApp</h1>
        <p className={textClass}>Preencha os campos abaixo e envie sua mensagem.</p>
        <p className={textClass}>Você será redirecionado para o WhatsApp.</p>
      </RevealOnScroll>

      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 w-75 mx-auto sm:mx-0 sm:w-full">
        <RevealOnScroll>
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="relative">
                <FieldLabel htmlFor={field.name} className={labelClass}>Seu nome</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Como posso te chamar?"
                  autoComplete="off"
                  className="h-16 pt-7 pb-2"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <Controller
            name="subject"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="mt-4 relative">
                <FieldLabel className={labelClass} htmlFor={field.name}>Assunto</FieldLabel>
                <Select value={field.value} onValueChange={field.onChange} id={field.name}>
                  <SelectTrigger className="w-full h-16! pt-7 pb-2">
                    <SelectValue placeholder="Selecione o assunto" />
                  </SelectTrigger>

                  <SelectContent alignItemWithTrigger={false}>
                    <SelectItem value="Oportunidade de emprego">Oportunidade de emprego</SelectItem>
                    <SelectItem value="Freelance">Freelance</SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
                  </SelectContent>
                </Select>

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="mt-4 relative">
                <FieldLabel className={labelClass} htmlFor={field.name}>Sua mensagem</FieldLabel>
                <Textarea
                  {...field}
                  placeholder="Conte um pouco sobre seu projeto ou ideia..."
                  className="h-60 resize-none pt-7 pb-2 overflow-y-auto field-sizing-fixed"
                  id={field.name}
                  aria-invalid={fieldState.invalid} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <Button
            type="submit"
            className="py-6 w-full mt-6 cursor-pointer bg-[#7277f0] text-white hover:bg-[#6367d8] transition-colors duration-300"
          >
            <Whatsapp className="mr-1" /> Iniciar conversa no WhatsApp <ArrowRight className="ml-1" />
          </Button>

          <p className={`mt-3 w-full text-sm sm:w-auto sm:flex sm:items-center sm:gap-2 ${textClass}`}>
            <Lock className="w-4 inline mr-1 mb-1 sm:block sm:mr-0 sm:mb-0" /> Sua mensagem será aberta diretamente no WhatsApp.
          </p>
        </RevealOnScroll>

      </form>
    </div >
  )
}