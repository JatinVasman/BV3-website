import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Business Volunteers <contact@businessvolunteers.online>',
      to: [
        'contact@businessvolunteers.online',
        'contact.businessvolunteers@gmail.com',
      ],
      replyTo: email,
      subject: `New Contact: ${name} — ${service}`,
      html: `
        <div style="font-family: 'DM Sans', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #c9a84c, #e8d48b); padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #0d0d0d; margin: 0; font-size: 24px;">New Contact Submission</h1>
          </div>
          <div style="background: #f5f5f5; padding: 30px; border-radius: 0 0 8px 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; color: #333;">${message}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
            <p style="color: #666; font-size: 12px;">
              This email was submitted through the Business Volunteers website contact form.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
