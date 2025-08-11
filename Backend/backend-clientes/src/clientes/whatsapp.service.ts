import { Injectable } from '@nestjs/common';
import * as Twilio from 'twilio';

@Injectable()
export class WhatsappService {
  private client: Twilio.Twilio;

  constructor() {
    this.client = Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN,
    );
  }

  async sendWhatsapp(to: string, message: string) {
    return this.client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:${to}`,
      body: message,
    });
  }
}