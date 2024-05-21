
export class Celular {
  constructor(
    public id?: number | null,
    public marca?: string | null,
    public anio?: number | null,
    public precio?: number | null,
    public serial?: string | null,
    public sistema?: string | null,
    public gama?: string | null,
    public createdAt?: number | string | null,
  ) {
    if (!id) {
      this.id = null;
    }

    if (!createdAt) {
        this.createdAt = new Date().toISOString();
      }
  }
}