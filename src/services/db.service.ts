import { supabase } from './supabase.client';

export class DbService {
  /**
   * Generic method to fetch all records from a table
   */
  static async getAll(table: string, columns = '*') {
    const { data, error } = await supabase.from(table).select(columns);
    if (error) throw error;
    return data;
  }

  /**
   * Generic method to fetch a single record by ID
   */
  static async getById(table: string, id: string | number, columns = '*') {
    const { data, error } = await supabase.from(table).select(columns).eq('id', id).single();
    if (error) throw error;
    return data;
  }

  /**
   * Insert a new record
   */
  static async insert(table: string, payload: any) {
    const { data, error } = await supabase.from(table).insert(payload).select().single();
    if (error) throw error;
    return data;
  }

  /**
   * Update a record
   */
  static async update(table: string, id: string | number, payload: any) {
    const { data, error } = await supabase.from(table).update(payload).eq('id', id).select().single();
    if (error) throw error;
    return data;
  }

  /**
   * Upload file to Supabase Storage
   */
  static async uploadFile(bucket: string, path: string, file: File) {
    const { data, error } = await supabase.storage.from(bucket).upload(path, file, { upsert: true });
    if (error) throw error;
    return data;
  }

  /**
   * Get public URL of a file
   */
  static getFileUrl(bucket: string, path: string) {
    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
  }
}
