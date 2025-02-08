export class LocalStorageDB<T> {
  private key: string;
  private id: number;

  constructor(key: string) {
    this.key = key;
    this.id = Number.parseInt(
      localStorage.getItem(`${this.key}--count`) || "0",
      10
    );
  }

  getAll(): (T & { id: number })[] {
    return JSON.parse(localStorage.getItem(this.key) || "[]");
  }

  create(data: T) {
    if (!data) {
      throw new Error("O formato de dado enviado é incompatível");
    }

    if (typeof data === "object" && !Array.isArray(data)) {
      const newItem = { ...data, id: this.generateId() };
      const items = this.getAll();
      items.push(newItem);
      localStorage.setItem(this.key, JSON.stringify(items));
    }
  }

  remove(id: number) {
    const items = this.getAll();

    const updatedItems = items.filter((item) => item.id !== id);

    localStorage.setItem(this.key, JSON.stringify(updatedItems));
  }
  private generateId(): number {
    localStorage.setItem(`${this.key}--count`, JSON.stringify(++this.id));
    return this.id;
  }
}
