class ProductController {
  /**
   * Controlador ultilizado nas rotas de produtos.
   * @param {Supabase} supabse
   */
  constructor(supabse) {
    this.sb = supabse;
  }

  async health(req, res) {
    res.send("HEALTH OK!");
  }

  async getProduct(req, res) {
    const { data, error } = await this.sb.from("produtos").select("*");
    if (error) {
      return res.status(500).json({ SupabaseError: error });
    } else {
      return res.json(data);
    }
  }

  async postProduct(req, res) {}
}
export default ProductController;
