import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, product, message }: ContactFormData = await req.json();

    console.log("Sending contact email with data:", { name, email, phone, product, message });

    const emailResponse = await resend.emails.send({
      from: "Site Schiseg <onboarding@resend.dev>",
      to: ["schiseg@schiseg.com.br"],
      subject: "ENVIO AUTOMÁTICO: Solicitação de Proposta do Site",
      html: `
        <h2>Nova Solicitação de Proposta do Site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Produto de Interesse:</strong> ${product}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Este e-mail foi enviado automaticamente através do formulário de contato do site.</em></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);