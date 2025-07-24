import { consultations, type Consultation, type InsertConsultation } from "@shared/schema";

export interface IStorage {
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  getConsultations(): Promise<Consultation[]>;
}

export class MemStorage implements IStorage {
  private consultations: Map<number, Consultation>;
  private currentId: number;

  constructor() {
    this.consultations = new Map();
    this.currentId = 1;
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const id = this.currentId++;
    const consultation: Consultation = {
      ...insertConsultation,
      message: insertConsultation.message || null,
      id,
      createdAt: new Date(),
    };
    this.consultations.set(id, consultation);
    return consultation;
  }

  async getConsultations(): Promise<Consultation[]> {
    return Array.from(this.consultations.values());
  }
}

export const storage = new MemStorage();
