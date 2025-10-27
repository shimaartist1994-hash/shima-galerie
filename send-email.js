import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      message, 
      selectedArtworks 
    } = req.body;

    // Email an Galerie-Besitzer
    await resend.emails.send({
      from: 'Shima Gallery <contact@shima-gallery.art>',
      to: process.env.TO_EMAIL || 'shima.gallery@example.com',
      subject: `New Art Inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d4af37;">🎨 New Artwork Inquiry</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #333;">Customer Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>

          ${selectedArtworks ? `
          <div style="background: #fff8e1; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #d4af37;">Selected Artworks</h3>
            <p>${selectedArtworks}</p>
          </div>
          ` : ''}

          ${message ? `
          <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #1a1a1a;">Message</h3>
            <p>${message}</p>
          </div>
          ` : ''}

          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            Sent from Shima Gallery Contact Form
          </p>
        </div>
      `
    });

    // Bestätigungs-Email an Kunden
    await resend.emails.send({
      from: 'Shima Gallery <contact@shima-gallery.art>',
      to: email,
      subject: 'Thank you for your inquiry - Shima Gallery',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d4af37;">Thank You, ${firstName}! 🎨</h2>
          
          <p>We have received your inquiry about our artwork and will contact you shortly.</p>
          
          ${selectedArtworks ? `
          <div style="background: #fff8e1; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p><strong>Selected Artworks:</strong> ${selectedArtworks}</p>
          </div>
          ` : ''}

          <p>Best regards,<br>Shima Gallery</p>
          
          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            This is an automated confirmation email.
          </p>
        </div>
      `
    });

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('Resend error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send email. Please try again later.' 
    });
  }
}
