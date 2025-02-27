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

  getById(id: number) {
    const data = this.getAll();
    const index = data.findIndex((item) => item.id === id);

    return data[index];
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

  update(id: number, data: Partial<T>) {
    const items = this.getAll();
    const index = items.findIndex((item) => item.id === id);

    if (index === -1) {
      return "Deu Erro papai";
    }

    items[index] = { ...items[index], ...data };

    localStorage.setItem(this.key, JSON.stringify(items));
  }

  remove(id: number) {
    const items = this.getAll();
    const removedItemIndex = items.findIndex((item) => item.id === id);

    items.splice(removedItemIndex, 1);

    localStorage.setItem(this.key, JSON.stringify(items));
  }
  private generateId(): number {
    localStorage.setItem(`${this.key}--count`, JSON.stringify(++this.id));
    return this.id;
  }
}
