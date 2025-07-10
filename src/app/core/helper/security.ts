export class Security {
  private static readonly SECRET_KEY =
    "7a2c3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v"; // match .NET env key
  private static readonly ITERATIONS = 100000;
  private static readonly SALT_SIZE = 16;
  private static readonly IV_SIZE = 16;
  private static readonly KEY_SIZE = 32;

  static async encrypt(plainText: string): Promise<string> {
    const encoder = new TextEncoder();
    const salt = crypto.getRandomValues(new Uint8Array(this.SALT_SIZE));
    const iv = crypto.getRandomValues(new Uint8Array(this.IV_SIZE));
    const key = await this.deriveKey(this.SECRET_KEY, salt);

    const encrypted = await crypto.subtle.encrypt(
      { name: "AES-CBC", iv },
      key,
      encoder.encode(plainText)
    );

    const result = new Uint8Array(
      salt.length + iv.length + encrypted.byteLength
    );
    result.set(salt, 0);
    result.set(iv, salt.length);
    result.set(new Uint8Array(encrypted), salt.length + iv.length);

    return this.uint8ArrayToBase64(result);
  }

  static async decrypt(encryptedText: string): Promise<string> {
    const fullCipher = this.base64ToUint8Array(encryptedText);

    const salt = fullCipher.slice(0, this.SALT_SIZE);
    const iv = fullCipher.slice(this.SALT_SIZE, this.SALT_SIZE + this.IV_SIZE);
    const cipher = fullCipher.slice(this.SALT_SIZE + this.IV_SIZE);

    const key = await this.deriveKey(this.SECRET_KEY, salt);

    try {
      const decrypted = await crypto.subtle.decrypt(
        { name: "AES-CBC", iv },
        key,
        cipher
      );
      return new TextDecoder().decode(decrypted);
    } catch (err) {
      console.error("Decryption failed:", err);
      return "";
    }
  }

  private static async deriveKey(
    password: string,
    salt: Uint8Array
  ): Promise<CryptoKey> {
    const encoder = new TextEncoder();
    const baseKey = await crypto.subtle.importKey(
      "raw",
      encoder.encode(password),
      "PBKDF2",
      false,
      ["deriveKey"]
    );

    return crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt,
        iterations: this.ITERATIONS,
        hash: "SHA-256",
      },
      baseKey,
      { name: "AES-CBC", length: 256 },
      false,
      ["encrypt", "decrypt"]
    );
  }

  private static uint8ArrayToBase64(bytes: Uint8Array): string {
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  private static base64ToUint8Array(base64: string): Uint8Array {
    const binary = atob(base64.replace(/ /g, "+"));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  static base64Encode(plainText: string): string {
    return btoa(unescape(encodeURIComponent(plainText)));
  }

  static base64Decode(base64Text: string): string {
    try {
      return decodeURIComponent(escape(atob(base64Text.replace(/ /g, "+"))));
    } catch {
      return "";
    }
  }
}
