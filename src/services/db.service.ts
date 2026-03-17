// The deployed Google Apps Script URL
const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || '';

export class DbService {
  /**
   * Generic method to fetch all submissions from Google Sheets
   */
  static async getAll() {
    if (!APPS_SCRIPT_URL) {
      console.warn("No Apps Script URL configured.");
      return [];
    }
    
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({ action: "getAll" })
    });
    
    const result = await response.json();
    if (result.status === "error") throw new Error(result.message);
    
    return result.data;
  }

  /**
   * Submit new manuscript (File + Metadata) to Google Drive and Google Sheets
   */
  static async submitManuscript(file: File, metadata: any) {
    if (!APPS_SCRIPT_URL) {
      throw new Error("No Apps Script configured. Cannot submit.");
    }

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          if (!e.target || typeof e.target.result !== 'string') {
            throw new Error("Failed to read file");
          }
          
          const base64 = e.target.result.split(',')[1];
          
          const response = await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify({
              action: "upload",
              base64: base64,
              type: file.type,
              name: file.name,
              email: metadata.email || '',
              authors: metadata.authors || '',
              title: metadata.title || '',
              journal: metadata.journal || ''
            })
          });
          
          const result = await response.json();
          if (result.status === "error") throw new Error(result.message);
          
          resolve(result);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

  /**
   * Update submission status in Google Sheets (Admin Only)
   */
  static async updateStatus(idTag: string, newStatus: string, shareLink: string = "") {
    if (!APPS_SCRIPT_URL) throw new Error("No Apps Script configured.");
    
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({
        action: "update",
        idTag: idTag,
        newStatus: newStatus,
        shareLink: shareLink
      })
    });
    
    const result = await response.json();
    if (result.status === "error") throw new Error(result.message);
    
    return result;
  }
}
