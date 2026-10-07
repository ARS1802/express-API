class ProviderController {
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

  async getProvider(req, res) {
    const { data, error } = await this.sb.from("fornecedores").select("*");
    if (error) {
      return res.status(500).json({ SupabaseError: error });
    } else {
      return res.json(data);
    }
  }
}
export default ProviderController;
