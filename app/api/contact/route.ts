import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    console.log('Tentative d\'envoi pour:', { name, email, subject });

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['genitahrazafindrasoa@gmail.com'], // Votre email pour recevoir les messages
      subject: `Portfolio - Message de ${name}: ${subject}`,
      reply_to: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #21D375; border-bottom: 2px solid #21D375; padding-bottom: 10px;">
            Nouveau message de contact
          </h2>
          
          <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-radius: 8px;">
            <p><strong style="color: #333;">Nom:</strong> ${name}</p>
            <p><strong style="color: #333;">Email:</strong> ${email}</p>
            <p><strong style="color: #333;">Sujet:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background: #f9f9f9; border-left: 4px solid #21D375;">
            <p><strong style="color: #333;">Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px; text-align: center;">
            Cet email a été envoyé depuis votre portfolio.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Erreur Resend détaillée:', error);
      return NextResponse.json(
        { error: error.message || "Erreur lors de l'envoi" },
        { status: 500 }
      );
    }

    console.log('Email envoyé avec succès:', data);
    return NextResponse.json({ 
      success: true, 
      message: 'Message envoyé avec succès !' 
    });
    
  } catch (error) {
    console.error('Erreur serveur détaillée:', error);
    return NextResponse.json(
      { error: 'Erreur serveur. Vérifiez votre connexion.' },
      { status: 500 }
    );
  }
}