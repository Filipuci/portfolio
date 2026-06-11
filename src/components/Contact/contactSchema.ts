import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "O nome precisa ter pelo menos 2 caracteres").max(10, "Máximo de 10 caracteres"),
  subject: z.string().min(1, "Selecione um assunto"),
  message: z.string().min(10, "Mensagem muito curta")
})